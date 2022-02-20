import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import imgMapLink from "../../assets/img/map_link.png";
import imgAbout from "../../assets/img/about_image.jpg";


import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'

const HomeCarousel = () => {
    return (
        <>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={imgMapLink} alt="map link"></img></SwiperSlide>
            <SwiperSlide><img src={imgAbout} alt="about link"></img></SwiperSlide>
        </Swiper>
        </>
    )
}

export default HomeCarousel;