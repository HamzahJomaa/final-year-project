const axios = require("axios")


exports.getRecommendation = async ({type,title,db}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/${type}/${encodeURIComponent(title)}/${db}`)
}

exports.getGenre = ({genre}) =>{

}

exports.getGenreByLimit = async ({genre,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/movie/genre/${genre}/${limit}/online`)
}