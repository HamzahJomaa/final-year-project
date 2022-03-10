const express = require("express")
const router = express.Router()
const RefController = require("../Controllers/RefController")


router.get("/all/:page",RefController.getAllRegs)
router.get("/all/:page",RefController.getAllRegs)

module.exports = router