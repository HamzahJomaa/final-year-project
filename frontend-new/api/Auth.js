import axios from "axios"
import {baseLink} from "./config";


export const ResetPassword = async ({oldpassword,newpassword,userId,token}) =>{
    return await axios.patch(`${baseLink}/profile/resetpassword`,{
        newpassword,
        oldpassword,
        userId
    },{headers:{"x-access-token":token}})
}

export const UpdateProfile = async ({profile,token}) =>{
    return await axios.patch(`${baseLink}/profile/update`,{
        profile
    },{headers:{"x-access-token":token}})
}

export const SignUp = async ({username,password,email}) => {
    return await axios.post(`${baseLink}/auth/signup`,{user:{username,password,email}})
}

export const LoginApi = async ({username,password}) => {
    return await axios.patch(`${baseLink}/auth/signin`,{username,password})
}