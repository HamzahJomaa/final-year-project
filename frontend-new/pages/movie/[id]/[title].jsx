import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { BuyTicket, getStream, VisitedStream, getStreamReviews,CheckWatched } from "../../../api/Main";
import HeroComponent from "../../../components/HeroComponent";
import { SpliceByWord, BeautifyShortDate } from "../../../helpers/contenthelper";
import ReviewsComponent from "../../../components/ReviewsComponent";
import RecommendationComponent from '../../../components/RecommendationSection';
import LastReview from '../../../components/LastReview';

const MoviePage = ({ id, movie, recommendation, cast, images, last_review,review_count,trailer}) => {
    const router = useRouter()
    const [release, setRelease] = useState(new Date(movie.date))
    const [director, setDirector] = useState(...cast.crew.filter(e => e.job === "Director"))
    const [writer, setWriter] = useState(...cast.crew.filter(e => e.job === "Writer"))
    const [reviews, setReviews] = useState([])
    const [isWatched,setIsWatched] = useState(false)

    let profile, token

    if (typeof window !== "undefined") {
        profile = localStorage.getItem("id")
        token = localStorage.getItem("token")
    }

    const handleTicket = async () => {
        try {
            let result = await BuyTicket({ StreamModel: "Movies", Stream: movie._id, userId: profile, token })
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(async () => {
        try {
            if (profile) {
                await VisitedStream({ StreamModel: "Movies", Stream: movie._id, userId: profile, token })
                let watched = await CheckWatched({profile,ref:movie._id,token})
                setIsWatched(watched.data)
            }
        } catch (error) {
            console.log(error)
            if (error.response.status === 401 || error.response.status === 403) {
                localStorage.clear()
            }
        }
    }, [handleTicket])

    return (
        <>
            <HeroComponent type={"mv-single-hero"} bgimg={movie?.backdrop_path} />
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`} alt="" />
                                <div className="movie-btn">
                                    <div className="btn-transform transform-vertical red">
                                        <div><a href="#" className="item item-1 redbtn"> <i
                                            className="ion-play"></i> Watch Trailer</a></div>
                                        <div><a href={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
                                            className="item item-2 redbtn fancybox-media hvr-grow"><i
                                                className="ion-play"></i></a></div>
                                    </div>
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
                                <h1 className="bd-hd">{movie?.title} <span>{release.getFullYear()}</span></h1>
                                <div className="social-btn">
                                    <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
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
                                        <p><span>{movie?.vote_average.toFixed(0)}</span> /5<br />
                                            <span className="rv">{movie?.vote_count} Reviews</span>
                                        </p>
                                    </div>
                                    <div className="rate-star">
                                        <p>Rate This Movie: </p>
                                        <i className={`${movie?.vote_average >= 1 ? "ion-ios-star" : "ion-ios-star-outline"} `}></i>
                                        <i className={`${movie?.vote_average >= 2 ? "ion-ios-star" : "ion-ios-star-outline"} `}></i>
                                        <i className={`${movie?.vote_average >= 3 ? "ion-ios-star" : "ion-ios-star-outline"} `}></i>
                                        <i className={`${movie?.vote_average >= 4 ? "ion-ios-star" : "ion-ios-star-outline"} `}></i>
                                        <i className={`${movie?.vote_average >= 5 ? "ion-ios-star" : "ion-ios-star-outline"} `}></i>
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
                                                        <p>{movie?.overview}</p>
                                                        <div className="title-hd-sm">
                                                            <h4>Videos & Photos</h4>
                                                            <a href="#" className="time">All 5 Videos & 245 Photos <i
                                                                className="ion-ios-arrow-right"></i></a>
                                                        </div>
                                                        <div className="mvsingle-item ov-item">
                                                            {images?.backdrops?.length > 0 ? images?.backdrops?.map((element, index) => (
                                                                <a key={index} className="img-lightbox" data-fancybox-group="gallery"
                                                                    href={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`}><img
                                                                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`} width="100" alt="" /></a>

                                                            )) : ""}
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>cast</h4>
                                                            <a href="#" className="time">Full Cast & Crew <i className="ion-ios-arrow-right"></i></a>
                                                        </div>

                                                        <div className="mvcast-item">
                                                            {cast.cast.length > 0 ? cast.cast.map((element, index) => {
                                                                if (index < 11) {
                                                                    return (<div key={index} className="cast-it">
                                                                        <div className="cast-left">
                                                                            <img src="images/uploads/cast1.jpg" alt="" />
                                                                            <a href="#">{element.name}</a>
                                                                        </div>
                                                                        <p>{element.character}</p>
                                                                    </div>)
                                                                }
                                                            }) : ""}
                                                        </div>
                                                        {last_review && <LastReview last_review={last_review} />}
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Director: </h6>
                                                            <p>{director?.name}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Writer: </h6>
                                                            <p>{writer?.name}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Stars: </h6>
                                                            <p><a href="#">Robert Downey Jr,</a> <a href="#">Chris
                                                                Evans,</a> <a href="#">Mark Ruffalo,</a><a
                                                                    href="#"> Scarlett Johansson</a></p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Genres:</h6>
                                                            <p>{movie?.genres}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Release Date:</h6>
                                                            <p>{BeautifyShortDate(release)}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Run Time:</h6>
                                                            <p>141 min</p>
                                                        </div>
                                                        <div className="ads">
                                                            <img src="images/uploads/ads1.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ReviewsComponent review_count={review_count} type={"Movies"} id={movie._id} title={movie.title} />
                                            <div id="cast" className="tab">
                                                <div className="row">
                                                    <h3>Cast & Crew of</h3>
                                                    <h2>Avengers: Age of Ultron</h2>

                                                    <div className="title-hd-sm">
                                                        <h4>Directors & Credit Writers</h4>
                                                    </div>
                                                    <div className="mvcast-item">
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JW</h4>
                                                                <a href="#">Joss Whedon</a>
                                                            </div>
                                                            <p>... Director</p>
                                                        </div>
                                                    </div>

                                                    <div className="title-hd-sm">
                                                        <h4>Directors & Credit Writers</h4>
                                                    </div>
                                                    <div className="mvcast-item">
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>SL</h4>
                                                                <a href="#">Stan Lee</a>
                                                            </div>
                                                            <p>... (based on Marvel comics)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JK</h4>
                                                                <a href="#">Jack Kirby</a>
                                                            </div>
                                                            <p>... (based on Marvel comics)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JS</h4>
                                                                <a href="#">Joe Simon</a>
                                                            </div>
                                                            <p>... (character created by: Captain America)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JS</h4>
                                                                <a href="#">Joe Simon</a>
                                                            </div>
                                                            <p>... (character created by: Thanos)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>RT</h4>
                                                                <a href="#">Roy Thomas</a>
                                                            </div>
                                                            <p>... (character created by: Ultron, Vision)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JB</h4>
                                                                <a href="#">John Buscema</a>
                                                            </div>
                                                            <p>... (character created by: Ultron, Vision)</p>
                                                        </div>
                                                    </div>

                                                    <div className="title-hd-sm">
                                                        <h4>Cast</h4>
                                                    </div>
                                                    <div className="mvcast-item">
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast1.jpg" alt="" />
                                                                <a href="#">Robert Downey Jr.</a>
                                                            </div>
                                                            <p>... Robert Downey Jr.</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast2.jpg" alt="" />
                                                                <a href="#">Chris Hemsworth</a>
                                                            </div>
                                                            <p>... Thor</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast3.jpg" alt="" />
                                                                <a href="#">Mark Ruffalo</a>
                                                            </div>
                                                            <p>... Bruce Banner/ Hulk</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast4.jpg" alt="" />
                                                                <a href="#">Chris Evans</a>
                                                            </div>
                                                            <p>... Steve Rogers/ Captain America</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast5.jpg" alt="" />
                                                                <a href="#">Scarlett Johansson</a>
                                                            </div>
                                                            <p>... Natasha Romanoff/ Black Widow</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast6.jpg" alt="" />
                                                                <a href="#">Jeremy Renner</a>
                                                            </div>
                                                            <p>... Clint Barton/ Hawkeye</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast7.jpg" alt="" />
                                                                <a href="#">James Spader</a>
                                                            </div>
                                                            <p>... Ultron</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <img src="images/uploads/cast9.jpg" alt="" />
                                                                <a href="#">Don Cheadle</a>
                                                            </div>
                                                            <p>... James Rhodes/ War Machine</p>
                                                        </div>
                                                    </div>

                                                    <div className="title-hd-sm">
                                                        <h4>Produced by</h4>
                                                    </div>
                                                    <div className="mvcast-item">
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>VA</h4>
                                                                <a href="#">Victoria Alonso</a>
                                                            </div>
                                                            <p>... executive producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>MB</h4>
                                                                <a href="#">Mitchel Bell</a>
                                                            </div>
                                                            <p>... co-producer (as Mitch Bell)</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JC</h4>
                                                                <a href="#">Jamie Christopher</a>
                                                            </div>
                                                            <p>... associate producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>LD</h4>
                                                                <a href="#">Louis D’Esposito</a>
                                                            </div>
                                                            <p>... executive producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JF</h4>
                                                                <a href="#">Jon Favreau</a>
                                                            </div>
                                                            <p>... executive producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>KF</h4>
                                                                <a href="#">Kevin Feige</a>
                                                            </div>
                                                            <p>... producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>AF</h4>
                                                                <a href="#">Alan Fine</a>
                                                            </div>
                                                            <p>... executive producer</p>
                                                        </div>
                                                        <div className="cast-it">
                                                            <div className="cast-left">
                                                                <h4>JF</h4>
                                                                <a href="#">Jeffrey Ford</a>
                                                            </div>
                                                            <p>... associate producer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="media" className="tab">
                                                <div className="row">
                                                    <div className="rv-hd">
                                                        <div>
                                                            <h3>Videos & Photos of</h3>
                                                            <h2>Skyfall: Quantum of Spectre</h2>
                                                        </div>
                                                    </div>
                                                    <div className="title-hd-sm">
                                                        <h4>Photos <span> ({images.backdrops.length})</span></h4>
                                                    </div>
                                                    <div className="mvsingle-item">
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image11.jpg"><img
                                                                src="images/uploads/image1.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image21.jpg"><img
                                                                src="images/uploads/image2.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image31.jpg"><img
                                                                src="images/uploads/image3.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image41.jpg"><img
                                                                src="images/uploads/image4.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image51.jpg"><img
                                                                src="images/uploads/image5.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image61.jpg"><img
                                                                src="images/uploads/image6.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image71.jpg"><img
                                                                src="images/uploads/image7.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image81.jpg"><img
                                                                src="images/uploads/image8.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image91.jpg"><img
                                                                src="images/uploads/image9.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image101.jpg"><img
                                                                src="images/uploads/image10.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image111.jpg"><img
                                                                src="images/uploads/image1-1.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image121.jpg"><img
                                                                src="images/uploads/image12.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image131.jpg"><img
                                                                src="images/uploads/image13.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image141.jpg"><img
                                                                src="images/uploads/image14.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image151.jpg"><img
                                                                src="images/uploads/image15.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image161.jpg"><img
                                                                src="images/uploads/image16.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image171.jpg"><img
                                                                src="images/uploads/image17.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image181.jpg"><img
                                                                src="images/uploads/image18.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image191.jpg"><img
                                                                src="images/uploads/image19.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image201.jpg"><img
                                                                src="images/uploads/image20.jpg" alt="" /></a>
                                                        <a className="img-lightbox" data-fancybox-group="gallery"
                                                            href="images/uploads/image211.jpg"><img
                                                                src="images/uploads/image2-1.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <RecommendationComponent recommendation={recommendation} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviePage;

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
    const id = resolvedUrl.split("/")[2]
    let movie
    try {
        movie = await getStream("movies", id)

    } catch (e) {
        movie = ""
        console.error(e)
    }

    return {
        props: {
            id,
            movie: movie?.data?.data,
            recommendation: movie?.data?.recommended_movies,
            cast: movie?.data?.cast,
            images: movie?.data?.images,
            last_review: movie?.data?.last_review,
            review_count: movie?.data?.review_count,
            trailer: movie?.data?.trailer || null
        }
    }
}