const express = require("express")
const router = express.Router()
const axios = require("axios")
const Genre = require("../Models/Genre")
const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const Excel = require("../Helpers/Excel")
const User = require("../Models/User")
const Review = require("../Models/Review")
const StreamUser = require("../Models/StreamUser")
const RandomTextGenerator=require("random-text-generator");



const { ImportMovies,ImportCast,ImportSeries, UpdateGenres} = require("../Helpers/TMDB");
const {InternalServerError} = require("../Constants/statusCodes");
const Mongoose = require("mongoose");
const { AddReview, getRandomInt } = require("../Helpers/recommendation")

// const {ImportMovies} = require("../Controllers/recombee/index")

router.get("/excel/:type",(req,res)=>{
    let {type} = req.params

    if (type === "nationality"){
        res.send(Excel.importNationality())
    }
})


// router.get("/tmdb/movies",(req,res) => {
//     res.send(ImportMovies())
// })

router.get("/tmdb/movies/genres",(req,res)=>{
    UpdateGenres()
})

// router.get("/tmdb/cast",(req,res)=>{
//     ImportCast()
// })

router.get("/tmdb/series",(req,res)=>{
    res.send(ImportSeries())
})


router.get("/tmdb/genres/:type",async (req,res)=>{
    let {type} = req.params
    try{
        let genres = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=01a1a82396f4e0f7423e9a45bac71390`)
        genres.data.genres.map(async element=>{
            let newGenres = await Genre.create({
                tmdb: element.id,
                name: element.name,
                type: type === "tv" ? "series" : "movie"
            })
            console.log(newGenres)
        })
        res.status(200).json(genres.data)
    }catch(e){
        console.error(e)
        res.status(500).send("An Error Occurred")
    }
})


router.get("/delete/:table", async (req,res) =>{
    let {table} = req.params

    if (table === "movie"){
        let movie = await Movie.deleteMany()
        res.json(movie)
    }else if (table === "series"){
        let series = await Series.deleteMany()
        res.json(series)
    }
})


router.post("/clean", async (req,res) =>{
    let {type,user,stream} = req.body
    let query
    switch (type){
        case "refresh":
            try {
                let streamData = stream === "Movies" ? await Movie.find() : await Series.find()
                streamData = streamData?.map(e=>e._id)
                streamData.map(async (on,index)=>{
                    const avg_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(on)}).group({
                        _id: "$on",
                        average: {$avg: "$rate"}
                    })
                    const count_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(on)}).count("rate")
                    if (stream === "Movies"){
                        await Movie.updateOne({_id: on}, {
                            vote_count: count_review[0]?.rate || 0,
                            vote_average: avg_review[0]?.average || 0
                        })
                    }else{
                        await Series.updateOne({_id: on}, {
                            vote_count: count_review[0]?.rate || 0,
                            vote_average: avg_review[0]?.average || 0
                        })
                    }
                })
                return res.status(200).send("Updated")
            }catch (e) {
                console.error(e)
                return res.status(409).json({message: "Unknown Error"})
            }
            break;
        case "reviews":
            query = user ? {userId:user} : {}
            let streamQuery =  stream ? {onModel:stream} : {}
            try {
                let deleted_reviews = await Review.deleteMany(query,streamQuery)
                let streamData = stream === "Movies" ? await Movie.find({$or:[{vote_count:{$ne:0}},{vote_average:{$ne:0}}]}) : await Series.find({$or:[{vote_count:{$ne:0}},{vote_average:{$ne:0}}]})
                streamData = streamData?.map(e=>e._id)
                streamData.map(async (on,index)=>{
                    const avg_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(on)}).group({
                        _id: "$on",
                        average: {$avg: "$rate"}
                    })
                    const count_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(on)}).count("rate")
                    if (stream === "Movies"){
                        await Movie.updateOne({_id: on}, {
                            vote_count: count_review[0]?.rate || 0,
                            vote_average: avg_review[0]?.average || 0
                        })
                    }else{
                        await Series.updateOne({_id: on}, {
                            vote_count: count_review[0]?.rate || 0,
                            vote_average: avg_review[0]?.average || 0
                        })
                    }
                })
                return res.status(200).send("Reviews Deleted")
            }catch (e) {
                console.error(e)
                return res.status(409).json({message: "Unknown Error"})
            }
            break;

        case "watched":
            query = user ? {_id:user} : {}
            try{
                const users = await User.updateMany(query,{movies_watched: []})
                console.log(users)
                return res.status(200).send("Watched Deleted")
            }catch (e) {
                console.error(e)
                return res.status(409).json({message: "Unknown Error"})
            }
            break;
        case "visited":
            query = user ? {userId:user} : {}
            try{
                const users = await StreamUser.deleteMany(query)
                console.log(users)
                return res.status(200).send("Visited Deleted")
            }catch (e) {
                console.error(e)
                return res.status(409).json({message: "Unknown Error"})
            }
            break;


        default:

            break;
    }
    // return res.status(409).json({message: "Incorrect Config"})

})

router.post("/add_reviews",async(req,res)=>{
    let {users} = req.body
    return users.map(async (user,user_index)=>{
        let {id,genre_id,min,min_rate,max_rate,type} = user
        let genre = genre_id.split(",").map(e=>parseInt(e))
        
        let randomTextGenerator=new RandomTextGenerator();

        let match = { "genre_ids": { "$exists": true },release_date: { $gte : new Date("2010-01-01") } }
        let redact = {
            "$cond": [
                { "$gte": [
                        { "$size": { "$setIntersection": [ "$genre_ids", genre ] } },
                        parseInt(min)
                    ]},
                "$$KEEP",
                "$$PRUNE"
            ]
        }
        try{
            let movies = type === "Movies" ? await Movie.aggregate().match(match).redact(redact) : await Series.aggregate().match(match).redact(redact)
            let titles = movies.map(e  => e.title)
            movies = movies.map(e => e._id)
            for (let title of titles) randomTextGenerator.learn(title);
    
            for (let i = 0; i < 100 ; i++) {
                const random = Math.floor(Math.random() * movies.length);
    
                let title=randomTextGenerator.generate();
                let random_rate = getRandomInt(min_rate,max_rate)
                console.log(random_rate);
                let review = {
                    title,
                    rate: random_rate ,
                    userId:id.trim(),
                    body: title + " " + (new Date()).toISOString() ,
                    on:movies[random],
                    onModel:type
                }
                await AddReview({review})
                console.log(`User ${user_index} with Review ${i}`);
            }
    
            return res.status(200).json({movies})
        }catch (e) {
            console.log(e);
            return res.status(500).json(InternalServerError)
        }
    })
})

router.post("/add_visit",async (req,res)=>{
    let {genre,userid} = req.body
    try{
        let movies = await Movie.find({genre_ids: {$in: genre}, release_date: { $gte : new Date("2020-01-01") } })
        movies = movies.map(e => e._id)

        for (let i = 0; i < 150 ; i++) {
            const random = Math.floor(Math.random() * movies.length);

            const user = await User.findById(userid)
            if (!user){
                return res.status(403).json(DynamicMessage(403,"Unauthorized"))
            }
            let added = await StreamUser.create({StreamModel: "Movies",Stream:movies[random],userId:userid})

        }
        return res.status(200).json({data:"none"})
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
})

router.post("/add_watch",async (req,res) =>{
    let {genre,userid} = req.body
    try{
        let movies = await Movie.find({genre_ids: {$in: genre}, release_date: { $gte : new Date("2019-01-01") } })
        movies = movies.map(e => e._id)

        for (let i = 0; i < 10 ; i++) {
            const random = Math.floor(Math.random() * movies.length);

            const user = await User.findById(userid)
            if (user.movies_watched.length > 0 && user.movies_watched.includes(movies[random])){
                continue;
            }else{
                await User.updateOne({_id:userid},{ $push: { movies_watched: movies[random] } })
            }


        }
        return res.status(200).json({data:"none"})
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
})



router.get("/movies/votes", async (req,res)=>{
    let movie = await Series.updateMany({},{vote_count:0,vote_average:0})
    res.json(movie)
})

module.exports = router