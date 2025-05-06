import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Optional modules
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const MySwiper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
        >
            {[...Array(1)].map((_, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={`https://i.ibb.co.com/LDrLn8kh/markus-winkler-Gdp-DAj8un-B4-unsplash.jpg,${i},`}
                        alt={`Slide ${i}`}
                        className="rounded-xl shadow-lg h-[500px] w-full"
                    />

                </SwiperSlide>

            ))}

            {[...Array(1)].map((_, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={`https://i.ibb.co.com/GQpG892Q/smart-speaker-house-control-innovative-technology.jpg, ${i},`}
                        alt={`Slide ${i}`}
                        className="rounded-xl shadow-lg h-[500px] w-full"
                    />

                </SwiperSlide>

            ))}

            {[...Array(1)].map((_, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={`https://i.ibb.co.com/N2mVTq7h/alicia-christin-gerald-ogo6exj6n-SE-unsplash.jpg,${i},`}
                        alt={`Slide ${i}`}
                        className="rounded-xl shadow-lg h-[500px] w-full"
                    />

                </SwiperSlide>

            ))}
        </Swiper>

    );
};

export default MySwiper;