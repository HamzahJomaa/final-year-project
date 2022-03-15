import React, {useEffect, useState} from "react";

import styles from '../styles/Home.module.css'
import {GetHomePage} from "../api/Main"



export default function Home() {

  const [movies,setMovies] = useState({})

  useEffect(async ()=>{
    try {
      let data = await GetHomePage()
      setMovies(data?.data?.data)
      console.log(data.data.data)
    }catch (e) {
      console.error(e)
    }
  },[])

  return (
    <div className={styles.container}>

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
                <img src="assets/images/logo.svg" alt="logo" width="150" className="logo"/>
                  <img src="assets/images/logo-white.svg" alt="white logo" width="150" className="logo-white" />
              </a>

              <button id="mobile-nav-toggler" className="hamburger hamburger--collapse" type="button">
                       <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                       </span>
              </button>


              <div className="navbar-collapse" id="main-nav">


                <ul className="navbar-nav mx-auto" id="main-menu">

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Home</a>


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
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Pages</a>

                    <ul className="dropdown-menu">

                      <li>
                        <a className="dropdown-item" href="404.html">404 Page</a>
                      </li>


                      <li className="divider" role="separator"></li>


                      <li>
                        <a className="dropdown-item" href="celebrities-list.html">celebrities list</a>
                      </li>


                      <li>
                        <a className="dropdown-item" href="celebrities-grid.html">celebrities grid</a>
                      </li>


                      <li>
                        <a className="dropdown-item" href="celebrity-detail.html">celebrity detail</a>
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
                        <a className="dropdown-item" href="login-register.html">Login - Register</a>
                      </li>


                      <li>
                        <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                      </li>
                    </ul>
                  </li>


                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Movies & TV Shows</a>

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
                        <a className="dropdown-item" href="movie-detail2.html">Movie Detail 2</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="watch-later.html">Watch Later</a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Blog</a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="blog-list.html">Blog List</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="blog-list-fullwidth.html">Blog List Fullwidth</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="blog-post-detail.html">Blog Detail</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="blog-post-detail-fullwidth.html">Blog Detail Fullwidth</a>
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
                    <a href="#login-register-popup" className="btn btn-main btn-effect login-btn popup-with-zoom-anim">
                      <i className="icon-user"></i>login
                    </a>
                  </li>
                </ul>

              </div>
            </nav>

          </div>
        </header>


        <section id="slider" className="full-slider">
          <div className="rev-slider-wrapper fullscreen-container overlay-gradient">
            <div id="fullscreen-slider" className="rev_slider fullscreenbanner" style={{display:"none"}}
                 data-version="5.4.1">
              <ul>

                <li data-transition="fade">
                  <img src="assets/images/slider/slider1.jpg"
                       alt="Image"
                       title="slider-bg"
                       data-bgposition="center center"
                       data-bgfit="cover"
                       data-bgrepeat="no-repeat"
                       data-bgparallax="10"
                       className="rev-slidebg"
                       data-no-retina="" />
                    <div className="tp-caption tp-resizeme"
                         data-x="center"
                         data-hoffset=""
                         data-y="middle"
                         data-voffset="['-30','-30','-30','-30']"
                         data-responsive_offset="on"
                         data-fontsize="['60','50','40','30']"
                         data-lineheight="['60','50','40','30']"
                         data-whitespace="nowrap"
                         data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         style={{zIndex:"5",color:"#fff",fontWeight:900}}>START STREAMING NOW
                    </div>
                </li>

                <li data-transition="fade"
                    data-slotamount="7"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="2000">

                  <img src="assets/images/slider/slider2.jpg"
                       alt="Image"
                       title="slider-bg"
                       data-bgposition="center top"
                       data-bgfit="cover"
                       data-bgrepeat="no-repeat"
                       data-bgparallax="10"
                       className="rev-slidebg"
                       data-no-retina=""/>

                    <div className="tp-caption tp-resizeme"
                         data-x="center"
                         data-hoffset=""
                         data-y="middle"
                         data-voffset="['-30','-30','-30','-30']"
                         data-responsive_offset="on"
                         data-fontsize="['60','50','40','30']"
                         data-lineheight="['60','50','40','30']"
                         data-whitespace="nowrap"
                         data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         style={{zIndex:"5",color:"#fff",fontWeight:900}}>ULTRA HD RESOLUTION

                    </div>
                </li>

                <li data-transition="fade"
                    data-slotamount="7"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="2000">
                  <img src="assets/images/slider/slider3.jpg"
                       alt="Image"
                       data-bgposition="center top"
                       data-bgfit="cover"
                       data-bgrepeat="no-repeat"
                       data-bgparallax="3"
                       className="rev-slidebg"
                       data-no-retina/>
                    <div className="tp-caption tp-resizeme"
                         data-x="center"
                         data-hoffset=""
                         data-y="middle"
                         data-voffset="['-30','-30','-30','-30']"
                         data-responsive_offset="on"
                         data-fontsize="['60','50','40','30']"
                         data-lineheight="['60','50','40','30']"
                         data-whitespace="nowrap"
                         data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         style={{zIndex:"5",color:"#fff",fontWeight:900}}>LATEST MOVIES & SERIES
                    </div>
                </li>

              </ul>
            </div>
          </div>


          <div className="search-form-wrapper search-form-rev">
            <div className="container">

              <form id="search-form-1">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-sm-10 col-12">
                    <div className="form-group">
                      <input name="search-keyword" type="text" id="search-keyword" value="" className="form-control"
                             placeholder="Enter Movies or Series Title"/>
                        <button type="submit" className="btn btn-main btn-effect"><i className="fa fa-search"></i>
                        </button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>


        <section className="latest-movies ptb100">
          <div className="container">

            <div className="row">
              <div className="col-md-8">
                <h2 className="title">Latest Movies</h2>
              </div>


              <div className="col-md-4 align-self-center text-right">
                <a href="#" className="btn btn-icon btn-main btn-effect">
                  view all
                  <i className="ti-angle-double-right"></i>
                </a>
              </div>
            </div>


            <div className="owl-carousel latest-movies-slider mt20">

              {movies.length > 0 ? movies.map(element=>{
                return(
                    <div className="item">
                      <div className="movie-box-1">

                        <div className="poster">
                          <img src="assets/images/posters/poster-1.jpg" alt=""/>
                        </div>

                        <div className="buttons">
                          <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                            <i className="fa fa-play"></i>
                          </a>
                        </div>

                        <div className="movie-details">
                          <h4 className="movie-title">
                            <a href="movie-detail.html">Star Wars</a>
                          </h4>
                          <span className="released">14 Dec 2017</span>
                        </div>

                        <div className="stars">
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                          <span>7.5 / 10</span>
                        </div>

                      </div>
                    </div>
                )
              }):""}
            </div>


          </div>
        </section>


        <section className="upcoming-movies parallax ptb100"
                 data-background="assets/images/posters/movie-collection.jpg" data-color="#3e4555"
                 data-color-opacity="0.95">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title text-white">Upcoming Movies & TV Shows</h2>
              </div>
            </div>


            <div className="row mt50">

              <div className="col-md-8">

                <div className="movie-box-1 upcoming-featured-item">

                  <div className="poster">
                    <img src="assets/images/movies/upcoming-featured-item.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Tomb Raider</a>
                    </h4>
                    <span className="released">Release Date: 15 Mar 2018</span>
                  </div>
                </div>

              </div>


              <div className="col-md-4">

                <div className="movie-box-1 upcoming-item">

                  <div className="poster">
                    <img src="assets/images/movies/upcoming-item-1.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Jungle</a>
                    </h4>
                  </div>

                </div>

                <div className="movie-box-1 upcoming-item mt20">

                  <div className="poster">
                    <img src="assets/images/movies/upcoming-item-2.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Fast and Furious</a>
                    </h4>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        <section className="latest-tvshows ptb100">
          <div className="container">

            <div className="row">
              <div className="col-md-8 col-sm-12">
                <h2 className="title">Latest TV Shows</h2>
              </div>


              <div className="col-md-4 col-sm-12 align-self-center text-right">
                <a href="#" className="btn btn-icon btn-main btn-effect">
                  view all
                  <i className="ti-angle-double-right"></i>
                </a>
              </div>
            </div>


            <div className="owl-carousel latest-tvshows-slider mt20">

              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-5.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Daredevil</a>
                    </h4>
                    <span className="released">19 Apr 2015</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>8.7 / 10</span>
                  </div>

                </div>
              </div>


              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-6.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Stranger Things</a>
                    </h4>
                    <span className="released">15 Jul 2016</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>9 / 10</span>
                  </div>

                </div>
              </div>


              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-7.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Luke Cage</a>
                    </h4>
                    <span className="released">30 Sep 2016</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.6 / 10</span>
                  </div>

                </div>
              </div>


              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-8.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Flash</a>
                    </h4>
                    <span className="released">7 Oct 2014</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>8 / 10</span>
                  </div>

                </div>
              </div>


              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-5.jpg" alt="" />
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Daredevil</a>
                    </h4>
                    <span className="released">19 Apr 2015</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>8.7 / 10</span>
                  </div>

                </div>
              </div>


              <div className="item">
                <div className="movie-box-1">

                  <div className="poster">
                    <img src="assets/images/posters/poster-6.jpg" alt=""/>
                  </div>

                  <div className="buttons">
                    <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Stranger Things</a>
                    </h4>
                    <span className="released">15 Jul 2016</span>
                  </div>

                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>9 / 10</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        <section className="how-it-works bg-light ptb100">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">How it works?</h2>
                <h6 className="subtitle">We will show you step by step how to start watching your favorite movies & tv
                  shows starting now!</h6>
              </div>
            </div>

            <div className="timeline">

              <span className="main-line"></span>

              <div className="timeline-step row">
                <span className="timeline-step-btn">Step 1</span>

                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text">
                    <h3>Create an account</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/signup.png" alt=""/>
                  </div>
                </div>

              </div>


              <div className="timeline-step row">
                <span className="timeline-step-btn" style={{color: "#2a7bc2", background:"#c1ddf5"}}>Step 2</span>

                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/pricing.png" alt=""/>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text-right">
                    <h3>Choose your Plan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>

              </div>


              <div className="timeline-step row">
                <span className="timeline-step-btn" style={{color: "#eb305f", background:"#f9c8d4"}}>Step 3</span>

                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text">
                    <h3>Enjoy Movify</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/enjoy-movify.png" alt=""/>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        <section className="counter bg-main-gradient ptb50 text-center">
          <div className="container">
            <div className="row">

              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="964">0</span>
                <h4>Movies</h4>
              </div>

              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="743">0</span>
                <h4>TV Shows</h4>
              </div>

              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="1207">0</span>
                <h4>Users</h4>
              </div>

            </div>
          </div>
        </section>


        <section className="become-premium ptb100">
          <div className="container">
            <div className="row">


              <div className="col-md-5 col-sm-12 mb50">
                <h3 className="title">Become a Premium Member</h3>
                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis.</h6>
              </div>


              <div className="col-md-7 col-sm-12">

                <div className="pricing-table-1">

                  <div className="features-holder">
                    <div className="features-title">
                      <h5>What You Get</h5>
                    </div>

                    <div className="features-list-wrapper">
                      <ul className="features-list">

                        <li>
                          <h6>HD available</h6>
                        </li>

                        <li>
                          <h6>Ultra HD available</h6>
                        </li>

                        <li>
                          <h6>Unlimited Movies and TV shows</h6>
                        </li>

                        <li>
                          <h6>Watch on your phone & tablet</h6>
                        </li>

                        <li>
                          <h6>Download and watch offline</h6>
                        </li>

                        <li>
                          <h6>Screens you can watch</h6>
                        </li>

                        <li>
                          <h6>First Month Free</h6>
                        </li>
                      </ul>
                    </div>

                  </div>


                  <div className="price-table price-table-featured">

                    <div className="table-header">
                      <h5>Premium</h5>
                    </div>

                    <div className="table-content">
                      <ul>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-check"></i></li>
                        <li>5</li>
                        <li><i className="fa fa-check"></i></li>
                      </ul>
                    </div>

                    <div className="table-footer">
                      <div className="price-holder">
                        <span className="currency">$</span>
                        <span className="price">19.99</span>
                        <span className="time">/ mon</span>
                      </div>
                      <a href="#" target="_self" className="btn btn-main btn-effect"><i
                          className="fa fa-shopping-cart"></i></a>
                    </div>

                  </div>


                  <div className="price-table">

                    <div className="table-header">
                      <h5>Basic</h5>
                    </div>

                    <div className="table-content">
                      <ul>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-times"></i></li>
                        <li><i className="fa fa-check"></i></li>
                        <li><i className="fa fa-times"></i></li>
                        <li><i className="fa fa-times"></i></li>
                        <li>1</li>
                        <li><i className="fa fa-check"></i></li>
                      </ul>
                    </div>

                    <div className="table-footer">
                      <div className="price-holder">
                        <span className="currency">$</span>
                        <span className="price">9.99</span>
                        <span className="time">/ mon</span>
                      </div>
                      <a href="#" target="_self" className="btn btn-main btn-effect"><i
                          className="fa fa-shopping-cart"></i></a>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        <section className="blog bg-light ptb100">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Latest News</h2>
                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  consectetuer adipiscing.</h6>
              </div>
            </div>


            <div className="row mt50">

              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">

                  <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                    <div className="bloglist-post-thumbnail"
                         style={{background: "url('assets/images/blog/bloglist-1.jpg')"}}></div>
                  </a>

                  <div className="bloglist-text-wrapper">
                                <span className="circle-img bloglist-avatar">
                                    <img src="assets/images/user.png" width="50" height="50" alt="author img"/>
                                </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Top 10 Action Movies</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                      <a href="#" className="btn btn-main btn-effect">read more</a>
                    </div>
                  </div>

                </div>
              </div>


              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">

                  <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                    <div className="bloglist-post-thumbnail"
                         style={{background:" url('assets/images/blog/bloglist-2.jpg')"}}></div>
                  </a>

                  <div className="bloglist-text-wrapper">
                                <span className="circle-img bloglist-avatar">
                                    <img src="assets/images/user.png" width="50" height="50" alt="author img"/>
                                </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Oscar Awards</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                      <a href="#" className="btn btn-main btn-effect">read more</a>
                    </div>
                  </div>

                </div>
              </div>


              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">

                  <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                    <div className="bloglist-post-thumbnail"
                         style={{background: "url('assets/images/blog/bloglist-3.jpg')"}}></div>
                  </a>

                  <div className="bloglist-text-wrapper">
                                <span className="circle-img bloglist-avatar">
                                    <img src="assets/images/user.png" width="50" height="50" alt="author img"/>
                                </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Top Upcoming Movies</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                      <a href="#" className="btn btn-main btn-effect">read more</a>
                    </div>
                  </div>

                </div>
              </div>


            </div>

          </div>
        </section>


        <section className="subscribe bg-light2 ptb100">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Join Movify Now!</h2>
                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  consectetuer adipiscing.</h6>
              </div>
            </div>


            <div className="row justify-content-center">
              <div className="col-md-7 col-sm-10 col-12">

                <form action="#" className="mailchimp mt50" noValidate>

                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" name="EMAIL" className="form-control" id="mc-email" placeholder="Your Email"
                             autoComplete="off"/>
                        <label htmlFor="mc-email"></label>
                        <button type="submit" className="btn btn-main btn-effect">Subscribe</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>


          </div>
        </section>


        <footer className="footer1 bg-dark">

          <div className="footer-widget-area ptb100">
            <div className="container">
              <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="widget widget-about">

                    <img src="assets/images/logo.svg" alt="logo" className="logo" />
                      <img src="assets/images/logo-white.svg" alt="white logo" className="logo-white"/>
                        <p className="nomargin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                          ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt
                          earum accusantium et fugit.</p>
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

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.</p>

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

                    <div className="copyright ml-auto">All Rights Reserved by <a href="#">Movify</a>.</div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>

      </div>

      <div className="general-search-wrapper">
        <form className="general-search" role="search" method="get" action="#">
          <input type="text" placeholder="Type and hit enter..." />
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
                <input name="movify_user_login" id="movify_user_login" className="form-control" type="text"/>
              </div>

              <div className="form-group">
                <label htmlFor="movify_user_email">Email</label>
                <input name="movify_user_email" id="movify_user_email" className="form-control" type="email"/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="movify_user_pass" id="movify_password" className="form-control" type="password"/>
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


          <div className="forgetpassword-wrapper">
            <div className="small-dialog-headline">
              <h4 className="text-center">Forgotten Password</h4>
            </div>

            <div className="small-dialog-content">

              <form readonly id="forget_pass_form" action="#" method="post">
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


          <div id="backtotop">
            <a href="#"></a>
          </div>

        </div>
      </div>
    </div>
  )
}