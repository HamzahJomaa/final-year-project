const AuthController = require("../Controllers/AuthController")
const Auth = require("../Helpers/Middleware/Authenticated")
const express = require("express")
const router = express.Router()


router.patch("/reset",Auth,AuthController.resetPassword)

router.patch("/request/reset",AuthController.requestReset)

router.patch("/confirmation",Auth,AuthController.Confirmation)
router.patch("/signin",AuthController.SignIn)

router.post("/signup",AuthController.SignUp)

module.exports = router