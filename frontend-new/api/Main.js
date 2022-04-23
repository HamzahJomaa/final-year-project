import axios from "axios"
import {baseLink} from "./config";
import https from "https"

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const AddWatchList = async ({onModel,on,userId,token}) =>{
    return await axios.post(`${baseLink}/watchlist/add`,{data:{onModel,on,userId}},{headers:{"x-access-token":token}})
}

export const checkWatchList = async ({on,userId}) =>{
    return await axios.get(`${baseLink}/watchlist/check/${on}/${userId}`)
}

export const Search = async (data,type,perPage,page,order) =>{
    return await axios.post(`${baseLink}/${type}/search/${perPage}/${page}`,{data,order})
}

export const getGenre = async({type})=>{
    return await axios.get(`${baseLink}/genre/${type}`)
}

export const getUserReviews = async ({id,type,token,perPage, page}) =>{
    return await axios.get(`${baseLink}/review/user/${type}/${perPage}/${page}`,{headers:{"x-access-token":token,user:id}})
}

export const AddReview = async ({review,token}) =>{
    return await axios.post(`${baseLink}/review/add`,{
        review
    },{headers:{"x-access-token":token}})
}

export const CheckWatched = async ({profile,ref,token,streamModel}) =>{
    return await axios.get(`${baseLink}/profile/ticket`,{headers:{"x-access-token":token,"userid":profile,"ref":ref,streamModel}})
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