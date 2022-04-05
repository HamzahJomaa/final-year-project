import React, {useEffect, useState} from "react"

import { useRouter } from 'next/router'
import {getStream} from "../../../api/Main";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Movie = (props) =>{
    const router = useRouter()
    const {title} = router.query
    const [movie,setMovie] = useState(props.movie.data)
    const [recommended,setRecommended] = useState(props.movie.recommended_movies)
    useEffect(async ()=>{

    },[])
    return (
        <>
            <div className="loading">
                <div className="loading-inner">
                    <div className="loading-effect">
                        <div className="object"></div>
                    </div>
                </div>
            </div>


            <nav id="main-mobile-nav"></nav>


            <div className="wrapper">


                <header className="header header-fixed header-transparent text-white">
                    <div className="container-fluid">


                        <nav className="navbar navbar-expand-lg">

                            <a className="navbar-brand" href="index-2.html">

                                <img src="/assets/images/logo.svg" alt="logo" width="150" className="logo"/>

                                <img src="/assets/images/logo-white.svg" alt="white logo" width="150"
                                     className="logo-white"/>
                            </a>

                            <button id="mobile-nav-toggler" className="hamburger hamburger--collapse" type="button">
                       <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                       </span>
                            </button>


                            <div className="navbar-collapse" id="main-nav">


                                <ul className="navbar-nav mx-auto" id="main-menu">

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Home</a>


                                        <ul className="dropdown-menu">

                                            <li>
                                                <a className="dropdown-item" href="index-2.html">Home Version 1</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="index2.html">Home Version 2</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="index3.html">Home Version 3</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="index4.html">Home Version 4</a>
                                            </li>

                                        </ul>
                                    </li>


                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Pages</a>


                                        <ul className="dropdown-menu">

                                            <li>
                                                <a className="dropdown-item" href="404.html">404 Page</a>
                                            </li>


                                            <li className="divider" role="separator"></li>


                                            <li>
                                                <a className="dropdown-item" href="celebrities-list.html">celebrities
                                                    list</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="celebrities-grid.html">celebrities
                                                    grid</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="celebrity-detail.html">celebrity
                                                    detail</a>
                                            </li>


                                            <li className="divider" role="separator"></li>


                                            <li>
                                                <a className="dropdown-item" href="contact-us.html">Contact us</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="coming-soon.html">Coming soon</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="pricing.html">Pricing Plan</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="login-register.html">Login -
                                                    Register</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Movies & TV Shows</a>


                                        <ul className="dropdown-menu">

                                            <li>
                                                <a className="dropdown-item" href="movie-list.html">Movie List 1</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-list2.html">Movie List 2</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-grid.html">Movie Grid 1</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-grid2.html">Movie Grid 2</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-grid3.html">Movie Grid 3</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-grid4.html">Movie Grid 4</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-detail.html">Movie Detail</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="movie-detail2.html">Movie Detail
                                                    2</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="watch-later.html">Watch Later</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Blog</a>


                                        <ul className="dropdown-menu">

                                            <li>
                                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="blog-list-fullwidth.html">Blog List
                                                    Fullwidth</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="blog-post-detail.html">Blog
                                                    Detail</a>
                                            </li>


                                            <li>
                                                <a className="dropdown-item" href="blog-post-detail-fullwidth.html">Blog
                                                    Detail Fullwidth</a>
                                            </li>

                                        </ul>
                                    </li>


                                    <li className="nav-item">
                                        <a className="nav-link" href="contact-us.html">Contact us</a>
                                    </li>

                                </ul>


                                <ul className="navbar-nav extra-nav">


                                    <li className="nav-item">
                                        <a className="nav-link toggle-search" href="#">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </li>


                                    <li className="nav-item notification-wrapper">
                                        <a className="nav-link notification" href="#">
                                            <i className="fa fa-globe"></i>
                                            <span className="notification-count">2</span>
                                        </a>
                                    </li>


                                    <li className="nav-item m-auto">
                                        <a href="#login-register-popup"
                                           className="btn btn-main btn-effect login-btn popup-with-zoom-anim">
                                            <i className="icon-user"></i>login
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </nav>


                    </div>
                </header>


                <section className="movie-detail-intro overlay-gradient ptb100"
                         style={{background:`url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`}}>
                </section>


                <section className="movie-detail-intro2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="movie-poster">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=""/>

                                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>


                                <div className="movie-details">
                                    <h3 className="title">{movie.title}</h3>

                                    <ul className="movie-subtext">
                                        <li>PG-13</li>
                                        <li>2h 32min</li>
                                        <li>{movie.genres.join(", ")}</li>
                                        <li>15 December 2017 (USA)</li>
                                    </ul>

                                    <a href="#" className="btn btn-main btn-effect">trailer</a>
                                    <a href="#" className="btn btn-main btn-effect">watch later</a>
                                    <a href="#" className="btn rate-movie"><i className="icon-heart"></i></a>

                                    <div className="rating mt10">
                                        <i className={movie.vote_average>1?"fa fa-star":"fa fa-star-o"}></i>
                                        <i className={movie.vote_average>2?"fa fa-star":"fa fa-star-o"}></i>
                                        <i className={movie.vote_average>3?"fa fa-star":"fa fa-star-o"}></i>
                                        <i className={movie.vote_average>4?"fa fa-star":"fa fa-star-o"}></i>
                                        <i className={movie.vote_average>5?"fa fa-star":"fa fa-star-o"}></i>
                                        <span>{movie.vote_count} Ratings</span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="movie-detail-main ptb100">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-8 col-sm-12">
                                <div className="inner pr50">


                                    <div className="storyline">
                                        <h3 className="title">Storyline</h3>

                                        <p>{movie.overview}</p>
                                    </div>


                                    <div className="movie-media mt50">
                                        <h3 className="title"> Photos & Videos</h3>

                                        <ul className="image-gallery isotope">
                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-1.jpg">
                                                    <img src="/assets/images/blog/bloglist-1.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-2.jpg">
                                                    <img src="/assets/images/blog/bloglist-2.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/other/home2-bg.jpg">
                                                    <img src="/assets/images/other/home2-bg.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-2.jpg">
                                                    <img src="/assets/images/blog/bloglist-2.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-1.jpg">
                                                    <img src="/assets/images/blog/bloglist-1.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-3.jpg">
                                                    <img src="/assets/images/blog/bloglist-3.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/blog/bloglist-1.jpg">
                                                    <img src="/assets/images/blog/bloglist-1.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/other/landscape.jpg">
                                                    <img src="/assets/images/other/landscape.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>

                                            <li className="element">
                                                <a href="/assets/images/other/home2-bg.jpg">
                                                    <img src="/assets/images/other/home2-bg.jpg"
                                                         className="img-responsive" alt=""/>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>


                            <div className="col-lg-4 col-sm-12">
                                <div className="sidebar">


                                    <aside className="widget widget-movie-details">
                                        <h3 className="title">Details</h3>

                                        <ul>
                                            <li><strong>Release date: </strong>December 15, 2017</li>
                                            <li><strong>Director: </strong><a href="#">Rian Johnson</a></li>
                                            <li><strong>Budget: </strong>200 million USD</li>
                                            <li><strong>Country: </strong>USA</li>
                                            <li><strong>Language: </strong>English</li>
                                            <li><strong>Production Co: </strong><a href="#">Lucasfilm</a></li>
                                        </ul>
                                    </aside>


                                    <aside className="widget widget-movie-cast">
                                        <h3 className="title">Cast</h3>

                                        <ul className="cast-wrapper">
                                            <li>
                                                <a href="celebrity-detail.html">
                                            <span className="circle-img">
                                                <img src="/assets/images/celebrities/celebrity1.jpg" alt=""/>
                                            </span>
                                                    <h6 className="name">Bryan Doe</h6>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="celebrity-detail.html">
                                            <span className="circle-img">
                                                <img src="/assets/images/celebrities/celebrity2.jpg" alt=""/>
                                            </span>
                                                    <h6 className="name">Baron Saul</h6>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="celebrity-detail.html">
                                            <span className="circle-img">
                                                <img src="/assets/images/celebrities/celebrity3.jpg" alt=""/>
                                            </span>
                                                    <h6 className="name">Ewan Actor</h6>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="celebrity-detail.html">
                                            <span className="circle-img">
                                                <img src="/assets/images/celebrities/celebrity4.jpg" alt=""/>
                                            </span>
                                                    <h6 className="name">Nicole Beet</h6>
                                                </a>
                                            </li>
                                        </ul>

                                        <a href="celebrities-list.html" className="btn btn-main btn-effect mt20">view
                                            all</a>

                                    </aside>


                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="recommended-movies bg-light ptb100">
                    <div className="container">


                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="title">People who liked this also liked...</h2>
                            </div>
                        </div>


                        <div className="mt20">

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {recommended.length > 0 ? recommended.map(element=>{
                                    return(
                                        <SwiperSlide>
                                            <div className="item">
                                                <div className="movie-box-1">

                                                    <div className="poster">
                                                        <img src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} alt=""/>
                                                    </div>

                                                    <div className="buttons">
                                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                                            <i className="fa fa-play"></i>
                                                        </a>
                                                    </div>

                                                    <div className="movie-details">
                                                        <h4 className="movie-title">
                                                            <a href={`/movies/${element.tmdb}/${element.title}`}>{element.title}</a>
                                                        </h4>
                                                        <span className="released">{element.release_date}</span>
                                                    </div>

                                                    <div className="stars">
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span>{element.vote_average} / 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }):""}
                            </Swiper>

                        </div>


                    </div>
                </section>


                <footer className="footer1 bg-dark">


                    <div className="footer-widget-area ptb100">
                        <div className="container">
                            <div className="row">


                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-about">


                                        <img src="/assets/images/logo.svg" alt="logo" className="logo"/>

                                        <img src="/assets/images/logo-white.svg" alt="white logo"
                                             className="logo-white"/>
                                        <p className="nomargin">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo
                                            dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-links">
                                        <h4 className="widget-title">Useful links</h4>

                                        <ul className="general-listing">
                                            <li><a href="#">about movify</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="#">forum</a></li>
                                            <li><a href="#">my account</a></li>
                                            <li><a href="#">watch list</a></li>
                                        </ul>

                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-blog">
                                        <h4 className="widget-title">latest news</h4>

                                        <ul className="blog-posts">
                                            <li><a href="#">blog post 1</a><small>januar 13, 2018</small></li>
                                            <li><a href="#">blog post 2</a><small>januar 13, 2018</small></li>
                                            <li><a href="#">blog post 3</a><small>januar 13, 2018</small></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-social">
                                        <h4 className="widget-title">follow us</h4>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus,
                                            atque.</p>


                                        <ul className="social-btns">

                                            <li>
                                                <a href="#" className="social-btn-roll facebook">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-facebook"></i>
                                                        <i className="social-btn-roll-icon fa fa-facebook"></i>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="social-btn-roll twitter">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-twitter"></i>
                                                        <i className="social-btn-roll-icon fa fa-twitter"></i>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="social-btn-roll google-plus">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                                        <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="social-btn-roll instagram">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-instagram"></i>
                                                        <i className="social-btn-roll-icon fa fa-instagram"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>


                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="footer-copyright-area ptb30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex">
                                        <div className="links">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><a href="#">Privacy & Cookies</a></li>
                                                <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
                                                <li className="list-inline-item"><a href="#">Legal Disclaimer</a></li>
                                                <li className="list-inline-item"><a href="#">Community</a></li>
                                            </ul>
                                        </div>

                                        <div className="copyright ml-auto">All Rights Reserved by <a href="#">Movify</a>.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>


            </div>


            <div className="general-search-wrapper">
                <form className="general-search" role="search" method="get" action="#">
                    <input type="text" placeholder="Type and hit enter..."/>
                    <span id="general-search-close" className="ti-close toggle-search"></span>
                </form>
            </div>


            <div id="login-register-popup" className="small-dialog zoom-anim-dialog mfp-hide">


                <div className="signin-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Sign in</h4>
                    </div>


                    <div className="small-dialog-content">


                        <form id="cariera_login" method="post">
                            <p className="status"></p>

                            <div className="form-group">
                                <label htmlFor="username">Username or Email *</label>
                                <input type="text" className="form-control" id="username" name="username"
                                       placeholder="Your Username or Email *"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input type="password" className="form-control" id="password" name="password"
                                       placeholder="Your Password *"/>
                            </div>

                            <div className="form-group">
                                <div className="checkbox pad-bottom-10">
                                    <input id="check1" type="checkbox" name="remember" value="yes"/>
                                    <label htmlFor="check1">Keep me signed in</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Sign in" className="btn btn-main btn-effect nomargin"/>
                            </div>
                        </form>


                        <div className="bottom-links">
                    <span>
                        Not a member?
                        <a className="signUpClick">Sign up</a>
                    </span>
                            <a className="forgetPasswordClick pull-right">Forgot Password</a>
                        </div>
                    </div>

                </div>


                <div className="signup-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Sign Up</h4>
                    </div>

                    <div className="small-dialog-content">


                        <form id="cariera_registration" action="#" method="POST">
                            <p className="status"></p>

                            <div className="form-group">
                                <label htmlFor="movify_user_login">Username</label>
                                <input name="movify_user_login" id="movify_user_login" className="form-control"
                                       type="text"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="movify_user_email">Email</label>
                                <input name="movify_user_email" id="movify_user_email" className="form-control"
                                       type="email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="movify_user_pass" id="movify_password" className="form-control"
                                       type="password"/>
                            </div>

                            <div className="form-group">
                                <input type="submit" className="btn btn-main btn-effect nomargin" value="Register"/>
                            </div>
                        </form>


                        <div className="bottom-links">
                    <span>
                        Already have an account?
                        <a className="signInClick">Sign in</a>
                    </span>

                            <a className="forgetPasswordClick pull-right">Forgot Password</a>
                        </div>

                    </div>

                </div>


                <div className="forgetpassword-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Forgotten Password</h4>
                    </div>

                    <div className="small-dialog-content">


                        <form id="forget_pass_form" action="#" method="post">
                            <p className="status"></p>

                            <div className="form-group">
                                <label htmlFor="password">Email Address *</label>
                                <input type="email" name="user_login" className="form-control" id="email3"
                                       placeholder="Email Address *"/>
                            </div>

                            <div className="form-group">
                                <input type="submit" name="submit" value="Get New Password"
                                       className="btn btn-main btn-effect nomargin"/>
                            </div>
                        </form>


                        <div className="bottom-links">
                            <a className="cancelClick">Cancel</a>
                        </div>

                    </div>

                </div>


            </div>


            <div id="backtotop">
                <a href="#"></a>
            </div>


        </>
    )
}


export default Movie



export const getServerSideProps = async ({req, res, resolvedUrl}) => {
    const id = resolvedUrl.split("/")[2]
    let movie
    try{
        movie = await getStream("movie",id)
    }catch (e) {
        movie = ""
        console.error(e)
    }

    return{
        props: {
            id,
            movie: movie.data
        }
    }
}
