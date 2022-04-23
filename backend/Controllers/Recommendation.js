const axios = require("axios")
const Movies = require("../Models/Movies");
const Series = require("../Models/Series");

exports.Movie = async (req,res) =>{
    let {title} = req.params
    try{
        let recommendation_movie = await axios.get(`http://127.0.0.1:5000/api/python/movie/${title}/online`)
        let movies = await Movies.find({tmdb:recommendation_movie.data})
        console.log(movies)
        return res.json(movies)
    }catch(e){
        console.error(e)
        return res.status(500).send("Internal Server Error")

    }
}

exports.Genre = async (req,res) =>{
    let {genre} = req.params
    try{
        let recommendation_movie = await axios.get(`http://127.0.0.1:5000/api/python/movie/genre/${genre}/online`)
        let movies = await Movies.find({tmdb:recommendation_movie.data})
        return res.json(movies)
    }catch(e){
        console.error(e)
        return res.status(500).send("Internal Server Error")
    }
}

exports.getStream = async ({list,onModel}) => {
    let query = {tmdb:list}
    return onModel === "movies" ? await Movies.find(query) : await Series.find(query)
}