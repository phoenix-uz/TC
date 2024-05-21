"use client";
import { useEffect } from "react";
import AOS from "aos";
import "./styles.sass";
import "aos/dist/aos.css";

const IntroBlock = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='intro'>
      <video
        autoPlay
        muted
        loop
        className='introVideo'
      >
        <source
          src='https://cdn.loading-systems.com/sites/default/files/sliders/loading-systems-homepage-video-safety_0.webm'
          type='video/mp4'
        />
      </video>
      <div className='container introContainer'>
        <div
          className='introTitle'
          data-aos='zoom-in'
        >
          <h1 className='title'>
            Перегрузочное оборудование <br /> и Промышленные ворота
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
