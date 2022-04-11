const Movies = require("../Models/Movies");
const Series = require("../Models/Series");
const {RetrievedData, InternalServerError, DynamicMessage, NoContent} = require("../Constants/statusCodes");
const Genre = require("../Models/Genre");


exports.getGenre = async (req, res) => {
    let {type} = req.params
    try {
        let genres = await Genre.find({type})
        if (genres?.length > 0) {
            return res.status(200).json(DynamicMessage(200, genres))
        }
        return res.status(204).json(NoContent)
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.Search = async (req, res) => {
    let {q, perPage, currentPage, type, rate, genre, datefrom, dateto} = req.body

    let query = q ? {title: {'$regex': q, '$options': 'i'}} : {}
    let rating = rate ? {vote_average: {$gte: rate}} : {}
    let genreQuery = genre ? {genre_ids: {$in: genre}} : {}

    try {
        let result = type === "movies" ? await Movies.find({$and:[query,rating,genreQuery]}) : await Series.find()
        return res.status(200).json(RetrievedData(200, result))
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }

}


exports.Homepage = async (req, res) => {
    let lookup = {
        from: "genres",
        localField: "genre_ids",
        foreignField: "tmdb",
        as: "genres"
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
        let movies = await Movies.aggregate().limit(10).lookup(lookup).unwind().project(project)
        let series = await Series.find().limit(10);

        let data = {
            movies,
            series
        }

        return res.status(200).json(RetrievedData(200, data))
    } catch (e) {
        return res.status(500).json(InternalServerError)
    }

}

