import React from 'react';
import ProfileComponent from "../../components/Profile/ProfileComponent";
import RateComponent from "../../components/Profile/RateComponent";

const UserRate = () => {
    let profileId,token

    if (typeof window !== "undefined") {
        profileId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }
    return (<ProfileComponent location={"ratemovies"} Component={<RateComponent type={"movies"} id={profileId} t={token} />} />);
};

export default UserRate;