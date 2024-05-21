"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import "./styles.sass";

const Header = ({ bgBlack }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  const location = useRouter();

  return (
    <header
      className={`header  ${burgerIsOpen ? "white" : ""} ${scroll ? "bgBlack" : "bgWhite"} ${
        location.pathname === "/" ? " " : "bgBlue"
      }`}
    >
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
            <Link
              href='./'
              className='headerLogo'
            >
              <Image
                src='/whiteLogoSvg.svg'
                alt='loadingLogo'
                className='logo'
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className='headerItem itemFullWidth'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar burgerIsOpen={burgerIsOpen} />
          </div>
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
