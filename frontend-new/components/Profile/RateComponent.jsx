import React, {useEffect, useState} from 'react';
import {getUserReviews} from "../../api/Main"
import ImageComponent from "../../helpers/ImageComponent";
import {BeautifyShortDate,to_slug} from "../../helpers/contenthelper";
import Pagination from "@mui/material/Pagination";

const RateComponent = ({id,t,type}) => {

    const [profileId,setProfileId] = useState(id)
    const [token,setToken] = useState(t)
    const [reviews,setReviews] = useState([])
    const [reviewCount,setReviewCount] = useState(0)

    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)

    const perPageHandler = (e) => {
        setPerPage(parseInt(e.target.value))
    }

    const pageHandler = (event, value) => {
        setPage(value);
    };

    useEffect( async ()=>{
        try {
            const reviewsAPI = await getUserReviews({id: profileId, type ,token,perPage, page})
            setReviews(reviewsAPI?.data?.statusMessage?.reviews)
            setReviewCount(reviewsAPI?.data?.statusMessage?.review_count)
        }catch (e) {
            console.error(e)
        }
    },[perPage,page])

    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="topbar-filter">
                <p>Found <span>{reviews?.length || 0} rates</span> in total</p>
            </div>
            {reviews?.length > 0 && reviews.map((item,index)=>(
                <div key={index} className="movie-item-style-2 userrate">
                    <ImageComponent src={`https://image.tmdb.org/t/p/w342/${item?.on?.poster_path}`} alt="I'm a lazy image"
                                    width="250"
                                    loading={"eager"}
                                    height="400"
                                    placeholder="blur" blurDataURL="/images/owl.video.play.png" />
                    <div className="mv-item-infor">
                        <h6><a href={`/${type === "movies" ? "movie" : "series"}/${item?.on?.tmdb}/${to_slug(item?.title)}`}>{item?.on?.title}</a></h6>
                        <p className="time sm-text">your rate:</p>
                        <p className="rate"><i className="ion-android-star"></i><span>{item.rate}</span> /5</p>
                        <p className="time sm-text">your reviews:</p>
                        <h6>{item?.title}</h6>
                        <p className="time sm">{BeautifyShortDate(item.createdAt)}</p>
                        <p>{item.body}</p>
                    </div>
                </div>
            ))}

            <div className="topbar-filter">
                <label>Movies per page:</label>
                <select onChange={perPageHandler} value={perPage}>
                    <option value="1">1 Movies</option>
                    <option value="5">5 Movies</option>
                    <option value="10">10 Movies</option>
                    <option value="20">20 Movies</option>
                </select>
                <div className="pagination2">
                    <span>Page {page} of {(reviewCount / perPage) < 1 ? 1 : (reviewCount / perPage).toFixed(0)}:</span>
                    <Pagination size={"small"} style={{ color: "red" }} count={(reviewCount / perPage).toFixed(0) || 1} page={page} onChange={pageHandler} />
                </div>
            </div>
        </div>
    );
};

export default RateComponent;