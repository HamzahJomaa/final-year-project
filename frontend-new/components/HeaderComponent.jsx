import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const HeaderComponent = () => {
    let profile

    if (typeof window !== "undefined") {
        profile = localStorage.getItem("id")
    }
    useEffect(()=>{
        console.log(profile)
    },[])
    return (
        <header className="ht-header">
            <div className="container">
                <nav className="navbar navbar-default navbar-custom">
                    <div className="navbar-header logo">
                        <div className="navbar-toggle" data-toggle="collapse"
                             data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <a href="index.html"><img className="logo" src="/images/logo1.png" alt="" width="119"
                                                  height="58"/></a>
                    </div>

                    <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav flex-child-menu menu-left">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="dropdown first">
                                <a className="btn btn-default" href={"/"}>
                                    Home
                                </a>
                            </li>
                            <li className="dropdown first">
                                <a className="btn btn-default" href={"/movies"}>
                                    Movies
                                </a>
                            </li>
                            <li className="dropdown first">
                                <a className="btn btn-default" href={"/series"}>
                                    Tv Show
                                </a>
                            </li>
                            <li className="dropdown first">
                                <a className="btn btn-default">
                                    Reviews
                                </a>
                            </li>
                            <li className="dropdown first">
                                <a className="btn btn-default">
                                    Contact Us
                                </a>
                            </li>
                            <li className="first">
                                <a className={"btn btn-default"} href="/profile">Account</a>
                            </li>
                        </ul>
                        {!profile?
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="loginLink"><a href="#">LOG In</a></li>
                                <li className="btn signupLink"><a href="#">sign up</a></li>
                            </ul>
                            : ""
                        }
                    </div>
                </nav>

                <div className="top-search">
                    <select>
                        <option value="united">TV show</option>
                        <option value="saab">Others</option>
                    </select>
                    <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
                </div>
            </div>
        </header>
    );
};


export default HeaderComponent;