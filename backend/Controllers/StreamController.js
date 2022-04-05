const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const User = require("../Models/User")
const {InternalServerError, RetrievedData, NoContent, DynamicMessage} = require("../Constants/statusCodes");
const axios = require("axios");
const Movies = require("../Models/Movies");
const {getTMDB} = require("../Helpers/TMDB");
const StreamUser = require("../Models/StreamUser");


exports.Watched = async (req,res) =>{

}

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
        let data = type === "movie" ? await Movie.aggregate().match({tmdb: parseInt(id)}).lookup(lookup).project(project) : await Series.findOne({tmdb: id})
        let recommendation_movie = await axios.get(`http://127.0.0.1:5000/api/python/movie/${data[0].title}`)
        let cast = await getTMDB("movie",id,"credits")
        let images = await getTMDB("movie", id, "images")
        let movies = await Movies.find({tmdb: recommendation_movie.data})
        res.status(200).json({
            statusMessage: `${type} returned successfully`, data: data[0], recommended_movies: movies, cast: cast.data, images: images.data
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

