"use client";
import React, { useEffect } from "react";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import "./styles.sass";
import Image from "next/image";

const ServicesBlock = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='services'>
      <div className=' container'>
        <div className='servicesContainer'>
          <div className='servicesInfo'>
            <div
              className='servicesTitle'
              data-aos='fade-right'
            >
              <h2 className='title'>Услуги</h2>
            </div>
            <div
              className='servicesText'
              data-aos='fade-right'
            >
              <p className='text'>Сервис и техническое обслуживание</p>
            </div>
            <Button data-aos='fade-up-right'>Подробнее</Button>
          </div>
          <div
            className='servicesImage'
            data-aos='fade-up-left'
          >
            <Image
              width={100}
              height={100}
              src='/services.svg'
              className='img'
              alt='servicesImage'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
