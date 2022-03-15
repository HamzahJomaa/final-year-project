const User = require("../Models/User")
const {UserExists, InternalServerError, DynamicMessage} = require("../Constants/statusCodes");
const {generateSignUpToken, generateNewToken} = require("../Helpers/AuthHelper");
const {sendConfirmation,sendReset} = require("../Helpers/Emails");
const bcrypt = require("bcryptjs")
var recombee = require('recombee-api-client');
var rqs = recombee.requests;




exports.resetPassword = async (req,res) =>{
    let {password} = req.body
    if (!password){
        return res.status(400).json(DynamicMessage(400,"Password Needed for Reset"))
    }
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"]

    try{
        let hashedPassword = await bcrypt.hash(password,12)
        let resetUser = await User.findOneAndUpdate({resetToken: token},{password:hashedPassword})
        res.status(200).json(DynamicMessage(200,"Password Reset Successfully"))
    }catch(e){
        console.error(e)
        if (e.errors){
            return res.status(400).json(DynamicMessage(400,e.errors))
        }
        return res.status(500).json(InternalServerError)
    }

}

exports.requestReset = async (req,res) => {
    let {username} = req.body
    const token = generateNewToken({username}, "1h")

    try{
        let user = await User.findOneAndUpdate({username},{resetToken:token})
        await sendReset({user})
        return res.status(200).json(DynamicMessage(200,"Reset Email Sent"))
    }catch (e){
        console.error(e)
        if (e.errors){
            return res.status(400).json(DynamicMessage(400,e.errors))
        }
        return res.status(500).json(InternalServerError)
    }
}

exports.SignIn = async (req,res) =>{
    let {username,password} = req.body
    try{
        let user = await  User.findOne({username})

        if (!user)
            return res.status(200).json(DynamicMessage(404,"User Not Found"))

        const passCheck = await bcrypt.compare(password,user.password)

        if (!passCheck)
            return res.status(200).json(DynamicMessage(401,"Wrong Password"))

        const token = generateNewToken({username}, "24h")
        await User.updateOne({id:user.id},{token,lastSignIn:new Date()})

        return res.status(200).json(DynamicMessage(200,{
            statusMessage:"Signed In",
            user:{
                id:user.id,
                token
            }
        }))
    }catch(e){
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.Confirmation = async (req,res) =>{
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"]

    try{
        let user = await User.findOneAndUpdate({token},{status:true})
        res.status(200).json(DynamicMessage(200,"Account Confirmed Successfully"))
    }catch(e){
        if (e.errors){
            return res.status(400).json(DynamicMessage(400,e.errors))
        }
        return res.status(500).json(InternalServerError)
    }
}

exports.SignUp = async (req,res) =>{
    var client = new recombee.ApiClient('rhu-dev', "MjYXwZePh5D7275IAiDrivUSFsIMIS6YwMVMwgOhrJ2J9D89k1zEnPmt7GBDZcNg");

    let {user} = req.body

    let checkUser = await User.find({$or:[{username:user.username},{email:user.email}]})

    if (checkUser.length > 0){
        return res.status(409).json(UserExists)
    }

    try{
        user.password = await bcrypt.hash(user.password,12)
        let addedUser = await User.create(user)
        let token = generateSignUpToken({username: user.username})
        addedUser.token = token
        await addedUser.save()
        sendConfirmation({user:addedUser})
        client.send(new rqs.AddUser(addedUser._id))
        return res.status(200).json(addedUser)
    }catch(e){
        console.error(e)
        if (e.errors){
            return res.status(400).json(DynamicMessage(400,e.errors))
        }
        return res.status(500).json(InternalServerError)
    }

}



