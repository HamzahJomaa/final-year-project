import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {useRouter} from "next/router"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

import { to_slug } from "../helpers/contenthelper"



const GenreComponent = ({title,items}) =>{
  let router = useRouter()

  const handleClick = (stream,id,title) =>{
    router.push(`${stream}/${id}/${to_slug(title)}`)
  }

    return(
    <div style={{textAlign:"center"}}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="cards-swiper"
      >
        
          {items?.length > 0 && items.map(item=>(<SwiperSlide onClick={()=>{handleClick("movie",item.tmdb,item.title)}} style={{background:`url('https://image.tmdb.org/t/p/w342/${item?.poster_path}')`}}></SwiperSlide>))}
      </Swiper>
      <h4 style={{color:"white"}} >{title}</h4>
    </div>
    )
}

export default GenreComponent