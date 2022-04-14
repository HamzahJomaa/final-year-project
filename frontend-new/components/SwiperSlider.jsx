import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';
import {BeautifyShortDate, to_slug} from "../helpers/contenthelper";


const SwiperSlider = ({items}) => {
    return (
        <div className="container">
            <div className="row">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={"slider-single-item"}
                >
                    {items?.length > 0 ?
                        items?.map((item,index)=>(
                            <SwiperSlide key={index} className={"movie-item"} >
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <div className="title-in">
                                            <div className="cate">
                                                {item.genres.map((genre,index)=> (<span key={`genre${index}`} className="blue"><a href="#">{genre}</a></span>) )}
                                            </div>
                                            <h1><a href="#">{item.title}<span>{(new Date(item.date)).getFullYear()}</span></a></h1>
                                            <div className="social-btn">
                                                <a href="#" className="parent-btn"><i className="ion-play"></i> Watch
                                                    Trailer</a>
                                                <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to
                                                    Favorite</a>
                                                <div className="hover-bnt">
                                                    <a href="#" className="parent-btn"><i
                                                        className="ion-android-share-alt"></i>share</a>
                                                    <div className="hvr-item">
                                                        <a href="#" className="hvr-grow"><i
                                                            className="ion-social-facebook"></i></a>
                                                        <a href="#" className="hvr-grow"><i
                                                            className="ion-social-twitter"></i></a>
                                                        <a href="#" className="hvr-grow"><i
                                                            className="ion-social-googleplus"></i></a>
                                                        <a href="#" className="hvr-grow"><i
                                                            className="ion-social-youtube"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mv-details">
                                                <p><i className="ion-android-star"></i><span>{item.vote_average}</span> /5</p>
                                                <ul className="mv-infor">
                                                    <li> Run Time: 2h21’</li>
                                                    <li> Rated: PG-13</li>
                                                    <li> Release: {BeautifyShortDate(item?.date)}</li>
                                                </ul>
                                            </div>
                                            <div className="btn-transform transform-vertical">
                                                <div><a href={`movie/${item?.tmdb}/${to_slug(item?.title)}`} className="item item-1 redbtn">more detail</a></div>
                                                <div><a href={`movie/${item?.tmdb}/${to_slug(item?.title)}`} className="item item-2 redbtn hvrbtn">more detail</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <div className="mv-img-2">
                                            <a href={`movie/${item?.tmdb}/${to_slug(item?.title)}`}><img src={`https://image.tmdb.org/t/p/w342/${item?.poster_path}`} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        : "No Items To Render"}
                </Swiper>
            </div>
        </div>

    );
};

export default SwiperSlider;