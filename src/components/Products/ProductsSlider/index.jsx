import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./styles.sass";
import "swiper/css";
import Image from "next/image";

const ProductsSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: "/slider1.svg", alt: "1", text: "Секционные ворота" },
    { id: 2, img: "/slider2.svg", alt: "2", text: "Cкоростные ворота" },
    { id: 3, img: "/slider3.svg", alt: "3", text: "Рулонные ворота" },
    { id: 4, img: "/slider4.svg", alt: "4", text: "Складчатые ворота" },
    { id: 5, img: "/slider5.svg", alt: "5", text: "Ангарные ворота " },
    { id: 6, img: "/slider6.svg", alt: "6", text: "Складчатые ворота" },
    { id: 7, img: "/slider7.svg", alt: "7", text: "Ангарные ворота " },
  ];

  return (
    <>
      <Swiper
        // spaceBetween={50}
        // // slidesPerView={6}
        // loop={true}
        // autoplay={{ delay: 100 }}
        // freeMode={true}
        // modules={[Autoplay]}
        // speed={1200}
        // className='productsSlider'
        breakpoints={{
          // 750: {
          //   slidesPerView: 1,
          // },
          // 420: {
          //   slidesPerView: 2,
          // },
          750: {
            slidesPerView: 1,
          },
          911: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <Image
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
