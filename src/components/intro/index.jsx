"use client";
import { useEffect } from "react";
import AOS from "aos";
import "./styles.sass";
import "aos/dist/aos.css";
import Button from "../UI/Button";

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
        playsInline
      >
        <source
          src='https://cdn.loading-systems.com/sites/default/files/sliders/loading-systems-homepage-video-safety_0.webm'
          type='video/mp4'
        />
        <source
          src='https://cdn.loading-systems.com/sites/default/files/sliders/loading-systems-homepage-video-safety_0.webm'
          type='video/webm'
        />
      </video>
      <div className='container introContainer'>
        <div className='introBox'>
          <div
            className='introTitle'
            data-aos='zoom-in'
          >
            <h1 className='title'>
              Перегрузочное оборудование <br /> и Промышленные ворота
            </h1>
          </div>
          <div className='introSubtitle'>
            <p className='subtitle'>
              Мы эксперты в разработке, производстве, установке и обслуживании промышленных доков и стыковочного
              оборудования.
            </p>
          </div>
          <div className='introBtn'>
            <Button>Контакты</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
