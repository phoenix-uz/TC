"use client";
import Button from "../UI/Button";
import Link from "next/link";
import "./styles.sass";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footerContainer'>
          <div className='footerBtn'>
            <Button className='outline'>Контакты</Button>
          </div>
          <div className='footerItems'>
            <div className='itemsTitle'>
              <h3 className='title'>Навигация</h3>
            </div>
            <div className='itemsLinks'>
              <Link
                href='./'
                className='link'
              >
                О компании
              </Link>
              <Link
                href='./'
                className='link'
              >
                Направления
              </Link>
              <Link
                href='./'
                className='link'
              >
                Производственные линии
              </Link>
              <Link
                href='./'
                className='link'
              >
                Проекты
              </Link>
            </div>
          </div>
          <div className='footerItems'>
            <div className='itemsTitle'>
              <h3 className='title'>Контакты</h3>
            </div>
            <div className='itemsLinks'>
              <p className='text'>
                050010, Казахстан, г. Алматы <br />
                ул. Елебекова 10/1, БЦ “Venus” <br />
                Блок 3, офис 108{" "}
              </p>
              <Link
                href='./'
                className='link'
              >
                +7 777 777 777
              </Link>
              <Link
                href='./'
                className='link'
              >
                info@fabritec.com{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className='rights'>
          <div className='footerRightText'>
            <p className='text'>© 2023 Loading systems. Все права защищены.</p>
          </div>
          <div className='footerRightText'>
            <p className='text'>Политика конфиденциальности</p>
          </div>
          <div className='footerRightText'>
            <p className='text'>Наверх</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
