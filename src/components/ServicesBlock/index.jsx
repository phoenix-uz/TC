"use client";
import React, { useEffect } from "react";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import "./styles.sass";
import Image from "next/image";
import Link from "next/link";

const ServicesBlock = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='services'>
      <div className=' container'>
        <div className='servicesContainer'>
          <div className='servicesOverlayContainer'>
            <div class='textOverlay'>
              <p className='textPrimary'>Loading Systems</p>
            </div>
            <Image
              width={100}
              height={100}
              src='/services2.svg'
              className='img'
              alt='servicesImage'
            />
          </div>
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
              <p className='text'>
                Правильное техническое обслуживание оборудования гарантирует его долгий срок службы и защиту на
                протяжении всего времени эксплуатации, а также минимизирует риск простоев.
              </p>
            </div>
            <Link href='./PageServices'>
              <Button data-aos='fade-up-right'>Подробнее</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
