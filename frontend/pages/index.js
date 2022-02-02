import React from "react";
import Lottie from "react-lottie";
import animationData from "../styles/assets/animation/lf30_editor_ulav1mj0.json";
import logo from "../styles/assets/images/RHU LOGO Landscape (1).png"

import style from "../styles/Home.module.css"

function CoronaVirus() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <Lottie options={defaultOptions} height={400} width={400} />
                <img className={style.image} src={logo.src}/>
            </div>
    );
}

export default CoronaVirus;