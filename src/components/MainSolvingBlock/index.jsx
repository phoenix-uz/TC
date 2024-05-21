"use client";
import React, { useEffect } from "react";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";

const MainSolvingBlock = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mainSolvingBlock'>
      <div className='container'>
        <div className='mainSolvingBlockContainer'>
          <div className='solvingInfo'>
            <div
              className='infoTitle'
              data-aos='fade-right'
            >
              <h2 className='title'>Решения</h2>
            </div>
            <div
              className='infoText'
              data-aos='fade-right'
            >
              <p className='text'>
                Loading Systems - эксперты в разработке, производстве, установке и обслуживании промышленных доков и
                стыковочного оборудования. Наш опыт более 50 лет гарантирует предоставление индивидуальных решений,
                соответствующих уникальным потребностям разнообразных клиентов в различных отраслях.
              </p>
            </div>
            <Button data-aos='fade-right'>Подробнее</Button>
          </div>
          <div className='solvingItems'>
            <div className='itemContainer'>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Складские здания с температурным режимом</p>
              </div>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'> Автомобильная промышленность</p>
              </div>
            </div>
            <div className='itemContainer'>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'> Авиационная индустрия</p>
              </div>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Пищевая промышленность</p>
              </div>
            </div>
            <div className='itemContainer'>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'> Логистика</p>
              </div>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Фармацевтика </p>
              </div>
            </div>
            <div className='itemContainer'>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'> Розничная торговля</p>
              </div>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Заводы и фабрики</p>
              </div>
            </div>
            <div className='itemContainer'>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Безопасность</p>
              </div>
              <div
                className='solvingItemText'
                data-aos='fade-left'
              >
                <p className='text'>Электронная коммерция (интернет-компании)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSolvingBlock;
