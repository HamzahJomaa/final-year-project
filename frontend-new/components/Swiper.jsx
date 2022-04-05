import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperComponent = ({slidePerView,spaceBetween,items}) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidePerView}
        >
            {items.length > 0 ?
                items.map(item=>(
                    <SwiperSlide>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="#"><img src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} alt="" width="285" height="437"/></a>
                            </div>
                            <div className="title-in">
                                {/*<div className="cate text-nowrap">*/}
                                {/*    {item.genres.map(element=>(<span className="blue">{element}<a href="#"></a></span>))}*/}
                                {/*</div>*/}
                                <h6><a href="#">{item.title}</a></h6>
                                <p><i className="ion-android-star"></i><span>{item.vote_average}</span> /5</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                : "No Items To Render"}
        </Swiper>
    );
};

export default SwiperComponent;