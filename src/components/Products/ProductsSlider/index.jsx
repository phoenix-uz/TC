import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import slider1 from "/slider1.png";
// import slider2 from "../../../../public/slider2.png";
// import slider3 from "../../../../public/slider3.png";

import { Autoplay } from "swiper/modules";
import "./styles.sass";
import "swiper/css";

const ProductsSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: "/slider1.png", alt: "1", text: "Секционные ворота" },
    { id: 2, img: "/slider2.png", alt: "2", text: "Cкоростные ворота" },
    { id: 3, img: "/slider3.png", alt: "3", text: "Рулонные ворота" },
    { id: 4, img: "/slider1.png", alt: "4", text: "Складчатые ворота" },
    { id: 5, img: "/slider2.png", alt: "5", text: "Ангарные ворота " },
    { id: 6, img: "/slider3.png", alt: "6", text: "Секционные ворота" },
    { id: 7, img: "/slider1.png", alt: "7", text: "Ангарные ворота " },
  ];

  return (
    <>
      <Swiper
        spaceBetween={50}
        // slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          577: {
            slidesPerView: 2,
          },
          911: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                className='image'
                src={item.img}
                alt={item.alt}
                width={100}
                height={100}
              />
              <div className='imageText'>
                <p className='text'>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductsSlider;
