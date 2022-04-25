import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import {
    BuyTicket,
    getStream,
    VisitedStream,
    getStreamReviews,
    CheckWatched,
    AddWatchList,
    checkWatchList
} from "../../../api/Main";
import HeroComponent from "../../../components/HeroComponent";
import { SpliceByWord, BeautifyShortDate } from "../../../helpers/contenthelper";
import ReviewsComponent from "../../../components/ReviewsComponent";
import RecommendationComponent from '../../../components/RecommendationSection';
import LastReview from '../../../components/LastReview';
import CastComponent from "../../../components/CastComponent";
import MediaComponent from "../../../components/MediaComponent";
import ImageComponent from "../../../helpers/ImageComponent";
import Loader from "../../../components/Loader";

const MoviePage = ({ id, series, recommendation, cast, images, last_review,review_count,trailer, providers,provider_link}) => {
    console.log(series)
    const router = useRouter()
    const [release, setRelease] = useState(new Date(series.date))
    const [director, setDirector] = useState(...cast.crew.filter(e => e.job === "Director"))
    const [writer, setWriter] = useState(...cast.crew.filter(e => e.job === "Writer"))
    const [reviews, setReviews] = useState([])
    const [watchlist,setWatchlist] = useState(false)
    const [isWatched,setIsWatched] = useState(false)
    const [loading,setLoading] = useState(false)


    let profile, token

    if (typeof window !== "undefined") {
        profile = localStorage.getItem("id")
        token = localStorage.getItem("token")
    }

    const handleWatchlist = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await AddWatchList({ onModel: "Series", on: series._id, userId: profile, token })
            let watchlist = await checkWatchList({userId:profile,on:series._id,token})
            setWatchlist(watchlist?.data)
        } catch (e) {
            console.error(e.response)
        }finally {
            setLoading(false)
        }
    }

    const handleTicket = async () => {
        setLoading(true)
        try {
            let result = await BuyTicket({ StreamModel: "Series", Stream: series._id, userId: profile, token })
            let watched = await CheckWatched({profile,ref:series._id,token,streamModel:"Series"})
            setIsWatched(watched.data)
        } catch (e) {
            console.error(e)
        }finally {
            setLoading(false)
        }
    }

    useEffect(async () => {
        try {
            if (profile) {
                await VisitedStream({ StreamModel: "Series", Stream: series._id, userId: profile, token })
                let watched = await CheckWatched({profile,ref:series._id,token,streamModel:"Series"})
                setIsWatched(watched?.data)
                let watchlist = await checkWatchList({userId:profile,on:series._id,token})
                setWatchlist(watchlist?.data)
            }
        } catch (error) {
            console.log(error)
            if (error.response.status === 401 || error.response.status === 403) {
                localStorage.clear()
            }
        }
    }, [])

    return (
        <>
            {loading? <Loader/> :
            <>
                <HeroComponent type={"mv-single-hero"} bgimg={series?.backdrop_path} />
                <div className="page-single movie-single movie_single">
                    <div className="container">
                        <div className="row ipad-width2">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="movie-img sticky-sb">
                                    <img src={`https://image.tmdb.org/t/p/w342/${series?.poster_path}`} alt="" />
                                    <div className="movie-btn">
                                        {trailer && (<div className="btn-transform transform-vertical red">
                                            <div><a href="#" className="item item-1 redbtn"> <i
                                                className="ion-play"></i> Watch Trailer</a></div>
                                            <div><a href={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
                                                    className="item item-2 redbtn fancybox-media hvr-grow"><i
                                                className="ion-play"></i></a></div>
                                        </div>)}
                                        {profile && !isWatched && ( <div className="btn-transform transform-vertical">
                                            <div><button onClick={handleTicket} className="item item-1 yellowbtn"> <i
                                                className="ion-card"></i> Buy ticket</button></div>
                                            <div><button onClick={handleTicket} className="item item-2 yellowbtn"><i className="ion-card"></i></button>
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="movie-single-ct main-content">
                                    <h1 className="bd-hd">{series?.title} <span>{release.getFullYear()}</span></h1>
                                    <div className="social-btn">
                                        {!watchlist && <a href="#" onClick={handleWatchlist} className="parent-btn"><i className="ion-heart"></i> Add to Watchlist</a>}
                                        <div className="hover-bnt">
                                            <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                                            <div className="hvr-item">
                                                <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                                                <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                                                <a href="#" className="hvr-grow"><i
                                                    className="ion-social-googleplus"></i></a>
                                                <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-rate">
                                        <div className="rate">
                                            <i className="ion-android-star"></i>
                                            <p><span>{series?.vote_average.toFixed(1)}</span> /5<br />
                                                <span className="rv">{series?.vote_count} Reviews</span>
                                            </p>
                                        </div>
                                        <div className="providers">
                                            {providers?.length > 0 && providers?.map(item=>(
                                                <a href={provider_link}> <img width={20} src={`https://image.tmdb.org/t/p/w342${item.logo_path}`} alt=""/></a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="movie-tabs">
                                        <div className="tabs">
                                            <ul className="tab-links tabs-mv">
                                                <li className="active"><a href="#overview">Overview</a></li>
                                                <li><a href="#reviews"> Reviews</a></li>
                                                <li><a href="#cast"> Cast & Crew </a></li>
                                                <li><a href="#media"> Media</a></li>
                                                <li><a href="#moviesrelated"> Related Movies</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="overview" className="tab active">
                                                    <div className="row">
                                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                                            <p>{series?.overview}</p>
                                                            <div className="title-hd-sm">
                                                                <h4>Videos & Photos</h4>
                                                                <a href="#" className="time">All 5 Videos & 245 Photos <i
                                                                    className="ion-ios-arrow-right"></i></a>
                                                            </div>
                                                            <div className="mvsingle-item ov-item">
                                                                {images?.backdrops?.length > 0 ? images?.backdrops?.map((element, index) => {
                                                                    if (index < 12){
                                                                        return(
                                                                            <a key={index} className="img-lightbox" data-fancybox-group="gallery"
                                                                               href={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`}>
                                                                                <ImageComponent src={`https://image.tmdb.org/t/p/w342/${element?.file_path}`} alt="I'm a lazy image"
                                                                                                width="100"
                                                                                                loading={"eager"}
                                                                                                height="50"
                                                                                                placeholder="blur" blurDataURL="/images/owl.video.play.png" /></a>
                                                                        )
                                                                    }
                                                                }) : ""}
                                                            </div>
                                                            <div className="title-hd-sm">
                                                                <h4>cast</h4>
                                                                <a href="#" className="time">Full Cast & Crew <i className="ion-ios-arrow-right"></i></a>
                                                            </div>

                                                            <div className="mvcast-item">
                                                                {cast.cast.length > 0 ? cast.cast.map((element, index) => {
                                                                    if (index < 6) {
                                                                        return (<div key={index} className="cast-it">
                                                                            <div className="cast-left">
                                                                                <img src="images/uploads/cast1.jpg" alt="" />
                                                                                <a href={`https://www.themoviedb.org/person/${element.id}`}>{element.name}</a>
                                                                            </div>
                                                                            <p>{element.character}</p>
                                                                        </div>)
                                                                    }
                                                                }) : ""}
                                                            </div>
                                                            {last_review && <LastReview last_review={last_review} />}
                                                        </div>
                                                        <div className="col-md-4 col-xs-12 col-sm-12">
                                                            {director && (
                                                                <div className="sb-it">
                                                                    <h6>Director: </h6>
                                                                    <p>{director?.name}</p>
                                                                </div>
                                                            )}
                                                            {writer && (
                                                                <div className="sb-it">
                                                                    <h6>Writer: </h6>
                                                                    <p>{writer?.name}</p>
                                                                </div>
                                                            )}
                                                            <div className="sb-it">
                                                                <h6>Genres:</h6>
                                                                <p>{series?.genres}</p>
                                                            </div>
                                                            <div className="sb-it">
                                                                <h6>Release Date:</h6>
                                                                <p>{BeautifyShortDate(release)}</p>
                                                            </div>
                                                            <div className="sb-it">
                                                                <h6>Run Time:</h6>
                                                                <p>{series.runtime} min</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ReviewsComponent review_count={review_count} type={"Series"} id={series._id} title={series.title} />
                                                <CastComponent cast={cast} director={director} title={series.title} />
                                                <MediaComponent images={images} title={series.title} />
                                                <RecommendationComponent type={"series"}  title={series.title} recommendation={recommendation} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    );
};

export default MoviePage;

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
    const id = resolvedUrl.split("/")[2]
    let series
    try {
        series = await getStream("series", id)

    } catch (e) {
        series = ""
        console.error(e)
    }

    return {
        props: {
            id,
            series: series?.data?.data,
            recommendation: series?.data?.recommended_movies,
            cast: series?.data?.cast,
            images: series?.data?.images,
            last_review: series?.data?.last_review,
            review_count: series?.data?.review_count,
            trailer: series?.data?.trailer || null,
            providers: series?.data?.providers || null,
            provider_link: series?.data?.provider_link || null
        }
    }
}