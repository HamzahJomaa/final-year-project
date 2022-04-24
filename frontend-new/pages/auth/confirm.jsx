import React, {useEffect, useState} from 'react';

import {useRouter} from "next/router";
import {ConfirmAccount} from "../../api/Auth";
import {getStream} from "../../api/Main";
import HeroComponent from "../../components/HeroComponent";
import Loader from "../../components/Loader";

const Reset = ({token}) => {

    const [confirmation, setConfirmation] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        try {
            let confirmation = await ConfirmAccount({token})
            if (confirmation?.data?.statusCode === 200) {
                return setConfirmation(true)
            }
            return setConfirmation(false)
        } catch (e) {
            return setConfirmation(false)
        }finally {
            setLoading(false)
        }

    }, [])

    return (
        <>
            {loading? <Loader /> :
            <>
                <HeroComponent type={"user-hero"} bgimg={"slider-bg.jpeg"}/>
                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width w-50 mx-auto">
                            {confirmation ? <lottie-player src="/lottie.json" background="transparent" speed="1" loop autoplay></lottie-player> : <lottie-player src="/error.json" background="transparent" speed="1" loop autoplay></lottie-player> }
                        </div>
                    </div>
                </div>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            </>
            }
        </>
    );
};

export default Reset;

export const getServerSideProps = async ({req, res, resolvedUrl}) => {
    const token = resolvedUrl.split("=")[1]
    return {
        props: {
            token,
        }
    }
}