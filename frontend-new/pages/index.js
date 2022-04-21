
import styles from '../styles/Home.module.css'
import {GetHomePage, GetPersonalizedHomePage} from "../api/Main";


import SectionComponent from "../components/SectionComponent"
import Loader from "../components/Loader";
import SwiperSlider from "../components/SwiperSlider";

import React, {useState,useEffect} from "react";



export default function Home() {
    let userId,token

    if (typeof window !== "undefined") {
        userId = localStorage.getItem("id")
        token = localStorage.getItem("token")

    }


    const [top_rated,setTopRated] = useState([])
    const [top_reviewed,setTopReviews] = useState([])
    const [latest,setLatest] = useState([])

    const [top_rated_series,setTopRatedSeries] = useState([])
    const [top_reviewed_series,setTopReviewedSeries] = useState([])

    const [personalizedGenre,setPersonalizedGenre] = useState([])
    const [previous_reviews_movies,setPreviousReviewsMovies] = useState([])
    const [previous_reviews_series,setPreviousReviewSeries] = useState([])

    const [loading,setLoading] = useState(false)

    useEffect(async ()=>{
        setLoading(true)
        try {
            let personalized = userId && await GetPersonalizedHomePage({userId})
            let data = await GetHomePage()
            setLatest(data?.data?.data?.movies?.latest_movies)
            setTopRated(data?.data?.data?.movies?.top_rated_movies)
            setTopReviews(data?.data?.data?.movies?.top_review_movies)
            setTopRatedSeries(data?.data?.data?.series?.top_rated_series)
            setTopReviewedSeries(data?.data?.data?.series?.top_reviewed_series)
            if (userId){
                console.log(personalized)
                setPersonalizedGenre(personalized?.data?.statusMessage?.genre_movies)
                setPreviousReviewsMovies(personalized?.data?.statusMessage?.movies_on_recent_reviews)
                setPreviousReviewSeries(personalized?.data?.statusMessage?.series_on_recent_reviews)
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
                                <SectionComponent title={"Movies"} titles={["Top Rated","Top Reviewed"]} data={[{type:"movie",data:top_rated}, {type:"movie", data:top_reviewed}]} />
                                <SectionComponent title={"Series"} titles={["Top Rated","Top Reviewed"]} data={[{type:"series",data:top_rated_series},{type:"series",data:top_reviewed_series}]} />
                                {personalizedGenre && <SectionComponent title={"Genres"} titles={["Genres"]} data={[{type:"movie",data:personalizedGenre}]} />}
                                {previous_reviews_movies && <SectionComponent title={"Base on Previous Reviews"} titles={["Movies","Series"]} data={[{type:"movie",data:previous_reviews_movies},{type:"series",data:previous_reviews_series}]} />}
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
                            <div className="col-md-12">
                                <div className="title-hd">
                                    <h2>in theater</h2>
                                    <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                                </div>
                                <div className="videos">
                                    <div className="slider-for-2 video-ft">
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"></iframe>
                                        </div>
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/w0qQkSuWOS8"></iframe>
                                        </div>
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/44LdLqgOpjo"></iframe>
                                        </div>
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/gbug3zTm3Ws"></iframe>
                                        </div>
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"></iframe>
                                        </div>
                                        <div>
                                            <iframe className="item-video" src=""
                                                    data-src="https://www.youtube.com/embed/NxhEZG0k9_w"></iframe>
                                        </div>


                                    </div>
                                    <div className="slider-nav-2 thumb-ft">
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer7.jpg" alt="photo by Barn Images" width="4096"
                                                     height="2737"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Wonder Woman</h4>
                                                <p>2:30</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer2.jpg" alt="photo by Barn Images" width="350"
                                                     height="200"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Oblivion: Official Teaser Trailer</h4>
                                                <p>2:37</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer6.jpg" alt="photo by Joshua Earle"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Exclusive Interview: Skull Island</h4>
                                                <p>2:44</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer3.png" alt="photo by Alexander Dimitrov"
                                                     width="100" height="56"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Logan: Director James Mangold Interview</h4>
                                                <p>2:43</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer4.png" alt="photo by Wojciech Szaturski"
                                                     width="100" height="56"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Beauty and the Beast: Official Teaser Trailer 2</h4>
                                                <p>2: 32</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="trailer-img">
                                                <img src="images/uploads/trailer5.jpg" alt="photo by Wojciech Szaturski"
                                                     width="360" height="189"/>
                                            </div>
                                            <div className="trailer-infor">
                                                <h4 className="desc">Fast&Furious 8</h4>
                                                <p>3:11</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
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
