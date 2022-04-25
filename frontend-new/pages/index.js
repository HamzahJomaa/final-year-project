
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

    const [topcast,setTopCast] = useState([])

    const [loading,setLoading] = useState(false)

    useEffect(async ()=>{
        setLoading(true)
        try {
            let personalized = userId && await GetPersonalizedHomePage({userId})
            let data = await GetHomePage()
            console.log(personalized)
            setLatest(data?.data?.data?.movies?.latest_movies)
            setTopRated(data?.data?.data?.movies?.top_rated_movies)
            setTopReviews(data?.data?.data?.movies?.top_review_movies)
            setPopularityMovies(data?.data?.data?.movies?.popularity_movies)

            setTopRatedSeries(data?.data?.data?.series?.top_rated_series)
            setTopReviewedSeries(data?.data?.data?.series?.top_reviewed_series)
            setPopularitySeries(data?.data?.data?.series?.popularity_series)

            setTopRatedGenreMovies(data?.data?.data?.movies?.top_genres_movies)
            setTopRatedGenreSeries(data?.data?.data?.series?.top_genres_series)

            setTopCast(data?.data?.data?.tmdb_cast)
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
                                <SectionComponent href={"movies"} title={"Movies"} titles={["Top Rated","Top Reviewed","Popularity"]} data={[{type:"movie",data:top_rated}, {type:"movie", data:top_reviewed}, {type:"movies",data:popularity_movies}]} />
                                <SectionComponent href={"series"} title={"Series"} titles={["Top Rated","Top Reviewed","Popularity"]} data={[{type:"series",data:top_rated_series},{type:"series",data:top_reviewed_series},{type:"series",data:popularity_series}]} />
                                {(personalizedGenreMovies.length > 0 || personalizedGenreSeries.length > 0 )  && <SectionComponent title={"Based Previous Visiting"} titles={["Movies","Series"]} data={[{type:"movie",data:personalizedGenreMovies},{type:"series",data:personalizedGenreSeries}]} />}
                                {(previous_reviews_movies.length > 0 || previous_reviews_movies.length > 0 ) && <SectionComponent title={"Based on Previous Reviews"} titles={["Movies","Series"]} data={[{type:"movie",data:previous_reviews_movies},{type:"series",data:previous_reviews_series}]} />}
                                {(pending_watchlist_movies_data.length > 0 || pending_watchlist_series_data.length > 0 ) && <SectionComponent title={"Watchlist not watched"} titles={["Series","Movies"]} data={[{type:"series",data:pending_watchlist_series_data},{type:"movie",data:pending_watchlist_movies_data}]} />}
                            </div>
                            <div className="col-md-4">
                                <div className="sidebar">
                                    <div className="celebrities">
                                        <h4 className="sb-title">Spotlight Celebrities</h4>
                                        {topcast?.length > 0 && topcast?.splice(0,10).map((cast,index)=>(
                                            <div className="celeb-item">
                                                <a href="#"><img src={`https://www.themoviedb.org/t/p/w92${cast.profile_path}`}alt="" width="70" height="70"/></a>
                                                <div className="celeb-author">
                                                    <h6><a href={`https://www.themoviedb.org/person/${cast.id}`}>{cast.name}</a></h6>
                                                    <span>Actor</span>
                                                </div>
                                            </div>
                                        ))}
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
                                <h2>Top Movie Genre</h2>
                            </div>
                            {top_rated_genre_movies?.map(element=>
                                (<div className="col-md-3">
                                    <GenreComponent title={element?.genre} items={element?.data} />
                                </div>)
                            )}
                        </div>
                        <div className="row ipad-width">
                            <div className="title-hd">
                                <h2>Top Series Genre</h2>
                            </div>
                            {top_rated_genre_series?.map(element=>
                                (<div className="col-md-3">
                                    <GenreComponent title={element?.genre} items={element?.data} />
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}
