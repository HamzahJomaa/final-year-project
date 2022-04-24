const express = require("express")
const router = express.Router()
const watchlistController = require("../Controllers/WatchList")

router.get("/check/:on/:userId",watchlistController.checkWatchlist)
router.delete("/remove/:userId/:on",watchlistController.remove)
router.get("/:onModel/:userId",watchlistController.getWatchListByUser)
router.post("/add",watchlistController.addWatchList)

module.exports = router