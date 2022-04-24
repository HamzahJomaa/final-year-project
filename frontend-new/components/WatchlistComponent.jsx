import React, {useEffect, useState} from 'react';
import ImageComponent from "../helpers/ImageComponent";
import {BeautifyShortDate,to_slug} from "../helpers/contenthelper";
import Pagination from "@mui/material/Pagination";
import {getWatchlistUser} from "../api/Main";

const WatchlistComponent = ({id,t,type}) => {

    const [profileId,setProfileId] = useState(id)
    const [token,setToken] = useState(t)
    const [watchlist,setWatchlist] = useState([])
    const [watchlist_count,setWatchListCount] = useState(0)

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
            const watchlistAPI = await getWatchlistUser({onModel:type,userId: profileId ,token,perPage, page})
            setWatchlist(watchlistAPI?.data?.data?.result)
            setWatchListCount(watchlistAPI?.data?.data?.watchlist_count)
        }catch (e) {
            console.error(e)
        }
    },[perPage,page])

    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="topbar-filter">
                <p>Found <span>{watchlist?.length || 0} rates</span> in total</p>
            </div>
            {watchlist?.length > 0 && watchlist.map((item,index)=>(
                <div key={index} className="movie-item-style-2 userrate">
                    <ImageComponent src={`https://image.tmdb.org/t/p/w342/${item?.poster_path}`} alt="I'm a lazy image"
                                    width="250"
                                    loading={"eager"}
                                    height="400"
                                    placeholder="blur" blurDataURL="/images/owl.video.play.png" />
                    <div className="mv-item-infor">
                        <h6><a href={`/${type === "Series" ? "series" : "movie"}/${item?.tmdb}/${to_slug(item?.title)}`}>{item?.title}</a></h6>
                        <p>{item?.overview}</p>
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
                    <span>Page {page} of {(watchlist_count / perPage) < 1 ? 1 : (watchlist_count / perPage).toFixed(0)}:</span>
                    <Pagination size={"small"} style={{ color: "red" }} count={(watchlist_count / perPage).toFixed(0) || 1} page={page} onChange={pageHandler} />
                </div>
            </div>
        </div>
    );
};

export default WatchlistComponent;