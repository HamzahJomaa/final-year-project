import React from "react"
import {SpliceByWord,BeautifyShortDate} from "../helpers/contenthelper";

const LastReview = ({last_review}) =>{
    return(
        <>
        <div className="title-hd-sm">
            <h4>Reviews</h4>
            <a href="#" className="time">Full Cast & Crew <i className="ion-ios-arrow-right"></i></a>
        </div>

        <div className="mvcast-item">
            <div className="mv-user-review-item">
                <h3>{last_review?.title}</h3>
                <div className="no-star">
                    <i className={`ion-android-star ${last_review?.rate >= 1 ? "" : "last"}`}></i>
                    <i className={`ion-android-star ${last_review?.rate >= 2 ? "" : "last"}`}></i>
                    <i className={`ion-android-star ${last_review?.rate >= 3 ? "" : "last"}`}></i>
                    <i className={`ion-android-star ${last_review?.rate >= 4 ? "" : "last"}`}></i>
                    <i className={`ion-android-star ${last_review?.rate >= 5 ? "" : "last"}`}></i>
                </div>
                <p className="time">
                    {BeautifyShortDate(last_review?.createdAt)} <a href="#"> {`${last_review?.userId?.firstName} ${last_review?.userId?.lastName}`}</a>
                </p>
                <p>{last_review?.body}</p>
            </div>
        </div>
        </>
    )
}

export default LastReview