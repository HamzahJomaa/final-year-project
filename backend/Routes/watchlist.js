const express = require("express")
const router = express.Router()
const watchlistController = require("../Controllers/WatchList")

router.delete("/remove/:userId/:on",watchlistController.remove)
router.get("/:userId",watchlistController.getWatchListByUser)
router.post("/add",watchlistController.addWatchList)

module.exports = router