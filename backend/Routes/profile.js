const express = require("express")
const router = express.Router()
const Auth = require("../Helpers/Middleware/Authenticated")


const ProfileController = require("../Controllers/ProfileController.js")

router.get("/visited/:stream/:user",ProfileController.getProfileStream)
router.post("/visit",ProfileController.saveUserFlow)
router.patch("/update",Auth,ProfileController.updateProfile)
router.get("/:userId",ProfileController.getProfile)

module.exports = router