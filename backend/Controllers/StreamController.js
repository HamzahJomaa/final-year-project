const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const User = require("../Models/User")
const Review = require("../Models/Review")
const {InternalServerError, RetrievedData, NoContent, DynamicMessage} = require("../Constants/statusCodes");
const axios = require("axios");
const Movies = require("../Models/Movies");
const {getTMDB, getTrailers, getStreamTMDB} = require("../Helpers/TMDB");
const StreamUser = require("../Models/StreamUser");
const {getRecommendation} = require("../Helpers/Python");




exports.saveUserFlow = async (req,res) =>{
    let {StreamModel,Stream,userId} = req.body

    try{
        const user = await User.findById(userId)
        if (!user){
            return res.status(403).json(DynamicMessage(403,"Unauthorized"))
        }
        let added = await StreamUser.create({StreamModel,Stream,userId})
        if (added){
            return res.status(200).json(RetrievedData(200,added))
        }
        return res.status(204).json(NoContent)
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}


exports.getStreamById = async (req, res) => {
    let {id, type} = req.params
    let lookup = {
        from: "genres", localField: "genre_ids", foreignField: "tmdb", as: "genres"
    }

    let project = {
        title: "$title",
        backdrop_path: "$backdrop_path",
        poster_path: "$poster_path",
        vote_average: "$vote_average",
        vote_count: "$vote_count",
        overview: "$overview",
        genres: "$genres.name",
        date: "$release_date"
    }
    try {
        let data = type === "movies" ? await Movie.aggregate().match({tmdb: parseInt(id)}).lookup(lookup).project(project) : await Series.aggregate().match({tmdb: parseInt(id)}).lookup(lookup).project(project)
        let tmdb = type === "movies" ? await getStreamTMDB("movie",parseInt(id)) : await getStreamTMDB("tv",parseInt(id))

        data[0]["backdrop_path"] = tmdb.data.backdrop_path
        data[0]["runtime"] = type === "movies" ? tmdb?.data?.run_time : tmdb?.data?.episode_run_time
        data[0].genres = [...new Set(data[0].genres)]
        let recommendation_movie = await getRecommendation({type,title:data[0].title,db:"online"})
        let cast = type === "movies" ?  await getTMDB("movie",id,"credits") :  await getTMDB("tv",id,"credits")
        let images = type === "movies" ? await getTMDB("movie", id, "images") : await getTMDB("tv", id, "images")
        let movies = type === "movies" ? await Movies.find({tmdb: recommendation_movie.data}) : await Series.find({tmdb: recommendation_movie.data})
        let trailers = type === "movies" ? await getTMDB("movie",id,"videos") : await getTMDB("tv",id,"videos")
        let providers = type === "movies" ? await getTMDB("movie",id,"/watch/providers") : await getTMDB("tv",id,"/watch/providers")
        let youtube = trailers.data.results.filter(e=>e.type === "Trailer")
        let last_review = await Review.findOne({on:data[0]._id}).sort({_id:-1}).populate({
            path: 'userId',
            select: "firstName lastName"
        })
        let review_count = await Review.find({on:data[0]._id}).count()
        res.status(200).json({
            statusMessage: `${type} returned successfully`,
            data: data[0],
            recommended_movies: movies,
            cast: cast.data,
            images: images.data,
            last_review,review_count,
            trailer:youtube[0]?.key,
            providers: type === "movies" ? providers?.data?.results?.US?.rent : providers?.data?.results?.US?.flatrate
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}


exports.getStream = async (req, res) => {
    let {perPage, currentPage, type} = req.params
    let pipeline = [{
        $facet: {
            metadata: [{$count: "total"}, {$addFields: {page: parseInt(currentPage)}},],
            data: [{$skip: perPage * (currentPage - 1)}, {$limit: parseInt(perPage)},], // add projection here wish you re-shape the docs
        },
    }]
    try {
        let data = type === "movie" ? await Movie.aggregate(pipeline) : await Series.aggregate(pipeline)
        res.status(200).json({
            ...data[0]
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }


}

