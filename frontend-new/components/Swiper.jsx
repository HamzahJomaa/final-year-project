import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImageComponent from "../helpers/ImageComponent";
import {to_slug} from "../helpers/contenthelper";

const SwiperComponent = ({slidePerView,spaceBetween,items,type}) => {
    console.log(items)
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
            }}
            className="movie_carousel"
        >
            {items?.length > 0 ?
                items?.map(item=>(
                    <SwiperSlide>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href={`${type}/${item?.tmdb}/${to_slug(item?.title)}`}>
                                    <ImageComponent src={`https://image.tmdb.org/t/p/w342/${item?.poster_path}`} alt="I'm a lazy image"
                                                    width="500"
                                                    loading={"eager"}
                                                    height="700"
                                                    placeholder="blur" blurDataURL="/images/owl.video.play.png"  />
                                </a>
                            </div>
                            <div className="title-in">
                                <h6><a href={`${type}/${item?.tmdb}/${to_slug(item?.title)}`}>{item.title}</a></h6>
                                <p><i className="ion-android-star"></i><span>{item.vote_average.toFixed(0)}</span> /5</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                : "No Items To Render"}
        </Swiper>
    );
};

export default SwiperComponent;