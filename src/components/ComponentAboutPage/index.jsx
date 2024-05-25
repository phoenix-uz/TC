"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import Image from "next/image";

const ComponentAboutPage = ({ grayBg, title, firstText, secondText, thirdText, forthText, image }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`componentAboutPage ${grayBg}`}>
      <div className='container'>
        <div className='componentAboutPageContainer'>
          <div className='componentInfo'>
            <div
              className='infoTitle'
              data-aos='fade-right'
            >
              <h3 className='title'>{title}</h3>
            </div>
            <div className='infoText'>
              <p
                className='text'
                data-aos='fade-right'
              >
                {firstText}
              </p>
              <p
                className='text'
                data-aos='fade-right'
              >
                {secondText}
              </p>
              <p
                className='text'
                data-aos='fade-right'
              >
                {thirdText}
              </p>
              <p
                className='text'
                data-aos='fade-right'
              >
                {forthText}
              </p>
            </div>
          </div>
          {image ? (
            <div
              className='componentImage'
              data-aos='fade-left'
            >
              <Image
                src={image}
                alt='image'
                className='img'
                width={100}
                height={100}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ComponentAboutPage;
