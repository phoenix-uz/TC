"use client";
import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import React from "react";
import "./styles.sass";
import Button from "@/components/UI/Button";

const MechanicalBridges = () => {
  const handleDownloadSectionalDoors = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageMechanicalBridges'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Механические мостики</h3>
              </div>
              <div className='secondaryTitle'>
                <p className='title'>Мини-доклевеллеры и откидные мостики</p>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Loading Systems предлагает большой выбор мини-доклевеллеров для соединения пола
                  погрузочно-разгрузочной рампы с полом кузова транспортного средства, находящихся на разных уровнях и
                  расстоянии друг от друга. Установка мини-доклевеллеров и погрузочных рамп может быть выполнена как в
                  новых, так и в уже существующих зданиях.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Перегрузочный мостик 105NG</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Мини-мостик MiniRamp 105M 60 кН – это перегрузочный мости с откидной аппарелью, ручное управление. Это
                  альтернатива традиционным приямочным системам, идеально подходит для преодоления небольших различий в
                  высоте между платформой и полом транспортного средства.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Управление'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Управление перегрузочным мостиком 105NG осуществляется при помощи рычага, вставленного в верхнюю
                      платформу и перемещаемого в сторону оператора для поднятия платформы. Механизм откидывания
                      аппарели автоматически блокируется, когда платформа достигает вертикального положения. Передвигая
                      рычаг вперед, можно опустить платформу, при этом аппарель корректируется, и мостик соединяется с
                      полом кузова транспортного средства. В процессе погрузки и разгрузки мостик автоматически
                      повторяет движения грузового автомобиля. По завершении операции рычаг следует переместить назад,
                      чтобы вернуть перегрузочный мостик в исходное положение.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/control2.png'
                      alt='control2'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Материалы и характеристики'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Перегрузочный мостик представлен в двух моделях: встроенной (105NG-0xx) и пристраиваемой к зданию
                      (105NG-2xx). Они подходят как для новых проектов, так и для существующих зданий. Пристраиваемая
                      модель поставляется со стандартными бамперами и обе модели выдерживают нагрузку до 60 кН.
                      Платформа и аппарель изготовлены из высококачественного рифленого листа 12/14. Аппарель крепится к
                      платформе через две оси Ø 25 мм из белой и оцинкованной стали, создавая самоочищающуюся открытую
                      шарнирную конструкцию для вращения по всей ширине мостика. Задняя сторона платформы крепится к
                      раме посредством трех шарниров. Дополнительная поддержка между шарнирами обеспечивает надежное
                      соединение с рамой.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/materials.png'
                      alt='materials'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Технические спецификации'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Нормы</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Грузоподъемность (EN 1398)</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Длина аппарели</p>
                        <p className='text'>Стандартный цвет</p>
                        <p className='text'>Температура использования между -30° и +50° по Цельсию</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>CE -маркировка</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>60 кН</p>
                        <p className='text'>384 мм</p>
                        <p className='text'>350 мм</p>
                        <p className='text'>RAL 9005 (черный)</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordiontext'>
                    <p className='text'>
                      Перегрузочный мостик 105NG от Loading Systems обладает CE-маркировкой и соответствует всем
                      аспектам безопасности, предусмотренным Европейской директивой EN 1398.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Размеры'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>Размеры моделей перегрузочного мостика 105NG</p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/sizes.png'
                      alt='sizes'
                      className='img'
                    />
                  </div>
                  <div className='accordiontext'>
                    <p className='text'>
                      {" "}
                      <span className='textBold'>BH </span> = конструктивная высота
                    </p>
                    <p className='text'>
                      {" "}
                      <span className='textBold'>O </span> = эффективный рабочий диапазон над погрузочным перроном
                    </p>
                    <p className='text'>
                      {" "}
                      <span className='textBold'>U </span> = эффективный рабочий диапазон ниже уровня перрона
                    </p>
                    <p className='text'>
                      Аппарель, имеющая длину 350 мм, устанавливается на пол кузова транспортного средства на 250 мм при
                      использовании буферов размером 100 мм. Рабочий диапазон измеряется от передней части буферов с
                      учетом траектории вращения аппарели.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Стандартные технические средства защиты'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Несъемная зафиксированная защита для пальцев ног персонала</li>
                      <li>Прочные, более широкие опоры аппарели для поперечного движения</li>
                      <li>Черно-желтая маркировка безопасности</li>
                      <li>Закрепляемая ремонтная подпорка, которая также служит управляющим рычагом</li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Перегрузочный мостик 105NG</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleDownloadSectionalDoors}
                    >
                      Скачать
                    </Button>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции / принадлежности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Грунтовка</li>
                      <li>Цвет RAL по выбору</li>
                      <li>Аппарель со скосами с двух сторон (конусообразная)</li>
                      <li>Оцинковка горячим способом</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default MechanicalBridges;
