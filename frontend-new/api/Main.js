import axios from "axios"
import {baseLink} from "./config";


export const getUserReviews = async ({id,token}) =>{
    return await axios.get(`${baseLink}/review/user`,{headers:{"x-access-token":token,user:id}})
}

export const AddReview = async ({review,token}) =>{
    return await axios.post(`${baseLink}/review/add`,{
        review
    },{headers:{"x-access-token":token}})
}

export const CheckWatched = async ({profile,ref,token}) =>{
    return await axios.get(`${baseLink}/profile/ticket`,{headers:{"x-access-token":token,"userid":profile,"ref":ref}})
}

export const BuyTicket = async ({StreamModel,Stream,userId,token}) =>{
    return await axios.patch(`${baseLink}/profile/ticket`,{
        userId,
        Stream,
        StreamModel
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

export const getStreamReviews = async (id,perPage,currentPage) =>{
    return await axios.get(`${baseLink}/review/ref/${perPage}/${currentPage}`,{headers:{ref:id}})
}

export const getStream = async (type,tmdb) =>{
    return await axios.get(`${baseLink}/stream/${type}/id/${tmdb}`)
}

export const GetHomePage = async () => {
    return await axios.get(`${baseLink}/homepage`)
}