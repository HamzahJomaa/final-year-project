const {Schema, model} = require("mongoose")

const SeriesSchema = new Schema({
    adult:{
        type: Boolean,
    },
    genre_ids:[{
        type: Number,
    }],
    tmdb:{
        type: Number,
    },
    origin_country:[{
        type:String
    }],
    original_language:{
        type: String,
    },
    original_title:{
        type: String,
    },
    overview:{
        type: String,
    },
    popularity:{
        type: Number,
    },
    poster_path:{
        type: String,
    },
    release_date:{
        type: Date,
    },
    title:{
        type: String,
    },
    vote_average:{
        type: Number,
    },
    vote_count:{
        type: Number,
    }
},{timestamps:true})


module.exports = model("Series", SeriesSchema)
