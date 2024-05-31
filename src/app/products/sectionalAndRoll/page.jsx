import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import "./styles.sass";
import Image from "next/image";

const PageSectionalAndRoll = () => {
  return (
    <div className='pageSectionalAndRoll'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionTitle'>
                <div className='title'>Секционные и рулонные ангарные ворота</div>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Секционные ворота для больших проемов могут иметь высоту или ширину до 12 метров. Для предотвращения
                  деформации панелей ворота оснащаются дополнительными усиливающими элементами. Применение передового
                  программного обеспечения и опыт инженеров Loading Systems гарантируют индивидуальный подход, а также
                  обеспечивают безопасность и надежность эксплуатации ворот.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <div className='container'>
          <div className='boxContainer'>
            <div className='sectionTitle'>
              <div className='title'>СЕКЦИОННЫЕ АНГАРНЫЕ ВОРОТА LOADING SYSTEMS</div>
            </div>
            <div className='imageContainer'>
              <div className='firstImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageFirst1.svg'
                  className='img'
                  alt='imageFirst'
                />
              </div>
              <div className='secondImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageSecond2.svg'
                  className='img'
                  alt='imageSecond'
                />
              </div>
              <div className='thirdImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageThird3.svg'
                  className='img'
                  alt='imageThird'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='boxContainer'>
            <div className='sectionTitle'>
              <div className='title'>СЕКЦИОННЫЕ АНГАРНЫЕ ВОРОТА LOADING SYSTEMS</div>
            </div>
            <div className='imageContainer'>
              <div className='firstImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageFirst4.svg'
                  className='img'
                  alt='imageFirst'
                />
              </div>
              <div className='secondImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageSecond5.svg'
                  className='img'
                  alt='imageSecond'
                />
              </div>
              <div className='thirdImageBox'>
                <Image
                  width={100}
                  height={100}
                  src='/imageThird6.svg'
                  className='img'
                  alt='imageThird'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSectionalAndRoll;
