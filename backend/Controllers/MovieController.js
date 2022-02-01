const Movie = require("../Models/Movies")


exports.getAllMovies = async (req,res) =>{
    let { page }  = req.params
    let movies = await Movie.aggregate([{$limit:10 * page}])
    res.status(200).json({
        page:parseInt(page),
        count: movies.length,
        movies
    })
}