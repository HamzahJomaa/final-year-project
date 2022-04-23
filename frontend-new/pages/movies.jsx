import React, {useEffect, useState} from 'react';
import HeroComponent from "../components/HeroComponent";
import {ListStream,Search} from "../api/Main";
import {to_slug} from "../helpers/contenthelper"
import Pagination from '@mui/material/Pagination';
import Image from "next/image"
import ImageComponent from "../helpers/ImageComponent";
import SearchComponent from "./Search";
import Error from "next/error";

const Movies = () => {
    const [movies,setMovies] = useState([])
    const [metadata,setMetaData] = useState([])
    const [perPage,setPerPage] = useState(20)
    const [page,setPage] = useState(1)
    const [searchData,setSearchData] = useState()
    const [order,setOrder] = useState("")
    const perPageHandler = (e) =>{
        setPerPage(parseInt(e.target.value))
    }

    const pageHandler = (event, value) => {
        setPage(value);
    };
    const [loading,setLoading] = useState(false)

    const handleSearch = async (data)=>{
        setSearchData(data)
    }

    useEffect(async ()=>{
        setLoading(true)
        try {
            let movies = await Search(searchData,"movies",perPage,page,order)
            setMovies(movies?.data?.data?.result)
            setMetaData(movies?.data?.data?.stream_count)
        }catch (e) {
            console.error(e)
        }finally {
            setLoading(false)
        }
    },[perPage,page,searchData,order])
    return (
        <div>
            <HeroComponent type={"common-hero"} title={"Movie Listing"} bgimg={"slider-bg.jpeg"} location={["home","movies"]} />
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                <p>Found <span>{metadata} movies</span> in total</p>
                                <label>Sort by:</label>
                                <select onChange={e=>setOrder(e.target.value)}>
                                    <option value="">Sorting Type</option>
                                    <option value="vote_average-desc">Rating Descending</option>
                                    <option value="vote_average-asc">Rating Ascending</option>
                                    <option value="release_date-desc">Release date Descending</option>
                                    <option value="release_date-asc">Release date Ascending</option>
                                </select>
                            </div>
                            <div className="flex-wrap-movielist">
                                {movies.length > 0 && !loading ? movies.map((item,index)=>(
                                    <div key={index} className="movie-item-style-2 movie-item-style-1">
                                        <ImageComponent src={`https://image.tmdb.org/t/p/w342/${item?.poster_path}`} alt="I'm a lazy image"
                                                        width="600"
                                                        loading={"eager"}
                                                        height="800"
                                                        placeholder="blur" blurDataURL="/images/owl.video.play.png"  />
                                        <div className="hvr-inner">
                                            <a href={`./movie/${item?.tmdb}/${to_slug(item?.title)}`}> Read more <i
                                                className="ion-android-arrow-dropright"></i> </a>
                                        </div>
                                        <div className="mv-item-infor">
                                            <h6><a href={`./movie/${item?.tmdb}/${to_slug(item?.title)}`}>{item?.title}</a></h6>
                                            <p className="rate"><i className="ion-android-star"></i><span>{item?.vote_average.toFixed(1)}</span> /5
                                            </p>
                                        </div>
                                    </div>
                                )): "No Results"}

                            </div>
                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select onChange={perPageHandler}>
                                    <option value="5">5 Movies</option>
                                    <option value="10">10 Movies</option>
                                    <option value="15">15 Movies</option>
                                    <option selected value="20">20 Movies</option>
                                    <option value="25">25 Movies</option>
                                    <option value="50">50 Movies</option>
                                    <option value="100">100 Movies</option>
                                </select>

                                <div className="pagination2">
                                    <span>Page 1 of {(metadata/ perPage).toFixed(0)}:</span>
                                    <Pagination size={"small"} style={{color:"red"}} count={(metadata/ perPage).toFixed(0)} page={page} onChange={pageHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <SearchComponent type={"Movies"} sendSearch={handleSearch} />
                                <div className="ads">
                                    <img src="images/uploads/ads1.png" alt="" />
                                </div>
                                <div className="sb-facebook sb-it">
                                    <h4 className="sb-title">Find us on Facebook</h4>
                                    <iframe src=""
                                            data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                                            height="315" style={{width:"100%",border:"none",overflow:"hidden"}}></iframe>
                                </div>
                                <div className="sb-twitter sb-it">
                                    <h4 className="sb-title">Tweet to us</h4>
                                    <div className="slick-tw">
                                        <div className="tweet item" id="599202861751410688">
                                        </div>
                                        <div className="tweet item" id="297462728598122498">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movies;