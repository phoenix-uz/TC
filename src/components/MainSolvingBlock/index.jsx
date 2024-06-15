"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import Image from "next/image";
import ClientsSlider from "../OurClients/ClientsSlider";
import Link from "next/link";

const MainSolvingBlock = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const optionsData = [
    {
      background: "/imageSolving.svg",
      icon: "1",
      main: "Логистика",
      // sub: "Omuke trughte a otufta",
      active: true,
    },
    {
      background: "/stockImage.svg",
      icon: "2",
      main: "Фармацевтика",
      // sub: "Omuke trughte a otufta",
      active: false,
    },
    {
      background: "/car.svg",
      icon: "3",
      main: "Безопасность",
      // sub: "Omuke trughte a otufta",
      active: false,
    },
    {
      background: "/industry.svg",
      icon: "4",
      main: "Розничная торговля",
      // sub: "Omuke trughte a otufta",
      active: false,
    },
    {
      background: "/Sealer.svg",
      icon: "5",
      main: "Пищевая промышленность",
      // sub: "Omuke trughte a otufta",
      active: false,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mainSolvingBlock'>
      <div class='container'>
        <div className='mainSolvingBlockContainer'>
          <div className='sectionTitle'>
            <h3 className='title'>Решения</h3>
            <p className='text'>
              <span className='primary'>Loading Systems - </span>
              эксперты в разработке, производстве, установке и обслуживании промышленных доков и стыковочного
              оборудования. Наш опыт более 50 лет гарантирует предоставление индивидуальных решений, соответствующих
              уникальным потребностям разнообразных клиентов в различных отраслях.
            </p>
          </div>
          <div className='ourWorksSlider'>
            <div className='options'>
              {optionsData.map((option, index) => (
                <div
                  key={index}
                  className={`option  ${activeIndex == index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                  style={{ "--optionBackground": `url(${option.background})` }}
                >
                  <div className='shadow'></div>
                  <div className='label'>
                    <div className='icon'>
                      <p className='iconNumber'>{option.icon}</p>
                    </div>
                    <div className='info'>
                      <div className='main'>{option.main}</div>
                      <div className='sub'>{option.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSolvingBlock;
