import React, { useState } from 'react';
import { SignUp } from '../api/Auth';
import { useRouter } from 'next/router'


const SignUpComponent = () => {
    const router = useRouter()

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [error,setError] = useState("")

    const handleSignup = async () =>{
        try{
            const signup = await SignUp({username,password,email})
            if (signup?.status === 200){
                if (typeof window !== "undefined") {
                    localStorage.setItem("id", signup?.data?._id)
                    localStorage.setItem("token",signup?.data?.token)
                    document.getElementById("signup-form").classList.remove("openform"); 
                    router.push("/profile")
                }
            }else{
                setError("An Error Occured")
                console.error(signup)
            }
        }catch(e){
            setError(e?.response?.data?.statusMessage)
            console.error(e?.response?.data?.statusMessage)
        }
    }
    return (
        <div className="login-wrapper" id="signup-content">
            <div className="login-content">
                <a href="#" className="close">x</a>
                <h3>sign up</h3>
                <div className="row">
                        <label htmlFor="username-2">
                            Username:
                            <input type="text" name="username" id="username-2" onChange={(e)=>{setUsername(e.target.value.toLowerCase())}} placeholder="Hugh Jackman" required="required"/>
                        </label>
                    </div>

                    <div className="row">
                        <label htmlFor="email-2">
                            your email:
                            <input type="email" name="email" id="email-2" onChange={(e)=>{setEmail(e.target.value)}} placeholder=""
                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                   required="required"/>
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="password-2">
                            Password:
                            <input type="password" name="password" id="password-2" onChange={(e)=>{setPassword(e.target.value)}} placeholder=""
                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                   required="required"/>
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="repassword-2">
                            re-type Password:
                            <input type="password" name="password" id="repassword-2" onChange={(e)=>{setCPassword(e.target.value)}} placeholder=""
                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                   required="required"/>
                        </label>
                    </div>
                    <div className='error-signup'>
                        {error}
                    </div>
                    <div className="row">
                        <button onClick={handleSignup} type="submit">sign up</button>
                    </div>
            </div>
        </div>

    );
};

export default SignUpComponent;