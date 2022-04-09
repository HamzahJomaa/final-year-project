const express = require("express")
const router = express.Router()
const Auth = require("../Helpers/Middleware/Authenticated")


const ProfileController = require("../Controllers/ProfileController.js")


router.get("/ticket",Auth,ProfileController.isWatched)
router.patch("/ticket",Auth,ProfileController.Watched)
router.patch("/resetpassword",Auth,ProfileController.ResetPassword)
router.get("/visited/:stream/:user",ProfileController.getProfileStream)
router.patch("/update",Auth,ProfileController.updateProfile)
router.get("/:userId",ProfileController.getProfile)

module.exports = router