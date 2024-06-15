"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./styles.sass";
import "swiper/css";

const ClientsSlider = () => {
  const swiperRef = useRef();

  const PartnersSlideImages = [
    { id: 1, img: "/aero.svg", alt: "aero" },
    { id: 2, img: "/airbus.svg", alt: "airbus" },
    { id: 3, img: "/bol.svg", alt: "bol" },
    { id: 4, img: "/alcon.svg", alt: "alcon" },
    { id: 5, img: "/atlas.svg", alt: "atlas" },
    { id: 6, img: "/bmw.svg", alt: "bmw" },
    { id: 7, img: "/chiquita.svg", alt: "chiquita" },
    { id: 8, img: "/daf.svg", alt: "daf" },
    { id: 9, img: "/Decathlon2.svg", alt: "Decathlon2" },
    { id: 10, img: "/DHL.svg", alt: "DHL" },
  ];

  const handleMouseEnter = () => {
    swiperRef.current?.swiper?.autoplay?.start();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.swiper?.autoplay?.stop();
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        className='clientsSlider'
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 4,
          },
          911: {
            slidesPerView: 5,
          },
          1100: {
            slidesPerView: 6,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                src={item.img}
                alt={item.alt}
                className='img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
