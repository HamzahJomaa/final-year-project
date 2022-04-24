import React, { useState, useEffect } from 'react';
import { BeautifyShortDate } from "../helpers/contenthelper";
import { getStreamReviews } from "../api/Main";
import Pagination from "@mui/material/Pagination";
import WriteReviewComponent from './WriteReview';
import Loader from "./Loader";


const ReviewsComponent = ({ id, title,review_count,type }) => {
    const [reviews, setReviews] = useState([])
    
    const [loading,setLoading] = useState(false)
    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)

    const perPageHandler = (e) => {
        setPerPage(parseInt(e.target.value))
    }

    const pageHandler = (event, value) => {
        setPage(value);
    };
    
    const reviewAdded = () =>{
        console.log("Review Added")
    }

    useEffect(async () => {
        try {
            let reviewData = await getStreamReviews(id, perPage, page)
            setReviews(reviewData?.data?.statusMessage)
        } catch (e) {
            console.error(e)
        }
    }, [perPage, page])
    return (
        <>
            {loading?<Loader /> :
                <>
                    <div id="reviews" className="tab review">
                        <div className="row">
                            <div className="rv-hd">
                                <div className="div">
                                    <h3>Related Movies To</h3>
                                    <h2>{title}</h2>
                                </div>
                                <WriteReviewComponent on={id} onModel={type} reviewAdded={reviewAdded} />
                            </div>
                            <div className="topbar-filter">
                                <p>Found <span>{reviews?.length} reviews</span> in total</p>
                                <label>Filter by:</label>
                                <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                </select>
                            </div>
                            {reviews?.length > 0 ? reviews.map(review => (
                                <>
                                    <div key={review._id} className="mv-user-review-item">
                                        <h3>{review.title}</h3>
                                        <div className="no-star">
                                            <i className={`ion-android-star ${review.rate >= 1 ? "" : "last"}`}></i>
                                            <i className={`ion-android-star ${review.rate >= 2 ? "" : "last"}`}></i>
                                            <i className={`ion-android-star ${review.rate >= 3 ? "" : "last"}`}></i>
                                            <i className={`ion-android-star ${review.rate >= 4 ? "" : "last"}`}></i>
                                            <i className={`ion-android-star ${review.rate >= 5 ? "" : "last"}`}></i>
                                        </div>
                                        <p className="time">
                                            {BeautifyShortDate(review.createdAt)} <a href="#"> {`${review.userId.firstName} ${review.userId.lastName}`}</a>
                                        </p>
                                        <p>{review.body}</p>
                                    </div>
                                </>
                            )) : (<h5 style={{ color: "white" }}>No Reviews Available</h5>)}
                            <div className="topbar-filter review">
                                <select onChange={perPageHandler} value={perPage}>
                                    <option value="1">1 Movies</option>
                                    <option value="5">5 Movies</option>
                                    <option value="10">10 Movies</option>
                                    <option value="20">20 Movies</option>
                                </select>
                                <div className="pagination2">
                                    <span>Page {page} of {(review_count / perPage) < 1 ? 1 : (review_count / perPage).toFixed(0)}:</span>
                                    <Pagination size={"small"} style={{ color: "red" }} count={(review_count / perPage).toFixed(0)} page={page} onChange={pageHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
};

export default ReviewsComponent;