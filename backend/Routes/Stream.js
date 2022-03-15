const express = require("express")
const router = express.Router()
const StreamController = require("../Controllers/StreamController")

router.get("/:type/id/:id",StreamController.getStreamById)
router.get("/:type/:id/cast",StreamController.getStreamCast)
router.get("/:type/:perPage/:currentPage",StreamController.getStream)

module.exports = router