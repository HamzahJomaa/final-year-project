import React, {useEffect, useState} from 'react';
import HeroComponent from "../components/HeroComponent";
import {getNationality, getProfile} from "../api/Main";
import {compress} from "../helpers/compress";
import { useRouter } from 'next/router'
import { ResetPassword, UpdateProfile } from '../api/Auth';

import { LinearProgress } from '@mui/material';

const Profile = () => {
    const router = useRouter()

    const handleLogout = () =>{
        if (typeof window !== "undefined") {
           localStorage.clear()
           router.replace("/")
        }
    }



    let profileId,token

    if (typeof window !== "undefined") {
        profileId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }

    const [profile,setProfile] = useState([])
    const [nationality,setNationality] = useState("")
    const [nationalityDatabase,setNationalityDatabase] = useState([])
    const [profilePicture,setProfilePicture] = useState(null)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [countryCode,setCountryCode] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [dob,setDob] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)

    const [oldpassword,setOldPassword] = useState("")
    const [newpassword,setNewPassword] = useState("")
    const [newcpassword,setNewCPassword] = useState("")

    const handlePasswordChange = async (e) =>{
        e.preventDefault()
        try{
            const result = await ResetPassword({oldpassword,newpassword,userId: profileId,token})
        }catch(e){
            console.error(e)
        }
    }

    const handleUpdate = async (e) =>{
        setLoading(true)
        e.preventDefault()
        let newProfile = {
            id:profileId,
            firstName,
            lastName,
            username,
            countryCode,
            phoneNumber,
            nationality,
            dob,
            email
        }
        try{    
            const update = await UpdateProfile({profile:newProfile,token})
            console.log(update)
        }catch(e){
            console.error(e.response)
        }finally{
            setLoading(false)
        }
    }

    useEffect(async ()=>{
        if (!profileId){
            router.push("/")
        }
        try {

            let profile = await getProfile({userId:profileId})
            let formateddob = new Date(profile?.data?.data?.dob)
            let nationality = await getNationality()
            setNationalityDatabase(nationality?.data?.data)
            setNationality(profile?.data?.data?.nationality)
            setDob(`${formateddob.getFullYear()}-${(formateddob.getMonth()+1).toLocaleString('en-US', {//this is the function that formats the numbers
                minimumIntegerDigits: 2, //change this to your minimum length
                useGrouping: false
              })}-${formateddob.getDate()}`)
            setUsername(profile?.data?.data?.username)
            setFirstName(profile?.data?.data?.firstName || "")
            setLastName(profile?.data?.data?.lastName || "")
            setPhoneNumber(profile?.data?.data?.phoneNumber || "")
            setCountryCode(profile?.data?.data?.countryCode || "")
            setEmail(profile?.data?.data?.email)
        }catch (e) {
            console.error(e.response)
            if (e.response.status === 401 || e.response.status === 403) {
                localStorage.clear()
                router.push("/")
            }
        }
    },[loading])
    
    return (
        <>
            <HeroComponent type={"user-hero"} title={"User Profile"} location={["Home","Profile"]} />
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="user-information">
                                <div className="user-img">
                                    <a href="#"><img src="images/uploads/user-img.png" alt="" /><br /></a>
                                    <div className="upload-btn-wrapper">
                                        <button className="redbtn">Upload a file</button>
                                        <input type="file" name="myfile" accept=".png, .jpg, .jpeg" onChange={compress(setProfilePicture, 1)}/>
                                    </div>
                                </div>
                                <div className="user-fav">
                                    <p>Account Details</p>
                                    <ul>
                                        <li className="active"><a href="userprofile.html">Profile</a></li>
                                        <li><a href="userfavoritelist.html">Favorite movies</a></li>
                                        <li><a href="userrate.html">Rated movies</a></li>
                                    </ul>
                                </div>
                                <div className="user-fav">
                                    <p>Others</p>
                                    <ul>
                                        <li><a href="#">Change password</a></li>
                                        <li><a href='#' onClick={handleLogout}>Log out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="form-style-1 user-pro" action="">
                                    <h4>01. Profile details</h4>
                                    <div className="row">
                                        <div className="col-md-6 form-it">
                                            <label>Username</label>
                                            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="edwardkennedy" />
                                        </div>
                                        <div className="col-md-6 form-it">
                                            <label>Email Address</label>
                                            <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="edward@kennedy.com" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-it">
                                            <label>First Name</label>
                                            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} placeholder="First Name"/>
                                        </div>
                                        <div className="col-md-6 form-it">
                                            <label>Last Name</label>
                                            <input type="text"  onChange={(e)=>{setLastName(e.target.value)}} value={lastName} placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-it">
                                            <label>Country</label>
                                            <select>
                                                {nationalityDatabase.length > 0 ? nationalityDatabase.map(element=>(
                                                    <option value="united">{element.title}</option>
                                                )):<option value="">No Countries</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 form-it">
                                            <label>Country</label>
                                            <input type="text"  onChange={(e)=>{setCountryCode(e.target.value)}} value={countryCode} placeholder="Country Code"/>
                                        </div>
                                        <div className="col-md-8 form-it">
                                            <label>Country</label>
                                            <input type="text"  onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phoneNumber} placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-it">
                                            <label>Country</label>
                                            <input type="date"  onChange={(e)=>{setDob(e.target.value)}} value={dob}/>
                                        </div>
                                    </div>
                                    <div className='progressbar'>
                                        {loading? <LinearProgress />  : ""}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <input className="submit" onClick={handleUpdate} type="submit" value="save" />
                                        </div>
                                    </div>
                                    <h4>02. Change password</h4>
                                    <div className="row">
                                        <div className="col-md-6 form-it">
                                            <label>Old Password</label>
                                            <input type="text" placeholder="**********" onChange={(e)=>{setOldPassword(e.target.value)}} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-it">
                                            <label>New Password</label>
                                            <input type="text" placeholder="***************" onChange={(e)=>{setNewPassword(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-it">
                                            <label>Confirm New Password</label>
                                            <input type="text" placeholder="*************** " onChange={(e)=>{setNewCPassword(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <input className="submit" onClick={handlePasswordChange} type="submit" value="change"/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
