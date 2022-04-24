
import styles from '../styles/Home.module.css'
import {GetHomePage, GetPersonalizedHomePage} from "../api/Main";


import SectionComponent from "../components/SectionComponent"
import Loader from "../components/Loader";
import SwiperSlider from "../components/SwiperSlider";

import React, {useState,useEffect} from "react";

import GenreComponent from "../components/GenreComponent"


export default function Home() {
    let userId,token

    if (typeof window !== "undefined") {
        userId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }


    const [popularity_movies,setPopularityMovies] = useState([])
    const [popularity_series,setPopularitySeries] = useState([])

    const [pending_watchlist_series_data,setPendingWatchlistSeries] = useState([])
    const [pending_watchlist_movies_data,setPendingWatchlistMovies] = useState([])

    const [top_rated,setTopRated] = useState([])
    const [top_reviewed,setTopReviews] = useState([])
    const [latest,setLatest] = useState([])

    const [top_rated_series,setTopRatedSeries] = useState([])
    const [top_reviewed_series,setTopReviewedSeries] = useState([])

    const [personalizedGenreMovies,setPersonalizedGenreMovies] = useState([])
    const [personalizedGenreSeries,setPersonalizedGenreSeries] = useState([])

    const [previous_reviews_movies,setPreviousReviewsMovies] = useState([])
    const [previous_reviews_series,setPreviousReviewSeries] = useState([])

    const [top_rated_genre_movies,setTopRatedGenreMovies] = useState([])
    const [top_rated_genre_series,setTopRatedGenreSeries] = useState([])


    const [loading,setLoading] = useState(false)

    useEffect(async ()=>{
        setLoading(true)
        try {
            let personalized = userId && await GetPersonalizedHomePage({userId})
            let data = await GetHomePage()
            console.log(data)
            setLatest(data?.data?.data?.movies?.latest_movies)
            setTopRated(data?.data?.data?.movies?.top_rated_movies)
            setTopReviews(data?.data?.data?.movies?.top_review_movies)
            setPopularityMovies(data?.data?.data?.movies?.popularity_movies)

            setTopRatedSeries(data?.data?.data?.series?.top_rated_series)
            setTopReviewedSeries(data?.data?.data?.series?.top_reviewed_series)
            setPopularitySeries(data?.data?.data?.series?.popularity_series)

            setTopRatedGenreMovies(data?.data?.data?.movies?.top_genres_movies)
            setTopRatedGenreSeries(data?.data?.data?.series?.top_genres_series)
            if (userId){
                setPersonalizedGenreMovies(personalized?.data?.statusMessage?.genre_movies_returned)
                setPersonalizedGenreSeries(personalized?.data?.statusMessage?.genre_series_returned)
                setPreviousReviewsMovies(personalized?.data?.statusMessage?.movies_on_recent_reviews)
                setPreviousReviewSeries(personalized?.data?.statusMessage?.series_on_recent_reviews)
                setPendingWatchlistSeries(personalized?.data?.statusMessage?.pending_watchlist_series)
                setPendingWatchlistMovies(personalized?.data?.statusMessage?.pending_watchlist_movies)
            }
        }catch (e) {
            console.error(e)
        }finally {
            setLoading(false)
        }
    },[])

    return (
        <div className={styles.container}>
            {loading ? <Loader /> : <>
                <div className="slider sliderv2">
                    <SwiperSlider items={latest} />
                </div>
                <div className="movie-items">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-8">
                                <SectionComponent title={"Movies"} titles={["Top Rated","Top Reviewed","Popularity"]} data={[{type:"movie",data:top_rated}, {type:"movie", data:top_reviewed}, {type:"movies",data:popularity_movies}]} />
                                <SectionComponent title={"Series"} titles={["Top Rated","Top Reviewed","Popularity"]} data={[{type:"series",data:top_rated_series},{type:"series",data:top_reviewed_series},{type:"series",data:popularity_series}]} />
                                {(personalizedGenreMovies.length > 0 || personalizedGenreSeries.length > 0 )  && <SectionComponent title={"Based Previous Visiting"} titles={["Movies","Series"]} data={[{type:"movie",data:personalizedGenreMovies},{type:"series",data:personalizedGenreSeries}]} />}
                                {(previous_reviews_movies.length > 0 || previous_reviews_movies.length > 0 ) && <SectionComponent title={"Based on Previous Reviews"} titles={["Movies","Series"]} data={[{type:"movie",data:previous_reviews_movies},{type:"series",data:previous_reviews_series}]} />}
                                {(pending_watchlist_movies_data.length > 0 || pending_watchlist_series_data.length > 0 ) && <SectionComponent title={"Watchlist not watched"} titles={["Movies","Series"]} data={[{type:"movie",data:pending_watchlist_movies_data},{type:"series",data:pending_watchlist_series_data}]} />}
                            </div>
                            <div className="col-md-4">
                                <div className="sidebar">
                                    <div className="ads">
                                        <img src="images/uploads/ads1.png" alt="" width="336" height="296"/>
                                    </div>
                                    <div className="celebrities">
                                        <h4 className="sb-title">Spotlight Celebrities</h4>
                                        <div className="celeb-item">
                                            <a href="#"><img src="images/uploads/ava1.jpg" alt="" width="70" height="70"/></a>
                                            <div className="celeb-author">
                                                <h6><a href="#">Samuel N. Jack</a></h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#"><img src="images/uploads/ava2.jpg" alt="" width="70" height="70"/></a>
                                            <div className="celeb-author">
                                                <h6><a href="#">Benjamin Carroll</a></h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#"><img src="images/uploads/ava3.jpg" alt="" width="70" height="70"/></a>
                                            <div className="celeb-author">
                                                <h6><a href="#">Beverly Griffin</a></h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#"><img src="images/uploads/ava4.jpg" alt="" width="70" height="70"/></a>
                                            <div className="celeb-author">
                                                <h6><a href="#">Justin Weaver</a></h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn">See all celebrities<i
                                            className="ion-ios-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trailers">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="title-hd">
                                <h2>in theater</h2>
                                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                            </div>
                            {top_rated_genre_movies?.map(element=>
                                (<div className="col-md-3">
                                    <GenreComponent title={element?.genre} items={element?.data} />
                                </div>)
                            )}
                        </div>
                        <div className="row ipad-width">
                            <div className="title-hd">
                                <h2>in theater</h2>
                                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                            </div>
                            {top_rated_genre_series?.map(element=>
                                (<div className="col-md-3">
                                    <GenreComponent title={element?.genre} items={element?.data} />
                                </div>)
                            )}
                        </div>
                    </div>
                </div>

                <div className="latestnew">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-8">
                                <div className="ads">
                                    <img src="images/uploads/ads2.png" alt="" width="728" height="106"/>
                                </div>
                                <div className="title-hd">
                                    <h2>Latest news</h2>
                                </div>
                                <div className="tabs">
                                    <ul className="tab-links-3">
                                        <li className="active"><a href="#tab31">#Movies </a></li>
                                        <li><a href="#tab32"> #TV Shows </a></li>
                                        <li><a href="#tab33"> # Celebs</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab31" className="tab active">
                                            <div className="row">
                                                <div className="blog-item-style-1">
                                                    <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250"/>
                                                    <div className="blog-it-infor">
                                                        <h3><a href="#">Brie Larson to play first female white house candidate
                                                            Victoria Woodull in Amazon film</a></h3>
                                                        <span className="time">13 hours ago</span>
                                                        <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria
                                                            Woodhull, with Oscar winning Room
                                                            star <span>Brie Larson</span> polsed to produce, and play the first
                                                            female candidate for the presidency of the United States. Amazon
                                                            bought it in a pitch package deal. <span> Ben Kopit</span>, who
                                                            wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab32" className="tab">
                                            <div className="row">
                                                <div className="blog-item-style-1">
                                                    <img src="images/uploads/blog-it2.jpg" alt="" width="170" height="250"/>
                                                    <div className="blog-it-infor">
                                                        <h3><a href="#">Tab 2</a></h3>
                                                        <span className="time">13 hours ago</span>
                                                        <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria
                                                            Woodhull, with Oscar winning Room
                                                            star <span>Brie Larson</span> polsed to produce, and play the first
                                                            female candidate for the presidency of the United States. Amazon
                                                            bought it in a pitch package deal. <span> Ben Kopit</span>, who
                                                            wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab33" className="tab">
                                            <div className="row">
                                                <div className="blog-item-style-1">
                                                    <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250"/>
                                                    <div className="blog-it-infor">
                                                        <h3><a href="#">Tab 3</a></h3>
                                                        <span className="time">13 hours ago</span>
                                                        <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria
                                                            Woodhull, with Oscar winning Room
                                                            star <span>Brie Larson</span> polsed to produce, and play the first
                                                            female candidate for the presidency of the United States. Amazon
                                                            bought it in a pitch package deal. <span> Ben Kopit</span>, who
                                                            wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="morenew">
                                    <div className="title-hd">
                                        <h3>More news on Blockbuster</h3>
                                        <a href="#" className="viewall">See all Movies news<i
                                            className="ion-ios-arrow-right"></i></a>
                                    </div>
                                    <div className="more-items">
                                        <div className="left">
                                            <div className="more-it">
                                                <h6><a href="#">Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a>
                                                </h6>
                                                <span className="time">13 hours ago</span>
                                            </div>
                                            <div className="more-it">
                                                <h6><a href="#">French cannibal horror “Raw” inspires L.A. theater to hand out
                                                    “Barf Bags”</a></h6>

                                                <span className="time">13 hours ago</span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="more-it">
                                                <h6><a href="#">Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a>
                                                </h6>
                                                <span className="time">13 hours ago</span>
                                            </div>
                                            <div className="more-it">
                                                <h6><a href="#">China punishes more than 300 cinemas for box office cheating</a>
                                                </h6>
                                                <span className="time">13 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="sidebar">
                                    <div className="sb-facebook sb-it">
                                        <h4 className="sb-title">Find us on Facebook</h4>
                                        <iframe src=""
                                                data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=300&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                                                width="300" height="315" style={{border:"none",overflow:"hidden"}}></iframe>
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
            </>}
        </div>
    )
}
