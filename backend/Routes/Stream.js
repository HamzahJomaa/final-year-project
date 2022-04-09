const express = require("express")
const router = express.Router()
const StreamController = require("../Controllers/StreamController")
const Auth = require("../Helpers/Middleware/Authenticated")

router.get("/:type/id/:id",StreamController.getStreamById)
router.post("/visit",Auth,StreamController.saveUserFlow)
router.get("/:type/:perPage/:currentPage",StreamController.getStream)

module.exports = router