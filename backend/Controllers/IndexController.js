const Movies = require("../Models/Movies");
const Series = require("../Models/Series");
const {RetrievedData, InternalServerError} = require("../Constants/statusCodes");

exports.Search = (req,res) =>{
    let {q} = req.body



}


exports.Homepage = async (req,res)=>{
    let lookup = {
        from:"genres",
        localField: "genre_ids",
        foreignField: "tmdb",
        as:"genres"
    }

    let project = {
        title:"$title",
        backdrop_path: "$backdrop_path",
        poster_path:"$poster_path",
        vote_average: "$vote_average",
        vote_count: "$vote_count",
        overview: "$overview",
        genres: "$genres.name",
        date:"$release_date"
    }


    try{
        let movies = await Movies.aggregate().limit(10).lookup(lookup).unwind().project(project)
        let series = await Series.find().limit(10);

        let data = {
            movies,
            series
        }

        return res.status(200).json(RetrievedData(200,data))
    }catch (e) {
        return res.status(500).json(InternalServerError)
    }

}

