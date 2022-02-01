const auth = require("./Auth")
const helper = require("./helper")
const movies = require("./Movie")
const review = require("./Review")
const watchlist = require("./watchlist")
module.exports.Router = (app) => {
    app.use("/api/watchlist",watchlist)
    app.use("/api/review",review)
    app.use("/api/movie",movies)
    app.use("/helper",helper)
    app.use("/api/auth",auth)
}