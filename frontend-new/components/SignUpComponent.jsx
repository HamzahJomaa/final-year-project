import React, {useState} from 'react';
import {SignUp} from '../api/Auth';
import {useRouter} from 'next/router'
import {Box, Button, Modal, Grid, LinearProgress, Alert} from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
};

const SignUpComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter()

    const [loading,setLoading] = useState(false)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [error, setError] = useState("")
    const [responsemessage,setResponseMessage] = useState("")

    const handleSignup = async () => {
        if (!username || !password || !email || !firstName || !lastName){
            setError("error")
            return setResponseMessage("All Fields are Required")
        }
        setLoading(true)
        let user = {username, password, email,firstName,lastName}
        try {
            const signup = await SignUp({user})
            if (signup?.status === 200) {
                if (typeof window !== "undefined") {
                    localStorage.setItem("id", signup?.data?._id)
                    localStorage.setItem("token", signup?.data?.token)
                    setOpen(false)
                    router.push("/profile")
                }
            } else {
                setError("error")
                setResponseMessage("Unknown Error Occurred")
                console.error(signup)
            }
        } catch (e) {
            setError("error")
            setResponseMessage(e?.response?.data?.statusMessage)
            console.error(e?.response?.data?.statusMessage)
        }finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Button className={"signupbtn"} onClick={handleOpen}> sign up </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className="login-wrapper" id="signup-content">
                    <div className="login-content padding">
                        <a href="#" onClick={(e)=>{e.preventDefault(); setOpen(false)}} className="close">x</a>
                        <h3>sign up</h3>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <label htmlFor="username-2">
                                    Username:
                                    <input type="text" name="username" id="username-2" onChange={(e) => {
                                        setUsername(e.target.value.toLowerCase())
                                    }} placeholder="Hugh Jackman" required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label htmlFor="username-2">
                                    First Name:
                                    <input type="text" name="firstName" id="username-2" onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }} required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label htmlFor="username-2">
                                    Last Name:
                                    <input type="text" name="lastName" id="username-2" onChange={(e) => {
                                        setLastName(e.target.value)
                                    }} required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="email-2">
                                    your email:
                                    <input type="email" name="email" id="email-2" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} placeholder=""
                                           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                           required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="password-2">
                                    Password:
                                    <input type="password" name="password" id="password-2" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} placeholder=""
                                           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                           required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="repassword-2">
                                    re-type Password:
                                    <input type="password" name="password" id="repassword-2" onChange={(e) => {
                                        setCPassword(e.target.value)
                                    }} placeholder=""
                                           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                           required="required"/>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                {loading && <LinearProgress />}
                            </Grid>
                            <Grid item xs={12}>
                                {(responsemessage && !loading) && <Alert severity={error}>{responsemessage}</Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <button onClick={handleSignup} type="submit">sign up</button>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Modal>
        </>


    );
};

export default SignUpComponent;