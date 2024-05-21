import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = ({ burgerIsOpen }) => {
  const location = useRouter();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              href='/about'
            >
              О нас
            </Link>
            <Link
              className='navLink'
              href='/solving'
            >
              Решения
            </Link>
            <Link
              className='navLink'
              href='./library'
            >
              ПРОДУКТЫ
            </Link>
            <Link
              className='navLink'
              href='./news'
            >
              Услуги
            </Link>
            <Link
              className='navLink'
              href='./about'
            >
              BIM
            </Link>
            <Link
              href='/#price'
              className='navLink'
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
