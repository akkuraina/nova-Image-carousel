// src/components/CarouselSwiper.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const CarouselSwiper = () => {
    return (
        <div className="swiper-container"> {/* Add a container with a class */}
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+1" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+2" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+3" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+4" alt="Slide 4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSwiper;
