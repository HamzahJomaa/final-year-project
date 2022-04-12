const express = require("express")
const router = express.Router()
const axios = require("axios")
const Genre = require("../Models/Genre")
const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const Excel = require("../Helpers/Excel")
const {ImportMovies, ImportCast,ImportSeries, UpdateGenres} = require("../Helpers/TMDB");

router.get("/excel/:type",(req,res)=>{
    let {type} = req.params

    if (type === "nationality"){
        res.send(Excel.importNationality())
    }
})


router.get("/tmdb/movies",(req,res) => {
    res.send(ImportMovies())
})
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



router.get("/movies/votes", async (req,res)=>{
    let movie = await Series.updateMany({},{vote_count:0,vote_average:0})
    res.json(movie)
})

module.exports = router