const User = require("../Models/User")
const {InternalServerError, RetrievedData, NoContent, UserExists} = require("../Constants/statusCodes");



exports.updateProfile = async (req,res) =>{
    let {profile} = req.body
    try{
        let checkUser = await User.find({$or:[{username:profile.username},{email:profile.email}],_id:{$ne:profile.id}})
        if (checkUser.length !== 0){
            return res.status(UserExists.statusCode).json(UserExists)
        }
        let updatedUser = await User.updateOne({_id:profile.id},{...profile})
        if (updatedUser.modifiedCount === 1 &&  updatedUser.matchedCount === 1){
            return res.status(200).json(RetrievedData(200,profile))
        }
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.getProfile = async (req,res) =>{
    let {userId} = req.params


    try{
        let user = await User.findById(userId)
        if (user){
            return res.status(200).json(RetrievedData(200,user))
        }
        return res.status(204).json(NoContent)
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}