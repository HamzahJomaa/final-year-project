require('dotenv').config()
const jwt = require("jsonwebtoken")

exports.generateSignUpToken = (username) =>{
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '24hr' });
}

exports.generateNewToken = (username,expiresIn) =>{
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn });
}