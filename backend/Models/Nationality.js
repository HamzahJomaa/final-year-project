const {Schema, model} = require("mongoose")

const nationalitySchema = new Schema({
    title:{
        type: String,
    }
},{timestamps:true})

module.exports = model("Nationality", nationalitySchema)
