import React, {useEffect} from "react"

import {useSelector} from "react-redux";

const Header = () =>{

    return(
        <header className="header header-fixed header-transparent text-white">
            <div className="container-fluid">


                <nav className="navbar navbar-expand-lg">

                    <a className="navbar-brand" href="index-2.html">
                        <img src="assets/images/logo.svg" alt="logo" width="150" className="logo"/>
                        <img src="assets/images/logo-white.svg" alt="white logo" width="150" className="logo-white" />
                    </a>

                    <button id="mobile-nav-toggler" className="hamburger hamburger--collapse" type="button">
                       <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                       </span>
                    </button>


                    <div className="navbar-collapse" id="main-nav">


                        <ul className="navbar-nav mx-auto" id="main-menu">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">Home</a>


                                <ul className="dropdown-menu">

                                    <li>
                                        <a className="dropdown-item" href="index-2.html">Home Version 1</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="index2.html">Home Version 2</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="index3.html">Home Version 3</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="index4.html">Home Version 4</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">Pages</a>

                                <ul className="dropdown-menu">

                                    <li>
                                        <a className="dropdown-item" href="404.html">404 Page</a>
                                    </li>


                                    <li className="divider" role="separator"></li>


                                    <li>
                                        <a className="dropdown-item" href="celebrities-list.html">celebrities list</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="celebrities-grid.html">celebrities grid</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="celebrity-detail.html">celebrity detail</a>
                                    </li>

                                    <li className="divider" role="separator"></li>


                                    <li>
                                        <a className="dropdown-item" href="contact-us.html">Contact us</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="coming-soon.html">Coming soon</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="pricing.html">Pricing Plan</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="login-register.html">Login - Register</a>
                                    </li>


                                    <li>
                                        <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">Movies & TV Shows</a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="movie-list.html">Movie List 1</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-list2.html">Movie List 2</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-grid.html">Movie Grid 1</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-grid2.html">Movie Grid 2</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-grid3.html">Movie Grid 3</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-grid4.html">Movie Grid 4</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-detail.html">Movie Detail</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="movie-detail2.html">Movie Detail 2</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="watch-later.html">Watch Later</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">Blog</a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="blog-list-fullwidth.html">Blog List Fullwidth</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="blog-post-detail.html">Blog Detail</a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="blog-post-detail-fullwidth.html">Blog Detail Fullwidth</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contact-us.html">Contact us</a>
                            </li>

                        </ul>


                        <ul className="navbar-nav extra-nav">

                            <li className="nav-item">
                                <a className="nav-link toggle-search" href="#">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>

                            <li className="nav-item notification-wrapper">
                                <a className="nav-link notification" href="#">
                                    <i className="fa fa-globe"></i>
                                    <span className="notification-count">2</span>
                                </a>
                            </li>

                            <li className="nav-item m-auto">
                                <a href="login" className="btn btn-main btn-effect login-btn">
                                    <i className="icon-user"></i>login
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header