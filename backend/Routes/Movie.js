const express = require("express")
const router = express.Router()
const MovieController = require("../Controllers/MovieController")



router.get("/all/:page",MovieController.getAllMovies)

module.exports = router