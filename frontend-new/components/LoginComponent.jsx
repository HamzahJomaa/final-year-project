import React, {useState} from 'react';
import {LoginApi} from "../api/Auth";

import {useRouter} from "next/router"

const LoginComponent = () => {
    const router = useRouter()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async () =>{
        try {
            let user = await LoginApi({username,password})
            if (user?.data?.statusCode !== 200){
                console.error(user.data.statusMessage)
            }else{
                if (typeof window !== "undefined") {
                    localStorage.setItem("id", user?.data?.user?.id)
                    localStorage.setItem("token",user?.data?.user?.token)
                    document.getElementById("signin-form").classList.remove("openform"); 
                    router.reload()
                }
            }
        }catch (e) {
            console.error(e)
        }
    }
    return (
        <div className="login-wrapper" id="login-content">
            <div className="login-content">
                <a href="#" className="close">x</a>
                <h3>Login</h3>
                <div className="row">
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" id="username" placeholder="Username"
                               onChange={(e)=>{setUsername(e.target.value)}} required="required"/>
                    </label>
                </div>

                <div className="row">
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" id="password" placeholder="******"
                               onChange={(e)=>{setPassword(e.target.value)}}
                               required="required"/>
                    </label>
                </div>
                <div className="row">
                    <div className="remember">
                        <div>
                            <input type="checkbox" name="remember" value="Remember me"/><span>Remember me</span>
                        </div>
                        <a href="#">Forget password ?</a>
                    </div>
                </div>
                <div className="row">
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div className="row">
                    <p>Or via social</p>
                    <div className="social-btn-2">
                        <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
                        <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginComponent;