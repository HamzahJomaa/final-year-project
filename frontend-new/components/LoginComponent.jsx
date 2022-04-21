import React, {useState} from 'react';
import {LoginApi} from "../api/Auth";

import {Box, Button, Modal,Grid} from "@mui/material";
import {useRouter} from "next/router"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
};

const LoginComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    setOpen(false)
                    router.reload()
                }
            }
        }catch (e) {
            console.error(e)
        }
    }
    return (
        <>
            <Button className={"loginbtn"} onClick={handleOpen}> Login </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="login-wrapper" id="login-content">
                    <div className="login-content padding">
                        <a href="#" onClick={(e)=>{e.preventDefault(); setOpen(false)}} className="close">x</a>
                        <h3>Login</h3>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <label htmlFor="username">
                                    Username:
                                    <input type="text" name="username" id="username" placeholder="Username"
                                           onChange={(e)=>{setUsername(e.target.value.toLowerCase())}} required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="password">
                                    Password:
                                    <input type="password" name="password" id="password" placeholder="******"
                                           onChange={(e)=>{setPassword(e.target.value)}}
                                           required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className="remember">
                                    <div>
                                        <input type="checkbox" name="remember" value="Remember me"/><span>Remember me</span>
                                    </div>
                                    <a href="#">Forget password ?</a>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <button onClick={handleSubmit}>Login</button>
                            </Grid>
                        </Grid>
                        {/*<div className="row">*/}
                        {/*    <p>Or via social</p>*/}
                        {/*    <div className="social-btn-2">*/}
                        {/*        <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>*/}
                        {/*        <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </Box>
            </Modal>
        </>


    );
};

export default LoginComponent;