import axios from "axios"
import {baseLink} from "./config";
import https from "https"

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const Search = async (data) =>{
    return await axios.post(`${baseLink}/search`,data)
}

export const getGenre = async({type})=>{
    return await axios.get(`${baseLink}/genre/${type}`)
}

export const getUserReviews = async ({id,token,perPage, page}) =>{
    return await axios.get(`${baseLink}/review/user/${perPage}/${page}`,{headers:{"x-access-token":token,user:id}})
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
    return await axios.get(`${baseLink}/stream/${type}/id/${tmdb}`,{ httpsAgent: agent })
}



export const GetPersonalizedHomePage = async ({userId}) => {
    return await axios.get(`${baseLink}/homepage/user`,{headers:{user:userId}})
}
export const GetHomePage = async () => {
    return await axios.get(`${baseLink}/homepage`)
}