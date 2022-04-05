const auth = require("./Auth")
const helper = require("./helper")
const stream = require("./Stream")
const review = require("./Review")
const watchlist = require("./watchlist")
const profile = require("./profile")
const recommendation = require("./recommendation")
const main = require("./main")

module.exports.Router = (app) => {
    app.use("/api/recommendation",recommendation)
    app.use("/api/profile",profile)
    app.use("/api/watchlist",watchlist)
    app.use("/api/review",review)
    app.use("/api/stream",stream)
    app.use("/helper",helper)
    app.use("/api/auth",auth)
    app.use("/api/",main)
}