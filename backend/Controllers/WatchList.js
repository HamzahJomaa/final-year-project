const WatchList = require("../Models/Watclist")
const {InternalServerError, DynamicMessage, AddedMessage, RetrievedData, NoContent} = require("../Constants/statusCodes");


exports.checkWatchlist = async (req,res) =>{
    let {on,userId} = req.params
    try{
        let result = await WatchList.find({userId,on}).populate({path:"on"}).exec()
        return res.send(result.length > 0)
    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.getWatchListByUser = async (req,res) =>{
    let {userId} = req.params

    try{
        let result = await WatchList.find({userId}).populate({path:"on"}).exec()
        if (result.length > 0){
            return res.status(200).json(RetrievedData(200,result))
        }
        return res.status(204).json(NoContent)
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.remove = async (req, res) => {
    let {userId, on} = req.params
    try {
        let result = await WatchList.deleteOne({userId, on})
        if (result.deletedCount == 1) {
            return res.status(200).json(DynamicMessage(200, "Deleted Successfully"))
        }
        console.log(result)
        return res.status(400).json(DynamicMessage(400, "An Unknown Error Occurred"))
    } catch (e) {
        return res.status(500).json(InternalServerError)
    }
}

exports.addWatchList = async (req, res) => {
    let {data} = req.body

    try {
        let result = await WatchList.create(data)
        console.log(result)
        if (result) {
            return res.status(200).json(AddedMessage(200, result))
        }
        return res.status(400).json(DynamicMessage(400, "An Unknown Error Occurred"))
    } catch (e) {
        console.log(e)
        return res.status(500).json(InternalServerError)
    }
}