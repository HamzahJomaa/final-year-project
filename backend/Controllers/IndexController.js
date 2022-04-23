const Movies = require("../Models/Movies");
const Series = require("../Models/Series");
const User = require("../Models/User")
const Reviews = require("../Models/Review")
const StreamUser = require("../Models/StreamUser")
const {RetrievedData, InternalServerError, DynamicMessage, NoContent} = require("../Constants/statusCodes");
const Genre = require("../Models/Genre");
const {mongo} = require("mongoose");
const {getGenreByLimit, getKNNByLimit, getQualfied, getTopGenres} = require("../Helpers/Python");
const axios = require("axios");
const { getQuantile, getMean, getWeightedRate } = require("../Helpers/recommendation");


let lookup = {
    from: "genres",
    localField: "genre_ids",
    foreignField: "tmdb",
    as: "genres"
}

let project = {
    title: "$title",
    tmdb: "$tmdb",
    backdrop_path: "$backdrop_path",
    poster_path: "$poster_path",
    vote_average: "$vote_average",
    vote_count: "$vote_count",
    overview: "$overview",
    genres: "$genres.name",
    date: "$release_date",
    genre_ids: "$genre_ids"
}



exports.getGenre = async (req, res) => {
    let {type} = req.params
    try {
        let genres = await Genre.find({type: type === "movies" ? "movie" : "series"})
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
    let {order, data} = req.body
    let {type,perPage, currentPage} = req.params
    const sort = order && order.split("-")
    const sort_algo = sort && sort[1] === "asc" ? 1 : -1

    let query = data?.q ? {title: {'$regex': data.q, '$options': 'i'}} : {}
    let rating = data?.rate ? {vote_average: {$gte: data.rate}} : {}
    let genreQuery = data?.genre ? {genre_ids: {$in: data.genre}} : {}
    let fromQuery = data?.datefrom ? {release_date : {$gte : data.datefrom}} : {}
    let toQuery = data?.dateto ? {release_date : {$lte : data.dateto}} : {}
    let sortQuery
    switch (sort[0]) {
        case "release_date":
            sortQuery = {release_date:sort_algo}
            break;
        case "vote_average":
            sortQuery = {vote_average:sort_algo}
            break;
        default:
            sortQuery = {}
            break;
    }

    try {
        let result = type === "movies" ? await Movies.find({$and:[query,rating,genreQuery,fromQuery,toQuery]}).skip(parseInt(perPage) * (parseInt(currentPage) - 1)).limit(parseInt(perPage)).sort(sortQuery) : await Series.find({$and:[query,rating,genreQuery,fromQuery,toQuery]}).skip(parseInt(perPage) * (parseInt(currentPage) - 1)).limit(parseInt(perPage)).sort(sortQuery)
        let stream_count = type === "movies" ?  await Movies.find({$and:[query,rating,genreQuery,fromQuery,toQuery]}).count() :  await Series.find({$and:[query,rating,genreQuery,fromQuery,toQuery]}).count()
        return res.status(200).json(RetrievedData(200, {result,stream_count}))
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }

}


exports.getPersonalizedHomepage = async (req,res) =>{
    const userId =
        req.body.token || req.query.token || req.headers["user"]

    try{
        let genresProfile = await getProfileGenre({userId,StreamModel:"Movies"})
        let genreWatched = await getWatchedGenres({userId,StreamModel: "movies"})
        let combinedGenres = genresProfile.filter(function(n) {
            return genreWatched.indexOf(n) !== -1;
        });

        let recent_reviews_movies = await Reviews.find({userId,onModel:"Movies"}).sort({createdAt: -1}).limit(5).populate({path: 'on', select: "tmdb"}).exec()
        let tmdb_reviews_movies = recent_reviews_movies.map(e => e.on.tmdb)
        tmdb_reviews_movies = [...new Set(tmdb_reviews_movies)]
        let based_on_recent_reviews_movies = tmdb_reviews_movies && await getKNNByLimit({onModel: "movies",list:tmdb_reviews_movies,limit:4})
        let movies_on_recent_reviews = tmdb_reviews_movies && await Movies.find({tmdb:based_on_recent_reviews_movies.data})

        let recent_reviews_series = await Reviews.find({userId,onModel:"Series"}).sort({createdAt: -1}).limit(5).populate({path: 'on', select: "tmdb"}).exec()
        let tmdb_reviews_series = recent_reviews_series.map(e => e.on.tmdb)
        tmdb_reviews_series = [...new Set(tmdb_reviews_series)]
        console.log(tmdb_reviews_series)
        let based_on_recent_reviews_series = tmdb_reviews_series.length > 0 && await getKNNByLimit({onModel: "series",list:tmdb_reviews_series,limit:4})
        let series_on_recent_reviews = tmdb_reviews_series.length > 0  && await Series.find({tmdb:based_on_recent_reviews_series.data})


        let finalGenres = combinedGenres.length > 0 ? combinedGenres : genreWatched.length > 0 ? genreWatched : genresProfile

        let recommended_ids = finalGenres.length > 0 ? await getGenreByLimit({onModel:"movies",genre:finalGenres,limit:5}) : ""
        let genre_movies = recommended_ids ? await Movies.aggregate().match({tmdb:{$in:[...new Set(recommended_ids.data)].map(e => e)}}).lookup(lookup).sample(10).project(project) : ""

        genre_movies && genre_movies.map(movie=>{
            movie.genres = [...new Set(movie.genres)]
        })

        return res.status(200).json(DynamicMessage(200,{genre_movies,movies_on_recent_reviews,series_on_recent_reviews}))

    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.Homepage = async (req, res) => {
    try {
        let top_rated_movies = await Movies.aggregate().sort({vote_average: -1,release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let qualified_movies_python = await getQualfied({onModel:"movies",limit: 10})
        
        let popularity_movies = await Movies.find({tmdb:qualified_movies_python.data})
        
        let top_review_movies = await Movies.aggregate().sort({vote_count: -1,release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let tmdb_latest = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=01a1a82396f4e0f7423e9a45bac71390&language=en-US&page=1")
        
        let id = tmdb_latest.data.results.map(e=>e.id)
        
        let latest_movies = await Movies.aggregate().match({tmdb:{$in:id}}).sort({release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let top_rated_series = await Series.aggregate().sort({vote_average: -1,release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let top_reviewed_series = await Series.aggregate().sort({vote_count: -1,release_date: -1}).limit(10).lookup(lookup).project(project)

        let qualified_series_python = await getQualfied({onModel:"series",limit: 10})
        
        let popularity_series = await Series.find({tmdb:qualified_series_python.data})

        let top_genres_movies_python = await getTopGenres({onModel:"movies",limit:4})

        let genre01_python_movies = await getGenreByLimit({onModel:"movies",genre:top_genres_movies_python.data[0],limit:5})
        let genre01_movies = await Movies.aggregate().match({tmdb:{$in:[...new Set(genre01_python_movies.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre02_python_movies = await getGenreByLimit({onModel:"movies",genre:top_genres_movies_python.data[1],limit:5})
        let genre02_movies = await Movies.aggregate().match({tmdb:{$in:[...new Set(genre02_python_movies.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre03_python_movies = await getGenreByLimit({onModel:"movies",genre:top_genres_movies_python.data[2],limit:5})
        let genre03_movies = await Movies.aggregate().match({tmdb:{$in:[...new Set(genre03_python_movies.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre04_python_movies = await getGenreByLimit({onModel:"movies",genre:top_genres_movies_python.data[3],limit:5})
        let genre04_movies = await Movies.aggregate().match({tmdb:{$in:[...new Set(genre04_python_movies.data)].map(e => e)}}).lookup(lookup).project(project)
        


        let top_genres_series_python = await getTopGenres({onModel:"series",limit:4})

        let genre01_python_series = await getGenreByLimit({onModel:"series",genre:top_genres_series_python.data[0],limit:5})
        let genre01_series = await Series.aggregate().match({tmdb:{$in:[...new Set(genre01_python_series.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre02_python_series = await getGenreByLimit({onModel:"series",genre:top_genres_series_python.data[1],limit:5})
        let genre02_series = await Series.aggregate().match({tmdb:{$in:[...new Set(genre02_python_series.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre03_python_series = await getGenreByLimit({onModel:"series",genre:top_genres_series_python.data[2],limit:5})
        let genre03_series = await Series.aggregate().match({tmdb:{$in:[...new Set(genre03_python_series.data)].map(e => e)}}).lookup(lookup).project(project)

        let genre04_python_series = await getGenreByLimit({onModel:"series",genre:top_genres_series_python.data[3],limit:5})
        let genre04_series = await Series.aggregate().match({tmdb:{$in:[...new Set(genre04_python_series.data)].map(e => e)}}).lookup(lookup).project(project)
        


        latest_movies.map(movie=>{
            movie.genres = [...new Set(movie.genres)]
        })


        let movies = {
            top_rated_movies,
            top_review_movies,
            latest_movies,
            popularity_movies,
            top_genres_movies: [
                {genre:top_genres_movies_python.data[0],data:genre01_movies},
                {genre:top_genres_movies_python.data[1],data:genre02_movies},
                {genre:top_genres_movies_python.data[2],data:genre03_movies},
                {genre:top_genres_movies_python.data[3],data:genre04_movies}
            ]
        }

        let series = {
            top_rated_series,
            top_reviewed_series,
            popularity_series,
            top_genres_series: [
                {genre:top_genres_series_python.data[0],data:genre01_series},
                {genre:top_genres_series_python.data[1],data:genre02_series},
                {genre:top_genres_series_python.data[2],data:genre03_series},
                {genre:top_genres_series_python.data[3],data:genre04_series}
            ]
        }
        
        return res.status(200).json(RetrievedData(200, { movies, series}))
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }

}

const getWatchedGenres = async ({userId,StreamModel}) =>{
    try{
        let userMovies = await User.findById(userId)

        let match = {_id:{$in:userMovies.movies_watched.map(e => e)}}
        let lookup = {
            from:`genres`,
            localField:"genre_ids",
            foreignField:"tmdb",
            as:"genres",
        }
        let project = {
            "genres":"$genres.name"
        }
        let result = await Movies.aggregate().match(match).lookup(lookup).project(project)

        let FinalGenres = result.map(e => (e.genres))
        FinalGenres = [...new Set(FinalGenres.flat(2))]
        return FinalGenres
    }catch (e) {
        return false
    }

}

const getProfileGenre = async ({userId,StreamModel}) =>{
    try{
        let genresByLoad = await StreamUser
            .aggregate()
            .match({userId:mongo.ObjectId(userId),StreamModel})
            .lookup({
                from:`${StreamModel.toLowerCase()}`,
                localField:"Stream",
                foreignField:"_id",
                as:"StreamData"
            })
            .unwind("$StreamData")
            .group({_id: "$StreamData._id","visited" : { $sum : 1}})
            .sort({visited: -1})
        genresByLoad = genresByLoad.filter(e => e.visited > 5)
        let AllGenre = await Movies
            .aggregate()
            .match({_id:{$in:genresByLoad.map(e => e._id)}})
            .lookup({
                from:`genres`,
                localField:"genre_ids",
                foreignField:"tmdb",
                as:"genres"
            })
            .project({
                "genres":"$genres.name"
            })
        let FinalGenres = AllGenre.map(e => (e.genres))
        FinalGenres = [...new Set(FinalGenres.flat(2))]
        return FinalGenres
    }catch (e) {
        console.error(e)
    }
}



