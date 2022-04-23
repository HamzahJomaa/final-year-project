import React, {useEffect, useState} from 'react';
import ProfileComponent from "../../components/Profile/ProfileComponent";
import RateComponent from "../../components/Profile/RateComponent";
import HeroComponent from "../../components/HeroComponent";
import {useRouter} from "next/router";
import {Alert, LinearProgress} from "@mui/material";
import {ResetPassword} from "../../api/Auth";

const Reset = () => {
    let router = useRouter()


    const [newpassword,setNewPassword] = useState("")
    const [newcpassword,setNewCPassword] = useState("")

    const [passStatus, setPassStatus] = useState()
    const [passResponse, setPassResponse] = useState()
    const [loadingPass, setLoadingPass] = useState(false)



    const handlePasswordChange = async (e) => {
        setLoadingPass(true)
        if (newpassword !== newcpassword){
            setPassResponse("Confirm Password should be the same")
            return setPassStatus("error")
        }
        try{
            let resetpassword = await ResetPassword({password:newpassword,token:router.query.userid})
            if (resetpassword?.data?.statusCode === 200){
                setPassStatus("success")
                setPassResponse(resetpassword?.data?.statusMessage)
            }
        }catch (e) {
            console.error(e)
            setPassStatus("error")
            setPassResponse("Unknown Error Occurred")
            if (e?.response?.data?.statusCode == 401){
                setPassResponse(e?.response?.data?.statusMessage)
            }
        }finally {
            setLoadingPass(false)
        }
    }


    useEffect(()=>{
        let {userid} = router.query
    },[])

    return (
        <>
            <HeroComponent type={"user-hero"} bgimg={"slider-bg.jpeg"}  />
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width form-style-1 user-pro">
                        <h4 style={{textAlign:"center"}}>Change password</h4>
                        <div className="row w-50 mx-auto">
                            <div className="col-md-12 form-it">
                                <label>New Password</label>
                                <input type="password" placeholder="***************" onChange={(e)=>{setNewPassword(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row w-50 mx-auto">
                            <div className="col-md-12 form-it">
                                <label>Confirm New Password</label>
                                <input type="password" placeholder="*************** " onChange={(e)=>{setNewCPassword(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='row progressbar w-50 mx-auto'>
                            {loadingPass? <LinearProgress />  : ""}
                        </div>
                        <div className="row response w-50 mx-auto">
                            {(passResponse && passStatus) && <Alert severity={passStatus}>{passResponse}</Alert>}
                        </div>
                        <div className="row w-50 mx-auto">
                            <div className="col-md-12">
                                <input className="submit" onClick={handlePasswordChange} type="submit" value="change"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reset;