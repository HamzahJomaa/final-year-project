import React, {useEffect, useState} from 'react';

import ProfileComponent from "../../components/Profile/ProfileComponent";
import MainComponent from "../../components/Profile/MainComponent";

const Index = () => {
    let profileId,token

    if (typeof window !== "undefined") {
        profileId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }

    return (<ProfileComponent location={"index"} Component={<MainComponent id={profileId} t={token} />} />);
};



export default Index;
