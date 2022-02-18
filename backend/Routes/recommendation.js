const express = require("express")
const RecommendationController = require("../Controllers/Recommendation")
const router = express.Router()


router.get("/movie/:title",RecommendationController.Movie)
router.get("/genre/:genre",RecommendationController.Genre)

module.exports = router