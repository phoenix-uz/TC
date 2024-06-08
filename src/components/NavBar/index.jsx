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
              className='navLink '
              href='/about'
            >
              О нас
            </Link>
            <div className='navItem'>
              <Link
                className='navLink linkToDropDropdown'
                href='/solvingPage'
              >
                Решения
              </Link>
              <div className='dropdown'>
                <div className='dropdownBox'>
                  <div className='linksBox'>
                    <Link
                      href='/solvingPage#auto'
                      className='navLink '
                    >
                      Автомобильная промышленность
                    </Link>
                    <Link
                      href='/solvingPage#olineCommertion'
                      className='navLink'
                    >
                      Онлайн-коммерция
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/solvingPage#foodIndustry'
                      className='navLink'
                    >
                      Пищевая промышленность
                    </Link>
                    <Link
                      href='/solvingPage#logistics'
                      className='navLink'
                    >
                      Логистика
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/solvingPage#pharmaceuticals'
                      className='navLink '
                    >
                      Фармацевтика
                    </Link>
                    <Link
                      href='/solvingPage#retail'
                      className='navLink'
                    >
                      Розничная торговля
                    </Link>
                  </div>
                  <div className='linksBox'>
                    <Link
                      href='/solvingPage#safety'
                      className='navLink'
                    >
                      Безопасность
                    </Link>
                    <Link
                      href='/solvingPage#sustainableDevelopment'
                      className='navLink'
                    >
                      Устойчивое развитие
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                      href='/products/hangarGates'
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
              href='./PageServices'
            >
              Услуги
            </Link>
            <Link
              className='navLink'
              href='./'
            >
              BIM
            </Link>
            <Link
              href='/contactUs'
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
