import React from "react"
import Login from "../components/Login";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import FooterComponent from "../components/FooterComponent";

const LoginPage = () =>{
    return(
        <div className={styles.container}>

            <div className="loading">
                <div className="loading-inner">
                    <div className="loading-effect">
                        <div className="object"></div>
                    </div>
                </div>
            </div>

            <nav id="main-mobile-nav"></nav>

            <div className="wrapper">
                <Header />
                <section className="movie-detail-intro overlay-gradient ptb100" />
                <Login />
                <FooterComponent />
            </div>
            <div className="general-search-wrapper">
                <form className="general-search" role="search" method="get" action="#">
                    <input type="text" placeholder="Type and hit enter..." />
                    <span id="general-search-close" className="ti-close toggle-search"></span>
                </form>
            </div>
        </div>
    )
}

export default LoginPage