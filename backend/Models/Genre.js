const {Schema, model} = require("mongoose")

const GenreSchema = new Schema({
    tmdb:{
        type:Number
    },
    name:{
        type:String
    },
    type:{
        type:String
    }
},{timestamps:true})

module.exports = model("Genre", GenreSchema)
