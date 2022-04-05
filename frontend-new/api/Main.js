import axios from "axios"
import {baseLink} from "./config";


export const BuyTicket = async ({StreamModel,Stream,userId,token}) =>{
    return await axios.post(`${baseLink}/${StreamModel}/${Stream}`,{
        userId
    },{headers:{"x-access-token":token}})
}

export const VisitedStream = async ({StreamModel,Stream,userId,token}) =>{
    return await axios.post(`${baseLink}/stream/visit`,{
        StreamModel,Stream,userId
    },{headers:{"x-access-token":token}})
}

export const getNationality = async () =>{
    return await axios.get(`${baseLink}/nationality`)
}

export const getProfile = async ({userId}) => {
    return await axios.get(`${baseLink}/profile/${userId}`)
}

export const ListStream = async (type,page,perPage)=>{
    return await axios.get(`${baseLink}/stream/${type}/${perPage}/${page}`)
}

export const getStream = async (type,tmdb) =>{
    return await axios.get(`${baseLink}/stream/${type}/id/${tmdb}`)
}

export const GetHomePage = async () => {
    return await axios.get(`${baseLink}/homepage`)
}