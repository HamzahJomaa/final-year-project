const axios = require("axios")


exports.getRecommendation = async ({type,title,db}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/${type}/${encodeURIComponent(title)}/${db}`)
}

exports.getGenre = ({genre}) =>{

}

exports.getGenreByLimit = async ({onModel,genre,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/genre/${onModel}/${genre}/${limit}/online`)
}

exports.getKNNByLimit = async ({onModel,list,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/knn/${onModel}/${list}/${limit}/online`)
}

exports.getQualfied = async ({onModel,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/qualified/${onModel}/${limit}/online`)
}

exports.getTopGenres = async ({onModel,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/qualified/genre/${onModel}/${limit}/online`)
}

exports.getCorrelation = async ({onModel,list,limit}) =>{
    return await axios.get(`http://127.0.0.1:5000/api/python/correlation/${onModel}/${list}/${limit}/online`)
}