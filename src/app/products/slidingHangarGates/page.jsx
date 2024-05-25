import React from "react";
import ComponentDivider from "@/components/ComponentDivider";
import "./styles.sass";

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
              <img
                src='/imageFirst.png'
                className='img'
                alt='imageFirst'
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

export default PageSlidingHangarGates;
