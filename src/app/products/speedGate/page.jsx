"use client";
import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import "./styles.sass";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import Button from "@/components/UI/Button";
import Image from "next/image";

const SpeedGate = () => {
  const handleDownloadSectionalDoorN = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/IndustrialGates/SectionalDoorN/SectionalDoorN1.pdf";
    link.download = "SectionalDoorN1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageSpeedGate'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Скоростные ворота</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Скоростные подъемные ворота Loading Systems выделяются своей универсальностью, качеством, современным
                  дизайном и индивидуальностью. Компания Loading Systems постоянно совершенствует свои технологии, чтобы
                  обеспечить максимальную надежность и долговечность скоростных ворот. Продукция Loading Systems
                  разрабатывается и производится в строгом соответствии с Европейской Директивой EN 13241-1, обеспечивая
                  безопасную эксплуатацию каждый день.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/speedGate.png'
                alt='speedGate'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Эффективность и экономичность</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Высокоскоростные ворота Loading Systems предназначены для интенсивного использования и идеально
                  подходят для областей, где важны гигиенические стандарты и необходимо разделение зон с различной
                  температурой. Эти ворота обеспечивают быстрое и надежное открывание и закрывание, что важно при частых
                  операциях въезда и выезда транспорта.
                </p>
                <p className='text'>
                  Независимо от типа ворот, энергетические потери при открытых воротах значительно превышают потери
                  энергии из-за утечек воздуха и тепла через закрытые ворота. Исследование Технического Университета в
                  Мюнхене подтверждает, что установка высокоскоростных ворот может сократить потребление электроэнергии
                  на 30% по сравнению с обычными воротами. Создание воздушного шлюза с использованием двух ворот
                  дополнительно снижает энергопотребление и улучшает внутренний климат в помещении на 90%
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Standard (640NG Standard)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Loading Systems 640NG Standard - это высокоскоростные ворота, спроектированные для интенсивного
                  использования. Они идеально подходят в ситуациях, где необходима эффективная защита от теплопотерь, но
                  при этом требуется быстрое открывание и закрывание для плотного потока посетителей, будь то автомобили
                  или люди. Модель 640NG Standard представляет собой универсальное решение, объединяющее в себе высокую
                  эффективность и скорость. Специальное крепление дверного полотна в боковых направляющих обеспечивает
                  этой модели 4-й класс ветроустойчивости, делая ее пригодной для использования как внутри, так и
                  снаружи зданий.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        полотно ворот изготовлено из ПВХ толщиной 1,3мм. и доступно в 12 стандартных цветах. По
                        стандартам Loading Systems дверное полотно оснащено прозрачной вставкой по всей ширине полотна.
                      </li>
                      <li>
                        в стандартной комплектации скоростные ворота оснащены защитными коробами вала и электропривода,
                        которые могут быть выполнены из оцинкованной или окрашенной стали.
                      </li>
                      <li>скорость открытия до 2,0 м/сек</li>
                      <li>система восстановления полотна после выбивания в стандартной комплектации</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>рама и защитные короба из нержавеющей стали</li>
                      <li>системы обогрева направляющих и привода</li>
                      <li>большой выбор систем управления</li>
                      <li>различные типы полотна</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>стандарт исполнения</p>
                        <p className='text'>макс. ширина (Ш)</p>
                        <p className='text'>макс. высота (В)</p>
                        <p className='text'>скорость открытия</p>
                        <p className='text'>скорость закрытия</p>
                        <p className='text'>мощность двигателя</p>
                        <p className='text'>материал полотна (стандарт)</p>
                        <p className='text'>класс защиты автоматики</p>
                        <p className='text'>ресурс, согласно EN12604</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Standard</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>7000 мм</p>
                        <p className='text'>6000 мм</p>
                        <p className='text'>2 м/с</p>
                        <p className='text'>0.8 м/с</p>
                        <p className='text'>0.75 - 1.5 кВт</p>
                        <p className='text'>полиэстер 1.3 мм</p>
                        <p className='text'>IP54 / IP65</p>
                        <p className='text'>1 млн. циклов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Скоростные ворота 640 Standard</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleDownloadSectionalDoorN}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Clean (640NG Clean)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Высокоскоростные ворота Loading Systems Clean специально разработаны для применения в условиях с
                  высокими требованиями к воздухопроницаемости, таких как помещения с контролируемым воздушным
                  давлением, например, тамбуры (комнаты для очистки) в фармацевтической индустрии, а также в
                  производствах химических или электронных компонентов. Эти ворота сертифицированы с
                  воздухопроницаемостью менее 12 м³/м²ч при давлении 50 Па.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/clean.png'
                alt='clean'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>стальные элементы ворот изготовлены из нержавеющей стали</li>
                      <li>
                        полотно ворот изготовлено из ПВХ толщиной 1,3мм. и доступно в 12 стандартных цветах. По
                        стандартам Loading Systems дверное полотно оснащено прозрачной вставкой по всей ширине полотна.
                      </li>
                      <li>
                        в соответствии с европейскими нормами, ворота 640 Clean стандартно оборудованы противовесом в
                        боковой направляющей для быстрой аварийной разблокировки
                      </li>
                      <li>скорость открытия до 2,5 м/сек</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>полотно толщиной 7 мм или полотно сертифицированное в FDA</li>
                      <li>большой выбор систем управления</li>
                      <li>пользовательский логотип на полотне ворот</li>
                      <li>аварийный выход в полотне ворот</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>стандарт исполнения</p>
                        <p className='text'>макс. ширина (Ш)</p>
                        <p className='text'>макс. высота (В)</p>
                        <p className='text'>скорость открытия</p>
                        <p className='text'>скорость закрытия</p>
                        <p className='text'>мощность двигателя</p>
                        <p className='text'>материал полотна (стандарт)</p>
                        <p className='text'>класс защиты автоматики</p>
                        <p className='text'>ресурс, согласно EN12604</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Standard</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>4000 мм</p>
                        <p className='text'>4000 мм</p>
                        <p className='text'>2,5 м/с</p>
                        <p className='text'>0.8 м/с</p>
                        <p className='text'>0.75 - 1.5 кВт</p>
                        <p className='text'>полиэстер 1.3 мм</p>
                        <p className='text'>IP54 / IP65</p>
                        <p className='text'>1 млн. циклов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Скоростные ворота 640N Clean</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleDownloadSectionalDoorN}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Food (640NG Food)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Высокоскоростные ворота 640 FOOD специально разработаны для среды с повышенными требованиями к
                  гигиене, высокой влажности и ежедневной очистке. Избыточное уплотнение делает горизонтальные профили
                  армирования необязательными, что обеспечивает бесшумное открытие и закрытие ворот. Благодаря
                  улучшенной гигиеничности, эти ворота идеально подходят для использования в пищевой промышленности.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/food.png'
                alt='food'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        полотно ворот изготовлено из ПВХ толщиной 1,3мм. и доступно в 12 стандартных цветах. По
                        стандартам Loading Systems дверное полотно оснащено прозрачной вставкой по всей ширине полотна.
                      </li>
                      <li>рама изготовлена из нержавеющей стали</li>
                      <li>
                        в стандартной комплектации скоростные ворота оснащены защитными коробами вала и электропривода
                        из нержавеющей стали.
                      </li>
                      <li>скорость открытия до 2,0 м/сек</li>
                      <li>система восстановления полотна после выбивания в стандартной комплектации</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>другой цвет полотна по RAL</li>
                      <li>система резервного питания</li>
                      <li>большой выбор систем управления</li>
                      <li>различные типы полотна</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>стандарт исполнения</p>
                        <p className='text'>макс. ширина (Ш)</p>
                        <p className='text'>макс. высота (В)</p>
                        <p className='text'>скорость открытия</p>
                        <p className='text'>скорость закрытия</p>
                        <p className='text'>мощность двигателя</p>
                        <p className='text'>материал полотна (стандарт)</p>
                        <p className='text'>класс защиты автоматики</p>
                        <p className='text'>ресурс, согласно EN12604</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Standard</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>4500 мм</p>
                        <p className='text'>4500 мм</p>
                        <p className='text'>2 м/с</p>
                        <p className='text'>0.8 м/с</p>
                        <p className='text'>0.75 - 1.5 кВт</p>
                        <p className='text'>полиэстер 1.3 мм</p>
                        <p className='text'>IP54 / IP65</p>
                        <p className='text'>1 млн. циклов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Скоростные ворота 640 Food</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleDownloadSectionalDoorN}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Freez 1(640NG Freez)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Высокоскоростные ворота Loading Systems Freez 1 специально разработаны для использования в охлаждающих
                  и морозильных камерах, представляя собой наилучший выбор среди высокоскоростных ворот для таких
                  условий. Высокая скорость открытия и закрытия, а также превосходная изоляция, помогают уменьшить
                  перепады температуры, минимизировать проникновение влаги в морозильную камеру и оптимизировать
                  внутренние передвижения.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/freez.png'
                alt='freez'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        полотно изготовлено из двухслойной полиэфирной ткани толщиной 0,9 мм с изоляционным материалом
                        между слоями и поставляется в 16 стандартных цветах.
                      </li>
                      <li>
                        в стандартной комплектации скоростные ворота оснащены защитными коробами вала и электропривода,
                        которые могут быть выполнены из оцинкованной или окрашенной стали
                      </li>
                      <li>
                        в стандартной комплектации скоростные ворота оснащены защитными коробами вала и электропривода
                        из нержавеющей стали.
                      </li>
                      <li>
                        электрические нагревательные кабели в боковых направляющих и тепловое прерывание за боковыми
                        направляющими, уменьшают образование льда
                      </li>
                      <li>система восстановления полотна после выбивания в стандартной комплектации</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>утепленное полотно ворот для лучшей теплоизоляции</li>
                      <li>рама и защитные короба из нержавеющей стали</li>
                      <li>большой выбор систем управления</li>
                      <li>множество вариантов обогрева</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>стандарт исполнения</p>
                        <p className='text'>макс. ширина (Ш)</p>
                        <p className='text'>макс. высота (В)</p>
                        <p className='text'>скорость открытия</p>
                        <p className='text'>скорость закрытия</p>
                        <p className='text'>Теплоизоляция</p>
                        <p className='text'>материал полотна (стандарт)</p>
                        <p className='text'>класс защиты автоматики</p>
                        <p className='text'>ресурс, согласно EN12604</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Standard</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>4000 мм</p>
                        <p className='text'>4500 мм</p>
                        <p className='text'>1.5 м/с</p>
                        <p className='text'>0.6 м/с</p>
                        <p className='text'>2,2 Wm²K</p>
                        <p className='text'>вспененный полиэтилен/ПВХ 900 гр/м²</p>
                        <p className='text'>IP54 / IP65</p>
                        <p className='text'>1 млн. циклов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Скоростные ворота 640 FREEZ 1</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleDownloadSectionalDoorN}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Freez 1(640NG Freez)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Высокоскоростные ворота Loading Systems Freez 2 - это рулонные ворота с самовосстанавливающимися двумя
                  полотнами, не содержащими жестких элементов внутри. Идеально подходят для областей, где требуется
                  разделение помещений с положительной и отрицательной температурой, при этом исключается образование
                  конденсата и обледенения. Эти ворота могут быть установлены как при положительных, так и при
                  отрицательных температурах.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/freez2.png'
                alt='freez2'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Самовосстанавливающаяся конструкция</li>
                      <li>Двойное полотно из ПВХ (между ними воздушное пространство в 200мм)</li>
                      <li>Быстрая скорость открытия</li>
                      <li>Высокая плотность полотна</li>
                      <li>Высокие рабочие температуры</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Большой выбор дополнительных радаров, светофоров и кнопок</li>
                      <li>Минимальная температура: -35 градусов, максимальная: +35.</li>
                      <li>Простая установка</li>
                      <li>Минимальный расход электроэнергии</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>стандарт исполнения</p>
                        <p className='text'>макс. ширина (Ш)</p>
                        <p className='text'>макс. высота (В)</p>
                        <p className='text'>скорость открытия</p>
                        <p className='text'>скорость закрытия</p>
                        <p className='text'>Теплоизоляция</p>
                        <p className='text'>материал полотна (стандарт)</p>
                        <p className='text'>класс защиты автоматики</p>
                        <p className='text'>ресурс, согласно EN12604</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Freez 1</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>6000 мм</p>
                        <p className='text'>7000 мм</p>
                        <p className='text'>1.8 м/с</p>
                        <p className='text'>0.8 м/с</p>
                        <p className='text'>2,0 Wm²K</p>
                        <p className='text'>вспененный полиэтилен/ПВХ 900 гр/м²</p>
                        <p className='text'>IP54 / IP65</p>
                        <p className='text'>1 млн. циклов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Скоростные ворота 640 FREEZ 2</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleDownloadSectionalDoorN}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default SpeedGate;
