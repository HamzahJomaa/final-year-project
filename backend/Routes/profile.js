const express = require("express")
const router = express.Router()
const Auth = require("../Helpers/Middleware/Authenticated")


const ProfileController = require("../Controllers/ProfileController.js")

router.patch("/update",Auth,ProfileController.updateProfile)
router.get("/:userId",ProfileController.getProfile)

module.exports = router