import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carosel = () => {
    return (
        <div className="mb-3 mt-3 rounded-md">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img className="w-full h-[70vh]" src="https://th.bing.com/th/id/R.f6699aab0050da7a7abcb82f2a4f2f60?rik=k6re4AcotEP4Vg&riu=http%3a%2f%2fblogs.acu.edu%2f1410_PSYC49301%2ffiles%2f2013%2f10%2fbeauty-nature-here-free-free.jpg&ehk=VZWl5jqLmT3L9qTve1xvbqwN6C0JML4V5ZyXtRa5a%2bE%3d&risl=&pid=ImgRaw&r=0" alt="" />                    
                </SwiperSlide>
                <SwiperSlide className="w-full h-[70vh]">
                <img className="w-full h-[70vh]" src="https://th.bing.com/th/id/R.f6699aab0050da7a7abcb82f2a4f2f60?rik=k6re4AcotEP4Vg&riu=http%3a%2f%2fblogs.acu.edu%2f1410_PSYC49301%2ffiles%2f2013%2f10%2fbeauty-nature-here-free-free.jpg&ehk=VZWl5jqLmT3L9qTve1xvbqwN6C0JML4V5ZyXtRa5a%2bE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-full h-[70vh]">
                <img className="w-full h-[70vh]" src="https://th.bing.com/th/id/R.f6699aab0050da7a7abcb82f2a4f2f60?rik=k6re4AcotEP4Vg&riu=http%3a%2f%2fblogs.acu.edu%2f1410_PSYC49301%2ffiles%2f2013%2f10%2fbeauty-nature-here-free-free.jpg&ehk=VZWl5jqLmT3L9qTve1xvbqwN6C0JML4V5ZyXtRa5a%2bE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </SwiperSlide>                
            </Swiper>
        </div>
    );
};

export default Carosel;