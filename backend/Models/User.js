const {Schema, model} = require("mongoose")
const Nationality = require("./Nationality")

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
    DOB: {
        type: Date,
        required: [true, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Last Name is Required"]
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
    }
},{ timestamps: true })

module.exports = model("Users", UserSchema)
