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
        // className="h-120 mb-48"
        autoplay={{
          delay: 4000, // set the delay between slides in milliseconds
          disableOnInteraction: false, // continue autoplay even when user interacts with the slider
        }}
      >
        <SwiperSlide>
          <div className="w-5/5 flex items-center justify-around bg-white p-6 h-120">
            <div>
              <h1 className="text-sky-500 text-4xl bold">Deals Here</h1>
              <br/>
              <br/>
              <span className="text-orange-500 text-3xl bold">Get Your Best Offer Now!!</span>
              <br/>
              <br/>

              <button className="bg-sky-500 text-white text-3xl bold p-2 rounded-md">Hurry Up!</button>
            </div>
            <div>
              <Image
                src="/1 (2).jpg"
                alt="Description of the image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-1/1 flex justify-around items-center bg-white p-6 text-sky-400 h-120">
          <div>
              <h1 className="text-sky-500 text-4xl bold">Deals Here</h1>
              <br/>
              <br/>
              <span className="text-orange-500 text-3xl bold">Get Your Best Offer Now!!</span>
              <br/>
              <br/>

              <button className="bg-sky-500 text-white text-3xl bold p-2 rounded-md">Hurry Up!</button>
            </div>
            <div>
              <Image
                src="/1.jpg"
                alt="Description of the image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
