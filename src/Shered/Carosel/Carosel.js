import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../assest/image/slider img1.png'
import img1 from '../../assest/image/slider img2.png'
import img2 from '../../assest/image/slider img3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Carosel = () => {
    return (
        <div className="mb-3 mt-3 p-8 rounded-md max-w-[1100px] mx-auto">
            <Swiper
                spaceBetween={60}
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
                <SwiperSlide className="w-full h-[70vh]">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img alt="" src={img} className="lg:w-1/2" />
                            <div>
                                <h1 className="text-5xl font-bold">Sell Here And Buy Here!</h1>
                                <p className="py-6">sell old one and buy another one </p>
                                <button className="btn btn-primary"><Link to='login'>Just SignUp</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-[70vh]">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img alt="" src={img1} className="lg:w-1/2" />
                            <div>
                            <h1 className="text-5xl font-bold">Sell Here And Buy Here!</h1>
                                <p className="py-6">sell old one and buy another one </p>
                                <button className="btn btn-primary"><Link to='login'>Just SignUp</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-[70vh]">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img alt="" src={img2} className="lg:w-1/2 h-[300px]" />
                            <div>
                            <h1 className="text-5xl font-bold">Sell Here And Buy Here!</h1>
                                <p className="py-6">sell old one and buy another one </p>
                                <button className="btn btn-primary"><Link to='login'>Just SignUp</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carosel;