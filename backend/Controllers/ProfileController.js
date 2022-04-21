const User = require("../Models/User")
const bcrypt = require("bcryptjs")
const {InternalServerError, RetrievedData, NoContent, UserExists, DynamicMessage, AnErrorOccured} = require("../Constants/statusCodes");
const jwt = require("jsonwebtoken")

const StreamUser = require("../Models/StreamUser")
const {mongo} = require("mongoose");


exports.isWatched = async (req,res) => {
   let {userid,ref} = req.headers
   try{
       const user = await User.findById(userid)
        res.send(user.movies_watched.includes(ref))
    }catch(e){
       console.error(e.response)
       return res.status(500).json(InternalServerError)
   }
}

exports.Watched = async (req,res) =>{
    let {userId,Stream,StreamModel} = req.body
    try{
        let result = await User.updateOne({_id:userId},{ $push: { movies_watched: Stream } })
        if (result.modifiedCount === 1){
            return res.status(200).json(DynamicMessage(200,"Successfully Added"))
        }
        return res.status(400).json(AnErrorOccured)
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.ResetPassword = async (req,res) =>{
    const {oldpassword,newpassword,userId} = req.body
    try{
        const user = await User.findById(userId)
        const checkPassword = await bcrypt.compare(oldpassword,user.password)
        if (checkPassword){
            let hashedPassword = await bcrypt.hash(newpassword,12)
            user.password = hashedPassword
            await user.save()
            return res.status(200).json(DynamicMessage(200,"Password Successfully Changed"))
        }else{
            return res.status(409).json(DynamicMessage(409,"Old Password is Wrong"))
        }
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}


exports.getTopMoviesUponVisit = async (req,res) =>{

}

exports.getProfileStream = async (req,res) =>{
    const {user,stream} = req.params

    if (!user){
        return res.status(400).json(RetrievedData(400,"User Id Parameter is Missing"))
    }

    try{


        let Stream = await StreamUser
            .aggregate()
            .match({userId:mongo.ObjectId(user),StreamModel:stream})
            .lookup({
                from:`${stream.toLowerCase()}`,
                localField:"Stream",
                foreignField:"_id",
                as:"StreamData"
            })
            .unwind("$StreamData")
            .group({_id: "$StreamData.title","visited" : { $sum : 1}})
            .sort({visited: -1})

        if (Stream.length !== 0){
            return res.status(200).json(RetrievedData(200,Stream))
        }

        return res.status(204).json(NoContent)
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }

}



exports.updateProfile = async (req,res) =>{
    let {profile} = req.body
    try{
        let checkUser = await User.find({$or:[{username:profile.username},{email:profile.email}],_id:{$ne:profile.id}})
        if (checkUser.length !== 0){
            return res.status(UserExists.statusCode).json(UserExists)
        }
        console.log(req.body)
        let updatedUser = await User.updateOne({_id:profile.id},{...profile})
        if (updatedUser.modifiedCount === 1 &&  updatedUser.matchedCount === 1){
            return res.status(200).json(RetrievedData(200,profile))
        }
        return res.status(204).json(NoContent)
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