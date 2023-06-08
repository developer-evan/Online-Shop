import React, { useRef, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="h-120 mb-48"
        autoplay={{
          delay: 2000, // set the delay between slides in milliseconds
          disableOnInteraction: false, // continue autoplay even when user interacts with the slider
        }}
      >
        <SwiperSlide className="w-4/5 flex flex-row bg-white text-lime-400 h-120
        ">
          
            <div>
              Deals Here
            </div>
            <div>
            {/* <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={300} /> */}

          </div>
          
          
          Slide 1
          
          
          
          </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
