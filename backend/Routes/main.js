
const express = require("express")
const router = express.Router()
const IndexController = require("../Controllers/IndexController")
const Nationality = require("../Models/Nationality")
const {RetrievedData, NoContent, InternalServerError} = require("../Constants/statusCodes");

router.get("/genre/:type",IndexController.getGenre)
router.post("/search",IndexController.Search)

router.get("/nationality",async (req,res)=>{
    try{
        let nationality = await Nationality.find()
        if (nationality.length > 0){
            return res.status(200).json(RetrievedData(200,nationality))
        }
        return res.status(207).json(NoContent)
    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
})
router.get("/homepage", IndexController.Homepage)

module.exports = router