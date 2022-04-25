import React, {useEffect, useState} from 'react';
import HeroComponent from "../HeroComponent";
import {compress} from "../../helpers/compress";
import {useRouter} from "next/router";

const ProfileComponent = ({ Component , location }) => {
    const [profilePicture,setProfilePicture] = useState(null)
    const router = useRouter()

    const handleLogout = () =>{
        if (typeof window !== "undefined") {
            localStorage.clear()
            router.push("/")
        }
    }


    return (
        <>
            <HeroComponent type={"user-hero"} bgimg={"slider-bg.jpeg"} location={["Home","Profile"]} />
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
                                        <li className={location === "index" && "active"}><a href="/profile">Profile</a></li>
                                    </ul>
                                </div>
                                <div className="user-fav">
                                    <p>Others</p>
                                    <ul>
                                        <li className={location === "watchlistmovie" && "active"} ><a href="../profile/watchlistmovie">Watchlist Movies</a></li>
                                        <li className={location === "watchlistseries" && "active"} ><a href="../profile/watchlistseries">Watchlist Series</a></li>
                                        <li className={location === "ratemovies" && "active"}><a href="../profile/ratemovies">Rated Movies</a></li>
                                        <li className={location === "rateseries" && "active"}><a href="../profile/rateseries">Rated Series</a></li>
                                        <li><a href='#' onClick={handleLogout}>Log out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {Component}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;