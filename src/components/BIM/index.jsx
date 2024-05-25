"use client";
import React, { useEffect } from "react";
import "./styles.sass";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";

const BIM = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bim'>
      <div className='bimContainer container'>
        <div className='bimInfo'>
          <div
            className='bimTitle'
            data-aos='zoom-in-right'
          >
            <h2 className='title'>BIM</h2>
          </div>
          <div
            className='bimText'
            data-aos='zoom-in-right'
          >
            <p className='text'>Проектирование с использованием систем загрузки</p>
          </div>
          <Button data-aos='zoom-in-right'>Подробнее</Button>
        </div>
      </div>
      <div
        className='bimImage'
        data-aos='zoom-in-left'
      >
        <img
          src='/bimImage.png'
          alt='bimImage'
          className='img'
        />
      </div>
    </div>
  );
};

export default BIM;
