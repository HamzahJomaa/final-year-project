import React, {useState} from "react"
import {Button, Typography,TextField,Box} from "@mui/material"
import custom from "../styles/css/custom.module.scss"
import {LoginApi} from "../api/Auth";


const Login = () =>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const handleLogin = async () =>{
        try{
            let user = await LoginApi({username,password})
            if (user?.data?.statusCode != 200){
                setError(user.data.statusMessage)
            }else{
                setError("")
            }
        }catch (e) {
            console.error(e)
        }
    }


    return(
        <section className={`container ${custom.SignInContainer}`}>
            <TextField type={"text"} fullWidth className={"m-3"} label="Username"  onChange={(e)=>setUsername(e.target.value)}/>
            <TextField type={"password"} fullWidth className={"m-3"} label="Password" onChange={(e)=>setPassword(e.target.value)}/>

            <Box className={"m-3 w-100"}>
                {error}
                <button  className="btn btn-main btn-effect login-btn" onClick={handleLogin}>Login</button>
            </Box>
        </section>
    )
}

export default Login