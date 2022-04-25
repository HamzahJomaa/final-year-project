const Movies = require("../Models/Movies");
const Series = require("../Models/Series");
const User = require("../Models/User")
const Reviews = require("../Models/Review")
const StreamUser = require("../Models/StreamUser")
const {RetrievedData, InternalServerError, DynamicMessage, NoContent} = require("../Constants/statusCodes");
const Genre = require("../Models/Genre");
const {mongo} = require("mongoose");
const {getGenreByLimit, getKNNByLimit, getQualfied, getTopGenres,getCorrelation} = require("../Helpers/Python");
const axios = require("axios");
const { getQuantile, getMean, getWeightedRate } = require("../Helpers/recommendation");
const { getStream } = require("./Recommendation");

const Watchlist = require("../Models/Watclist")
const Stream = require("stream");


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
        let pending_watchlist_movies = await Watchlist.find({userId,onModel:"Movies",watched:false}).populate({path:"on"}).exec()
        pending_watchlist_movies = pending_watchlist_movies.map(e=>e.on)

        let pending_watchlist_series = await Watchlist.find({userId,onModel:"Series",watched:false}).populate({path:"on"}).exec()
        pending_watchlist_series = pending_watchlist_series.map(e=>e.on)




        let genres_visited_movies = await getProfileGenre({userId,StreamModel:"Movies"})
        let genres_watched_movies = await getWatchedGenres({userId,StreamModel: "Movies"})
        let genres_movies = genres_visited_movies.filter(function(n) {
            return genres_watched_movies.indexOf(n) !== -1;
        });
        let genres_movies_final = genres_movies.length > 0 ? genres_movies : genres_watched_movies.length > 0 ? genres_watched_movies : genres_visited_movies
        let genres_movies_id = genres_movies_final.length > 0 ? await getGenreByLimit({onModel:"movies",genre:genres_movies_final,limit:2}) : ""
        let genres_movie_final = []
        genres_movies_id = genres_movies_id?.data?.length > 0 ? genres_movies_id?.data?.map(e => e.data) : []
        genres_movies_id?.length > 0 &&  genres_movies_id.map(id => {
            genres_movie_final.push(...new Set(id))
        })
        let genre_movies_returned = genres_movie_final.length > 0 ? await Movies.aggregate().match({tmdb:{$in:[...new Set(genres_movie_final)]}}).lookup(lookup).sample(10).project(project) : []
        genre_movies_returned.length > 0 && genre_movies_returned.map(movie=>{
            movie.genres = [...new Set(movie.genres)]
        })


        let genres_visited_series = await getProfileGenre({userId,StreamModel:"Series"})
        let genres_watched_series = await getWatchedGenres({userId,StreamModel: "Series"})
        let genres_series = genres_visited_series.filter(function(n) {
            return genres_watched_series.indexOf(n) !== -1;
        });
        let genres_series_final_ids = genres_series.length > 0 ? genres_series : genres_watched_series.length > 0 ? genres_watched_series : genres_visited_series
        let genres_series_id = genres_series_final_ids.length > 0 ? await getGenreByLimit({onModel:"series",genre:genres_series_final_ids,limit:2}) : ""
        let genres_series_final = []
        genres_series_id = genres_series_id?.data?.length > 0 ? genres_series_id?.data?.map(e => e.data) : []
        genres_series_id.length > 0 && genres_series_id.map(id => {
            genres_series_final.push(...new Set(id))
        })
        let genre_series_returned = genres_series_final.length > 0 ? await Series.aggregate().match({tmdb:{$in:[...new Set(genres_series_final)]}}).lookup(lookup).sample(10).project(project) : []
        genre_series_returned.length > 0 && genre_series_returned.map(series=>{
            series.genres = [...new Set(series.genres)]
        })


        let recent_reviews_movies = await Reviews.find({userId,onModel:"Movies"}).sort({createdAt: -1}).limit(5).populate({path: 'on', select: "tmdb"}).exec()
        let tmdb_reviews_movies = recent_reviews_movies.map(e => e.on.tmdb)
        tmdb_reviews_movies = [...new Set(tmdb_reviews_movies)]
        let knn_based_on_recent_reviews_movies = tmdb_reviews_movies.length > 0 ? await getKNNByLimit({onModel: "movies",list:tmdb_reviews_movies,limit:4}) : {data: []}
        let correlation_based_on_recent_reviews_movies = (knn_based_on_recent_reviews_movies?.data?.length == 0 && tmdb_reviews_movies.length > 0 ) ? await getCorrelation({onModel: "movies",list:tmdb_reviews_movies,limit:4}) : {data:[]}
        let based_on_recent_reviews_movies = []

        if (knn_based_on_recent_reviews_movies?.data.length > 0 )
            based_on_recent_reviews_movies = knn_based_on_recent_reviews_movies?.data
        else if (correlation_based_on_recent_reviews_movies?.data.length > 0)
            based_on_recent_reviews_movies = correlation_based_on_recent_reviews_movies?.data
        else
            based_on_recent_reviews_movies = []

        let movies_on_recent_reviews = based_on_recent_reviews_movies.length > 0 && await Movies.find({tmdb:based_on_recent_reviews_movies})

        let recent_reviews_series = await Reviews.find({userId,onModel:"Series"}).sort({createdAt: -1}).limit(5).populate({path: 'on', select: "tmdb"}).exec()
        let tmdb_reviews_series = recent_reviews_series.map(e => e.on.tmdb)
        tmdb_reviews_series = [...new Set(tmdb_reviews_series)]
        let knn_based_on_recent_reviews_series = tmdb_reviews_series.length > 0 ? await getKNNByLimit({onModel: "series",list:tmdb_reviews_series,limit:4}) : []
        let correlation_based_on_recent_reviews_series = knn_based_on_recent_reviews_series.data?.length == 0 && await getCorrelation({onModel: "series",list:tmdb_reviews_series,limit:4})

        let based_on_recent_reviews_series = []

        if (knn_based_on_recent_reviews_series?.data?.length > 0 )
            based_on_recent_reviews_series = knn_based_on_recent_reviews_series?.data
        else if (correlation_based_on_recent_reviews_series?.data?.length > 0)
            based_on_recent_reviews_series = correlation_based_on_recent_reviews_series?.data
        else
            based_on_recent_reviews_series = []

        let series_on_recent_reviews = based_on_recent_reviews_movies.length > 0 && await Series.find({tmdb:based_on_recent_reviews_series})





        return res.status(200).json(DynamicMessage(200,{
            genre_movies_returned,
            genre_series_returned,
            movies_on_recent_reviews,
            series_on_recent_reviews,
            pending_watchlist_movies,
            pending_watchlist_series
        }))

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

        let tmdb_cast = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=01a1a82396f4e0f7423e9a45bac71390&language=en-US&page=1")

        let id = tmdb_latest.data.results.map(e=>e.id)
        
        let latest_movies = await Movies.aggregate().match({tmdb:{$in:id}}).sort({release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let top_rated_series = await Series.aggregate().sort({vote_average: -1,release_date: -1}).limit(10).lookup(lookup).project(project)
        
        let top_reviewed_series = await Series.aggregate().sort({vote_count: -1,release_date: -1}).limit(10).lookup(lookup).project(project)

        let qualified_series_python = await getQualfied({onModel:"series",limit: 10})
        
        let popularity_series = await Series.find({tmdb:qualified_series_python.data})



        let top_genres_movies_python = await getTopGenres({onModel:"movies",limit:4})
        let top_genres_series_python = await getTopGenres({onModel:"series",limit:4})


        let top_movies_genres_python = await getGenreByLimit({onModel:"movies",genre:top_genres_movies_python.data,limit:4})
        let top_series_genres_python = await getGenreByLimit({onModel:"series",genre:top_genres_series_python.data,limit:4})

        let genre01_series = await getStream({list: top_series_genres_python.data[0].data, onModel:"series"})
        let genre02_series = await getStream({list: top_series_genres_python.data[1].data, onModel:"series"})
        let genre03_series = await getStream({list: top_series_genres_python.data[2].data, onModel:"series"})
        let genre04_series = await getStream({list: top_series_genres_python.data[3].data, onModel:"series"})

        let genre01_movies = await getStream({list: top_movies_genres_python.data[0].data, onModel:"movies"})
        let genre02_movies = await getStream({list: top_movies_genres_python.data[1].data, onModel:"movies"})
        let genre03_movies = await getStream({list: top_movies_genres_python.data[2].data, onModel:"movies"})
        let genre04_movies = await getStream({list: top_movies_genres_python.data[3].data, onModel:"movies"})



        latest_movies.map(movie=>{
            movie.genres = [...new Set(movie.genres)]
        })

        let movies = {
            top_rated_movies,
            top_review_movies,
            latest_movies,
            popularity_movies,
            top_genres_movies: [
                {genre:top_movies_genres_python.data[0].genre,data:genre01_movies},
                {genre:top_movies_genres_python.data[1].genre,data:genre02_movies},
                {genre:top_movies_genres_python.data[2].genre,data:genre03_movies},
                {genre:top_movies_genres_python.data[3].genre,data:genre04_movies}
            ]
        }

        let series = {
            top_rated_series,
            top_reviewed_series,
            popularity_series,
            top_genres_series: [
                {genre:top_series_genres_python.data[0].genre,data:genre01_series},
                {genre:top_series_genres_python.data[1].genre,data:genre02_series},
                {genre:top_series_genres_python.data[2].genre,data:genre03_series},
                {genre:top_series_genres_python.data[3].genre,data:genre04_series}
            ]
        }
        return res.status(200).json(RetrievedData(200, { movies, series, tmdb_cast:tmdb_cast?.data?.results}))
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }

}

const getWatchedGenres = async ({userId,StreamModel}) =>{
    let stream = ""
    if (StreamModel === "Movies")
        stream = "movie"
    else
        stream = "series"

    try{
        let userMovies = await User.findById(userId)
        let match = StreamModel === "Movies" ? {_id:{$in:userMovies.movies_watched.map(e => e)}} : {_id:{$in:userMovies.series_watched.map(e => e)}}
        let lookup = {
            from:`genres`,
            localField:"genre_ids",
            foreignField:"tmdb",
            as:"genres",
        }
        let project = {
            "genres":"$genres.name"
        }
        let addFields =  {"genres":{"$filter": {"input": "$genres","as": "genre","cond": {"$eq": [ "$$genre.type", stream ]}}}}

        let result = StreamModel === "Movies" ?  await Movies.aggregate().match(match).lookup(lookup).addFields(addFields).project(project) : await Series.aggregate().match(match).lookup(lookup).addFields(addFields).project(project)

        let FinalGenres = result.map(e => (e.genres))
        FinalGenres = [...new Set(FinalGenres.flat(2))]
        return FinalGenres
    }catch (e) {
        return false
    }

}

const getProfileGenre = async ({userId,StreamModel}) =>{
    let stream = ""
    if (StreamModel === "Movies")
        stream = "movie"
    else
        stream = "series"
    try{
        console.log(StreamModel.toLowerCase())
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
        let AllGenre = StreamModel === "Movies" ?  await Movies
            .aggregate()
            .match({_id:{$in:genresByLoad.map(e => e._id)}})
            .lookup({
                from:`genres`,
                localField:"genre_ids",
                foreignField:"tmdb",
                as:"genres"
            })
            .addFields({"genres":{"$filter": {"input": "$genres","as": "genre","cond": {"$eq": [ "$$genre.type", stream ]}}}})
            .project({
                "genres":"$genres.name"
            }) : await Series
            .aggregate()
            .match({_id:{$in:genresByLoad.map(e => e._id)}})
            .lookup({
                from:`genres`,
                localField:"genre_ids",
                foreignField:"tmdb",
                as:"genres"
            })
            .addFields({"genres":{"$filter": {"input": "$genres","as": "genre","cond": {"$eq": [ "$$genre.type", stream ]}}}})
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



