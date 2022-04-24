import React from 'react';
import ProfileComponent from "../../components/Profile/ProfileComponent";
import RateComponent from "../../components/Profile/RateComponent";
import WatchlistComponent from "../../components/WatchlistComponent";

const Watchlistmovie = () => {
    let profileId,token

    if (typeof window !== "undefined") {
        profileId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }
    return (<ProfileComponent location={"watchlistmovie"} Component={<WatchlistComponent type={"Movies"} id={profileId} t={token} />} />);
};

export default Watchlistmovie;