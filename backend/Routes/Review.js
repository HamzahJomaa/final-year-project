const express = require("express")
const router = express.Router()
const ReviewController = require("../Controllers/ReviewController")

router.delete("/delete/:id",ReviewController.deleteReview)
router.get("/ref/:perPage/:currentPage",ReviewController.getRefReview)
router.get("/user",ReviewController.getUserReviews)
router.get("/all",ReviewController.getReviews)
router.post("/add",ReviewController.addReview)

module.exports = router