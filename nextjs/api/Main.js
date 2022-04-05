import axios from "axios"
import {baseLink} from "./config";





export const getStream = async (type,tmdb) =>{
    return await axios.get(`${baseLink}/stream/${type}/id/${tmdb}`)
}
export const GetHomePage = async () => {
    return await axios.get(`${baseLink}/homepage`)
}