const axios = require("axios")
const Movie = require("../Models/Movies")
const Series = require("../Models/Series")


exports.ImportMovies = async () =>{
    for (let page = 500 ; page <= 5000 ; page++) {
        try{
            let tmdbResult = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=01a1a82396f4e0f7423e9a45bac71390&language=en-US&page="+page)
            tmdbResult.data.results.map( async element=>{
                let movie = await Movie.findOne({tmdb:element.id})
                if (!movie){
                    let newMovie = {
                        adult: element.adult,
                        backdrop_path: element.backdrop_path,
                        genre_ids: element.genre_ids,
                        tmdb: element.id,
                        original_language: element.original_language,
                        original_title: element.original_title,
                        overview: element.overview,
                        popularity: element.popularity,
                        poster_path: element.poster_path,
                        release_date: element.release_date,
                        title: element.title,
                        video: element.video,
                        vote_average: element.vote_average,
                        vote_count: element.vote_count
                    }
                    await Movie.create(newMovie)
                }else{
                    console.log("Already Added")
                }
            })
        }catch(e){
            console.error(e)
        }finally {
            console.log("Done: " +  page)
        }
    }
}


exports.ImportCast = async () =>{
    let movies = await Movie.aggregate([{$limit:100}])
    movies.map(async element=>{
        try{
            const movieCast = await axios.get(`https://api.themoviedb.org/3/movie/${element.tmdb}/credits?api_key=01a1a82396f4e0f7423e9a45bac71390&language=en-US`)
            movieCast.data.cast.map(cast=>{
                console.log(cast.name)
            })
        }catch(e){
            console.error(e)
        }

    })
}


exports.ImportSeries = async () =>{
    for (let page = 422 ; page <= 6180 ; page++) {
        try{
            let tmdbResult = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=01a1a82396f4e0f7423e9a45bac71390&language=en-US&page="+page)
            tmdbResult.data.results.map( async element=>{
                let series = await Series.findOne({tmdb:element.id})
                if (!series){
                    let newSeries = {
                        adult: element.adult,
                        genre_ids: element.genre_ids,
                        tmdb: element.id,
                        origin_country: element.origin_country,
                        original_language: element.original_language,
                        original_title: element.original_name,
                        overview: element.overview,
                        popularity: element.popularity,
                        poster_path: element.poster_path,
                        release_date: element.first_air_date,
                        title: element.name,
                        vote_average: element.vote_average,
                        vote_count: element.vote_count
                    }
                    await Series.create(newSeries)
                }else{
                    console.log("Already Added")
                }
            })
        }catch(e){
            console.error(e)
        }finally {
            console.log("Done: " +  page)
        }
    }
}