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
              href='/solvingPage'
            >
              Решения
            </Link>
            <div className='navItem'>
              <span className='navLink linkToDropDropdown'>Продукты</span>
              <div className='dropdown'>
                <div className='dropdownBox'>
                  <div className='linksBox'>
                    <Link
                      href='/products/sectionalDoors'
                      className='navLink'
                    >
                      Секционные ворота
                    </Link>
                    <Link
                      href='/products/speedGate'
                      className='navLink'
                    >
                      Cкоростные ворота
                    </Link>
                    <Link
                      href='/products/rollingGates'
                      className='navLink'
                    >
                      Рулонные ворота
                    </Link>
                    <Link
                      href='/products/foldingGates'
                      className='navLink'
                    >
                      Складчатые ворота
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/products/hangarGates'
                      className='navLink'
                    >
                      Ангарные ворота{" "}
                    </Link>
                    <Link
                      href='/products/'
                      className='navLink'
                    >
                      Подъемные тентовые ворота{" "}
                    </Link>
                    <Link
                      href='/products/tentHangarDoors'
                      className='navLink'
                    >
                      Тентовые ангарные ворота{" "}
                    </Link>
                    <Link
                      href='/products/largeFoldingGates'
                      className='navLink'
                    >
                      Складчатые ангарные ворота{" "}
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/products/slidingHangarGates'
                      className='navLink'
                    >
                      Откатные ангарные ворота{" "}
                    </Link>
                    <Link
                      href='/products/sectionalAndRoll'
                      className='navLink'
                    >
                      Секционные и рулонные ангарные ворота{" "}
                    </Link>
                    <Link
                      href='/products/mechanicalBridges'
                      className='navLink'
                    >
                      Механические мостики{" "}
                    </Link>
                    <Link
                      href='/products/dockLevelers'
                      className='navLink'
                    >
                      Перегрузочные мосты
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/products/liftTables'
                      className='navLink'
                    >
                      Подъемные столы{" "}
                    </Link>
                    <Link
                      href='/products/sealers'
                      className='navLink'
                    >
                      Герметизаторы (докшелтеры)
                    </Link>
                    <Link
                      href='/products/accessories'
                      className='navLink'
                    >
                      Аксессуары
                    </Link>
                    <Link
                      href='/products/safetyOnRamp'
                      className='navLink'
                    >
                      Безопасность на рампе{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
