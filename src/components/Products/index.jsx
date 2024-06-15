"use client";
import Image from "next/image";
import ProductsSlider from "./ProductsSlider";
import "./styles.sass";
import Link from "next/link";

const Products = () => {
  return (
    <div className='products'>
      <div className='container'>
        <div className='productsContainer'>
          <div className='productsTitle'>
            <h2 className='title'>Продукты</h2>
          </div>
          <div className='productsSlider'>
            {/* <ProductsSlider /> */}
            <div className='item img1'>
              <Image
                width={100}
                height={100}
                src='/SectionalDoors.svg'
                alt='SectionalDoors'
                className='img'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Секционные ворота
                </Link>
              </div>
            </div>
            <div className='item img2'>
              <Image
                width={100}
                height={100}
                src='/speedGate.svg'
                alt='speedGate'
                className='img'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Скоростные ворота
                </Link>
              </div>
            </div>
            <div className='item img3'>
              <Image
                width={100}
                height={100}
                src='/rollingGates.svg'
                alt='rollingGates'
                className='img'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Рулонные ворота
                </Link>
              </div>
            </div>
            <div className='item img4'>
              <Image
                width={100}
                height={100}
                src='/imageFirst1.svg'
                className='img'
                alt='imageFirst'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Секционные и ангарные ворота
                </Link>
              </div>
            </div>
            <div className='item img5'>
              <Image
                width={100}
                height={100}
                src='/materials.svg'
                alt='materials'
                className='img'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Механические ворота
                </Link>
              </div>
            </div>
            <div className='item img6'>
              <Image
                width={100}
                height={100}
                src='/slider2.svg'
                className='img'
                alt='servicesImage'
              />
              <div className='productsOverlay'>
                <Link
                  href=''
                  className='link'
                >
                  Ангарные ворота
                </Link>
              </div>
            </div>
            {/* <div className='item img7'>
              <Image
                width={100}
                height={100}
                src='/services2.svg'
                className='img'
                alt='servicesImage'
              />
             
            </div> */}
            {/* <div className='item img8'>
              <Image
                width={100}
                height={100}
                src='/services2.svg'
                className='img'
                alt='servicesImage'
              />
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
