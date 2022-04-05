import axios from "axios"
import {baseLink} from "./config";

export const LoginApi = async ({username,password}) => {
    return await axios.patch(`${baseLink}/auth/signin`,{username,password})
}