import React from "react";
import "./styles.sass";
import ComponentDivider from "@/components/ComponentDivider";
import Image from "next/image";

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
              <Image
                src='/imageFirst.png'
                alt='imageFirst'
                className='img'
                width={100}
                height={100}
              />
            </div>
            <div className='secondImageBox'>
              <Image
                src='/imageSecond.png'
                className='img'
                alt='imageSecond'
                width={100}
                height={100}
              />
            </div>
            <div className='thirdImageBox'>
              <Image
                src='/imageThird.png'
                className='img'
                alt='imageThird'
                width={100}
                height={100}
              />
            </div>
            <div className='forthImageBox'>
              <Image
                src='/imageForth.png'
                className='img'
                alt='imageForth'
                width={100}
                height={100}
              />
            </div>
            <div className='fifthImageBox'>
              <Image
                src='/imageFifth.png'
                className='img'
                alt='imageFifth'
                width={100}
                height={100}
              />
            </div>
            <div className='sixthImageBox'>
              <Image
                src='/imageSixth.png'
                className='img'
                alt='imageSixth'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLargeFoldingGates;
