import axios from "axios"
import {baseLink} from "./config";


export const ChangePassword = async ({oldpassword,newpassword,userId,token}) =>{
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

export const SignUp = async ({user}) => {
    return await axios.post(`${baseLink}/auth/signup`,{user})
}

export const ResetPasswordApi = async ({username}) =>{
    return await axios.patch(`${baseLink}/auth/request/reset`,{username})
}

export const ConfirmAccount = async ({token}) => {
    return await axios.patch(`${baseLink}/auth/confirmation`,{token},{headers:{"x-access-token":token}})
}

export const ResetPassword = async ({password,token}) =>{
    return await axios.patch(`${baseLink}/auth/reset`,{password
    },{headers:{"x-access-token":token}})
}

export const LoginApi = async ({username,password}) => {
    return await axios.patch(`${baseLink}/auth/signin`,{username,password})
}