const {Schema, model} = require("mongoose")
const Nationality = require("./Nationality")
const Movies = require("./Movies")
const Series = require("./Series")

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required"]
    },
    username: {
        type: String,
        required: [true, "Username is Required"],
        index: {unique: true}
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    countryCode: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    dob: {
        type: Date,
        required: [false, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [false, "Last Name is Required"]
    },
    status: {
        type: Boolean,
        default: false
    },
    profile: {
        type: String
    },
    token: {
        type: String
    },
    lastSignIn: {
        type: Date
    },
    nationality:{
        ref: Nationality,
        type: Schema.Types.ObjectId,
    },
    resetToken:{
        type: String
    },
    movies_watched:[{
        ref: Movies,
        type: Schema.Types.ObjectId,
    }],
    series_watched:[{
        ref: Series,
        type: Schema.Types.ObjectId,
    }],
},{ timestamps: true })

module.exports = model("Users", UserSchema)
