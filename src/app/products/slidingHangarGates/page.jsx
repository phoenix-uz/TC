import React from "react";
import ComponentDivider from "@/components/ComponentDivider";
import "./styles.sass";
import Image from "next/image";
import { ImageError } from "next/dist/server/image-optimizer";

const PageSlidingHangarGates = () => {
  return (
    <div className='pageSlidingHangarGates'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Откатные ангарные ворота</h3>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <div className='container'>
          <div className='imageContainer'>
            <div className='firstImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageFirst.svg'
                className='img'
                alt='imageFirst'
              />
            </div>
            <div className='secondImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageSecond.svg'
                className='img'
                alt='imageSecond'
              />
            </div>
            <div className='thirdImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageThird.svg'
                className='img'
                alt='imageThird'
              />
            </div>
            <div className='forthImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageForth.svg'
                className='img'
                alt='imageForth'
              />
            </div>
            <div className='fifthImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageFifth.svg'
                className='img'
                alt='imageFifth'
              />
            </div>
            <div className='sixthImageBox'>
              <Image
                width={100}
                height={100}
                src='/imageSixth.svg'
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

export default PageSlidingHangarGates;
