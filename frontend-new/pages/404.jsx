import React, {useEffect, useState} from 'react';

import HeroComponent from "../components/HeroComponent";
import Loader from "../components/Loader";

const Reset = () => {

    return (
        <>
            <HeroComponent type={"user-hero"} bgimg={"slider-bg.jpeg"}/>
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width w-50 mx-auto">
                        <lottie-player src="/404.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </>
    );
};

export default Reset;

