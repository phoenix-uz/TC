import React from "react";
import "./styles.sass";
import ComponentDivider from "@/components/ComponentDivider";

const PageLargeFoldingGates = () => {
  return (
    <div className='pageLargeFoldingGates'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Складчатые ворота больших размеров</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Складные ворота Loading Systems представляют собой конструкцию из нескольких створок, открывающихся в
                  стороны, аналогично дверям автобусов. Максимальная ширина этих ворот достигает 50 метров, а высота — 8
                  метров.
                </p>
                <p className='text'>
                  Створки выполнены из утепленной сэндвич-панели толщиной 50 мм с алюминиевым обрамлением. Стандартная
                  конфигурация предусматривает 2+2 створки с размерами до 5.000 x 5.250 мм и возможностью ручного,
                  электрического или гидравлического привода. Варианты включают окна различных размеров, встроенные
                  калитки, покраску в выбранный цвет, а также различные системы безопасности и автоматизации. По запросу
                  доступно изготовление практически любых нестандартных конструкций.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <div className='container'>
          <div className='imageContainer'>
            <div className='firstImageBox'>
              <img
                src='/imageFirst.png'
                alt='imageFirst'
                className='img'
              />
            </div>
            <div className='secondImageBox'>
              <img
                src='/imageSecond.png'
                className='img'
                alt='imageSecond'
              />
            </div>
            <div className='thirdImageBox'>
              <img
                src='/imageThird.png'
                className='img'
                alt='imageThird'
              />
            </div>
            <div className='forthImageBox'>
              <img
                src='/imageForth.png'
                className='img'
                alt='imageForth'
              />
            </div>
            <div className='fifthImageBox'>
              <img
                src='/imageFifth.png'
                className='img'
                alt='imageFifth'
              />
            </div>
            <div className='sixthImageBox'>
              <img
                src='/imageSixth.png'
                className='img'
                alt='imageSixth'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLargeFoldingGates;
