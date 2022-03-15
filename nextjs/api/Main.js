import axios from "axios"
import {baseLink} from "./config";



export const GetHomePage = async () => {
    return await axios.get(`${baseLink}/stream/movies/10/1`)
}