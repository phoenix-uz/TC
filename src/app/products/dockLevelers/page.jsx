"use client";
import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import React from "react";
import "./styles.sass";
import Button from "@/components/UI/Button";

const PageDockLevelers = () => {
  const handleDownloadSectionalDoors = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageDockLevelers'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Перегрузочные мосты</h3>
              </div>
              <div className='secondaryTitle'>
                <p className='title'>доклевеллеры</p>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Доклевеллеры (перегрузочные мосты) от Loading Systems эффективно соединяют пол склада с полом кузова
                  транспортного средства, находящихся на разных уровнях. Обеспечивая оптимальное перекрытие между
                  платформой доклевеллера и полом кузова, они легко компенсируют разницу в высоте, вызванную
                  неравномерной загрузкой или негоризонтальностью кузова. Наш ассортимент включает гидравлические
                  доклевеллеры различных размеров, грузоподъемности и доступные для заказа по индивидуальным
                  требованиям.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Мост с откидной аппарелью 232NG (60kN)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PoweRamp 232NG – это инновационное поколение электрогидравлических перегрузочных мостов с откидной
                  аппарелью, оснащенных гидравлическим приводом как для платформы, так и для аппарели.
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
                      Управление перегрузочным мостом PoweRamp 232NG осуществляется одной кнопкой. Удерживая кнопку,
                      платформа поднимается до максимальной высоты после этого откидывается аппарель.При отпускании
                      кнопки автоматически осуществляется опускание платформы и аппарели на пол кузова транспортного
                      средства.
                    </p>
                    <p className='text'>
                      Во время операций погрузки или разгрузки перегрузочный мост автоматически повторяет движения
                      грузового автомобиля. После завершения процесса необходимо повторно удержать кнопку для возврата
                      доклевеллера в исходное положение. PoweRamp 232NG также подходит для погрузки или разгрузки
                      "последнего груза" ниже уровня перрона.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/overloadControl.png'
                      alt='overloadControl'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Варианты монтажа'>
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
                      src='/mountingOptions.png'
                      alt='mountingOptions'
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
              <ComponentAccordion accordionTitle='Материалы'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Платформа и аппарель перегрузочного моста PoweRamp 232NG обладают высококачественным рифленым
                      покрытием:
                    </p>
                    <ul>
                      <li>Платформа: рифленый лист 6/8, S235JRG2</li>
                      <li>Аппарель: рифленый лист 12/14, S355J2G3</li>
                    </ul>
                    <p className='text'>
                      Доклевеллер PoweRamp 232NG, в зависимости от ширины, укреплен 10-12 профилями вдоль своей длины,
                      обеспечивая оптимальное соединение с полом кузова грузового автомобиля. При односторонней нагрузке
                      разница в высоте относительно ширины транспортного средства может быть компенсирована до 10%
                      ширины платформы за счет ее собственного веса.
                    </p>
                    <p className='text'>
                      Задняя сторона платформы крепится к нижней раме посредством трех шарниров. Для шарниров в передней
                      части использованы оси (Ø25мм) из белой круглой стали.
                    </p>
                    <p className='text'>
                      Эти оси формируют основу самоочищающейся открытой шарнирной конструкции аппарели, обеспечивая
                      вращение по всей ширине доклевеллера. Прочная передняя балка принимает на себя все воздействующие
                      силы при аварийной остановке, поперечном движении, а также при погрузке последнего груза ниже
                      уровня площадки. Благодаря самонесущим свойствам рамы можно выбрать опцию отверстия (так
                      называемого "почтового ящика") под доклевеллером открытого или закрытого приямочного типа.
                      Передняя балка нижней рамы также служит для защиты гидравлической и механической систем,
                      установленных в нижней части перегрузочного моста.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Привод'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Гидравлическая функция основана на логической последовательности, выполняемой Логической
                      Блок-системой, которая работает на разнице в давлении. Платформа приводится в движение
                      гидравлическим цилиндром. Аппарель оборудована отдельным цилиндром для самопогашения. Система
                      полностью закрыта, что обеспечивает защиту от повреждений в условиях сильной пыли, песка или
                      других мусорных частиц. Низкое рабочее давление около 100 Бар обеспечивается большими цилиндрами.
                    </p>
                    <p className='text'>
                      Главный цилиндр, хромированный с двойным уплотнением, рассчитан на давление в 1200 Бар. Цилиндр
                      аппарели и соответствующие шланги предназначены для давления 600 Бар. Главный цилиндр оснащен
                      клапаном, предотвращающим разрыв шланга. Гидравлическая станция, компактно размещенная под
                      платформой доклевеллера, соединена с обоими цилиндрами двумя короткими гидравлическими шлангами.
                      Такое расположение гарантирует, что станция не подвергается внешним воздействиям, предотвращая
                      повреждения. Эти характеристики обеспечивают не только безопасность гидравлической системы, но и
                      увеличивают ее срок службы с минимальной потребностью в техническом обслуживании.
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
              <ComponentAccordion accordionTitle='Технические спецификации'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>Нормы</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Грузоподъемность (EN 1398)</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Длина аппарели</p>
                        <p className='text'>Угол между платформой и аппарелью</p>
                        <p className='text'>Мотор </p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Управляющий ток</p>
                        <p className='text'>Класс защиты</p>
                        <p className='text'>Закрытая гидравлическая система</p>
                        <p className='text'>Внешний диаметр главного цилиндра</p>
                        <p className='text'>Внешний диаметр цилиндра аппарели</p>
                        <p className='text'>Температура эксплуатации между</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>CE -маркировка</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>60 кН</p>
                        <p className='text'>600 мм</p>
                        <p className='text'>400 мм</p>
                        <p className='text'>(примерно 4°) 45 мм</p>
                        <p className='text'>0,75 кВт</p>
                        <p className='text'>400 V / 50 Гц / 2,5 A</p>
                        <p className='text'>24 V DC</p>
                        <p className='text'>IP 54</p>
                        <p className='text'>примерно 100 Бар</p>
                        <p className='text'>65 мм</p>
                        <p className='text'>45 мм</p>
                        <p className='text'>-30° и +50° по Цельсию</p>
                        <p className='text'>(черный) RAL 9005</p>
                      </div>
                    </div>
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
                      <li>Большое количество монтажных вариантов</li>
                      <li>Специальные размеры</li>
                      <li>Более длинная аппарель</li>
                      <li>Аппарель со скошенными краями</li>
                      <li>Антискользящее покрытие Mandurax для платформы и аппарели</li>
                      <li>Двойной цилиндр для платформы</li>
                      <li>Цвет RAL по выбору</li>
                      <li>Грунтовка</li>
                      <li>Оцинковка горячим способом</li>
                      <li>Уплотняющий профиль с трех сторон доклевеллера для защиты от сквозняка</li>
                      <li>Система безопасности – доклевеллер/промышленные ворота</li>
                      <li>Повышенное IP-значение</li>
                      <li>Другое напряжение</li>
                      <li>Откидные боковые сегменты аппарели для соответствия ширине грузового автомобиля</li>
                      <li>Оборудование нижней стороны платформы изоляционными полосками из пенополистирола</li>
                      <li>Пульт управления, включая возможность управления промышленными воротами</li>
                      <li>Выключатель исходного положения для управления светофором, промышленными воротами и т.д.</li>
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
              <ComponentAccordion accordionTitle='Стандартные технические средства защиты'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        Полная остановка гидравлической системы в аварийных ситуациях, осуществляемая посредством
                        предохранительного клапана в цилиндре
                      </li>
                      <li>Выключатель аварийной остановки с перезагрузкой (анти-паника)</li>
                      <li>Защита для ног обслуживающего персонала</li>
                      <li>Прочные опоры аппарели для поперечного движения</li>
                      <li>Черная/желтая предупреждающая маркировка</li>
                      <li>Закрепляемая ремонтная подпорка</li>
                      <li>Защита мотора при помощи теплового реле</li>
                      <li>Система управления оснащена поясняющими пиктограммами</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='accordionFile'>
              <div className='secondaryTitle'>
                <h3 className='title'>Мост с откидной аппарелью 232NG (60kN)</h3>
              </div>
              <Button
                className='download'
                onClick={handleDownloadSectionalDoors}
              >
                Скачать
              </Button>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Мост с откидной аппарелью 232M (100kN)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PoweRamp 232 100кН - это электрогидравлический перегрузочный мост с откидной аппарелью, обладающий
                  повышенной грузоподъемностью. Обе части, как платформа, так и аппарель, оборудованы гидравлическим
                  приводом.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Материалы'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Поверхность платформы и аппарели обладает высококачественным рифленым покрытием:
                    </p>
                    <ul>
                      <li>Платформа: Рифленое покрытие 8/10, S235JRG, St-37</li>
                      <li>Аппарель: Рифленое покрытие 20/22, S355JRG, St-52.</li>
                    </ul>
                    <p className='text'>
                      Доклевеллер 232, в зависимости от ширины, укреплен продолжительными 20 L-профилями. Перегрузочные
                      мосты с длиной более 3500 мм усилены 10 IPE-профилями в сочетании с рифленым покрытием 6/6Ю для
                      обеспечения оптимального соединения аппарели с полом кузова грузового автомобиля. При
                      односторонней нагрузке разница в высоте относительно ширины транспортного средства может быть
                      компенсирована до 10% шириной платформы за счет ее собственного веса.
                    </p>
                    <p className='text'>
                      Задняя часть платформы крепится к нижней раме через три 300-миллиметровых шарнира, оси которых
                      (Ø30мм) изготовлены из белой стали. Оси аналогичных шарниров в передней части платформы (оси
                      аппарели: Ø28мм) также формируют основу самоочищающейся открытой шарнирной конструкции аппарели,
                      обеспечивающей вращение по всей ширине доклевеллера. Прочная передняя балка эффективно
                      амортизирует воздействующие силы в случае аварийной остановки, поперечного движения и погрузки
                      последнего груза ниже уровня погрузочной площадки. Самонесущая рама позволяет выбирать опцию
                      отверстия («почтовый ящик») под доклевеллером открытого или закрытого приямочного типа. Передняя
                      балка нижней рамы также служит защитой для гидравлической и механической систем, установленных в
                      нижней части перегрузочного моста.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Привод'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Гидравлическая система, использующая логическую блок-систему, действует на разнице в давлении для
                      движения платформы с помощью двух гидравлических цилиндров (Øbu 65 мм). Аппарель снабжена
                      отдельным самопогашаемым цилиндром (Øbu 55 мм).
                    </p>
                    <p className='text'>
                      Система полностью герметична, что защищает ее от повреждений в условиях повышенной пыли, песка и
                      других мусорных элементов. Большие размеры цилиндров обеспечивают низкое рабочее давление,
                      примерно 70 Бар. Главный хромированный цилиндр с двойными уплотнителями выдерживает давление до
                      1200 Бар, а хромированный цилиндр аппарели и шланги рассчитаны на 600 Бар. В гидравлическом шланге
                      главного цилиндра установлен клапан, предотвращающий разрыв.
                    </p>
                    <p className='text'>
                      Компактная гидравлическая станция, размещенная под платформой доклевеллера, связана с двумя
                      цилиндрами через два коротких гидравлических шланга (примерно 750 мм каждый), что полностью
                      исключает повреждение станции под воздействием внешних сил.
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
              <ComponentAccordion accordionTitle='Технические спецификации'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>Нормы</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Грузоподъемность (EN 1398)</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Длина аппарели</p>
                        <p className='text'>Угол между платформой и аппарелью</p>
                        <p className='text'>Мотор </p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Управляющий ток</p>
                        <p className='text'>Класс защиты</p>
                        <p className='text'>Закрытая гидравлическая система</p>
                        <p className='text'>Внешний диаметр главного цилиндра</p>
                        <p className='text'>Внешний диаметр цилиндра аппарели</p>
                        <p className='text'>Температура эксплуатации между</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>CE -маркировка</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>100 кН</p>
                        <p className='text'>600 мм</p>
                        <p className='text'>400 мм</p>
                        <p className='text'>(примерно 4°) 45 мм</p>
                        <p className='text'>0,75 кВт</p>
                        <p className='text'>400 V / 50 Гц / 2,5 A</p>
                        <p className='text'>24 VDC</p>
                        <p className='text'>IP 54</p>
                        <p className='text'>примерно 100 Бар</p>
                        <p className='text'>65 мм</p>
                        <p className='text'>45 мм</p>
                        <p className='text'>-30° и +50° по Цельсию</p>
                        <p className='text'>(черный) RAL 9005</p>
                      </div>
                    </div>
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
                      <li>Большое количество монтажных вариантов</li>
                      <li>Доклевеллер 232 100кН в качестве пит-бокс модели</li>
                      <li>Более длинная аппарель</li>
                      <li>Аппарель со скошенными краями</li>
                      <li>Антискользящее покрытие Mandurax</li>
                      <li>Оцинковка горячим способом</li>
                      <li>Уплотняющий профиль с трех сторон доклевеллера для защиты от сквозняка</li>
                      <li>Цвет RAL на выбор</li>
                      <li>Возвращение в исходную позицию посредством нажатия на кнопку</li>
                      <li>Комплексная система безопасности – доклевеллер/промышленные ворота</li>
                      <li>Повышение IP-значения</li>
                      <li>Другое напряжение</li>
                      <li>Оборудование нижней стороны платформы изоляционными полосками из пенополистирола</li>
                      <li>
                        Выключатель для управления светофорами, промышленными воротами и т.д. при нахождении
                        доклевеллера в исходной позиции
                      </li>
                      <li>Пульт управления, включая возможность управления промышленными воротами</li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Мост с откидной аппарелью 232M (100kN)</h3>
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
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Мост с выдвижной аппарелью 233NG (60kN)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PoweRamp 233NG - новое поколение электрогидравлических перегрузочных мостов с телескопической
                  аппарелью.
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
                      С использованием четырех кнопок можно легко регулировать позицию платформы и телескопической
                      аппарели на перегрузочном мосту 233NG. Гидравлический агрегат активирует как платформу, так и
                      аппарель независимо друг от друга. Для управления перегрузочным мостом 233NG достаточно простых
                      действий. Удерживая кнопку "Вверх", платформа поднимается до нужной высоты для загрузки. Затем, с
                      помощью кнопки "Выдвинуть", аппарель выдвигается для соединения с полом кузова грузового
                      транспортного средства. После отпускания кнопки обе части автоматически опускаются на пол
                      грузовика.
                    </p>
                    <p className='text'>
                      В выдвинутой позиции телескопическая аппарель блокируется, предотвращая отсоединение от пола
                      кузова во время операций погрузки и разгрузки. Перегрузочный мост автоматически повторяет движения
                      транспортного средства в процессе погрузки или разгрузки. Завершив процесс, можно легко вернуть
                      перегрузочный мост в исходное положение с помощью кнопки "R". После возврата в исходное положение
                      доклевеллер 233NG обеспечивает устойчивость, позволяя поперечное движение. Этот перегрузочный мост
                      идеально подходит для погрузки или разгрузки "последнего груза" ниже уровня площадки.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/overloadControl2.png'
                      alt='overloadControl2'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Варианты монтажа'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Для удовлетворения индивидуальных потребностей заказчика и учета архитектурных особенностей
                      зданий, Loading Systems предлагает разнообразные элементы для монтажа, такие как подвесные рамы,
                      модели пит-бокса, бетонные рамы, стальные опалубки, сборные железобетонные элементы, рамы для
                      предварительной установки в бетонной нише и изолированные модели. Правильный выбор элементов
                      позволяет значительно сэкономить средства на строительстве. По запросу доступны подробные
                      монтажные чертежи.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <img
                      src='/mountingOptions2.png'
                      alt='mountingOptions2'
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
              <ComponentAccordion accordionTitle='Материалы'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Платформа и аппарель изготовлены из качественного рифленого листа: рифленый лист 8/10 для
                      платформы и рифленый лист 12/14 для аппарели. Аппарель доклевеллера PoweRamp 233NG укреплена по
                      длине шестью профилями, а перегрузочные мосты с шириной более 2000 мм укрепляются 8 профилями,
                      обеспечивая надежное соединение с полом кузова грузового автомобиля. Платформа легко повторяет
                      движения транспортного средства во время погрузки или разгрузки.
                    </p>
                    <p className='text'>
                      Задняя часть платформы крепится к нижней раме через три шарнира. Дополнительная поддержка
                      платформы установлена между шарнирами для обеспечения надежного соединения с рамой приямки.
                      Благодаря самонесущим свойствам рамы можно выбрать опцию "почтового ящика" под доклевеллером
                      открытого или закрытого приямочного типа. Передняя балка рамы также служит защитой для
                      гидравлической и механической систем, установленных в нижней части перегрузочного моста.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Привод'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Платформа двигается с использованием одного гидравлического цилиндра с хромированным поршнем и
                      двойным уплотнением, а телескопическая аппарель управляется отдельным цилиндром двойного действия.
                      Гидравлическая система полностью закрыта, что исключает повреждения даже в самых экстремальных
                      условиях, таких как пыль, песок или другие мусорные частицы. Низкое рабочее давление, около 100
                      Бар, обеспечивается благодаря большим размерам цилиндров.
                    </p>
                    <p className='text'>
                      Компактный гидравлический агрегат устанавливается на платформе доклевеллера, что предотвращает
                      повреждение гидравлической станции от воздействия внешних сил. Все вышеупомянутые характеристики
                      обеспечивают безопасность гидравлической системы и продлевают ее срок службы при минимальной
                      потребности в техническом обслуживании.
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
              <ComponentAccordion accordionTitle='Технические спецификации'>
                <div className='accordionContainer'>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>Нормы</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Грузоподъемность (EN 1398)</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Длина аппарели</p>
                        <p className='text'>Угол между платформой и аппарелью</p>
                        <p className='text'>Мотор </p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Управляющий ток</p>
                        <p className='text'>Класс защиты</p>
                        <p className='text'>Закрытая гидравлическая система</p>
                        <p className='text'>Внешний диаметр главного цилиндра</p>
                        <p className='text'>Внешний диаметр цилиндра аппарели</p>
                        <p className='text'>Температура эксплуатации между</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>CE -маркировка</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>60 кН</p>
                        <p className='text'>700 мм</p>
                        <p className='text'>0-500 мм</p>
                        <p className='text'>(примерно 5°) 25 мм</p>
                        <p className='text'>0,75 кВт</p>
                        <p className='text'>400 V / 50 Гц / 2,5 A</p>
                        <p className='text'>24 V DC</p>
                        <p className='text'>IP 54</p>
                        <p className='text'>примерно 100 Бар</p>
                        <p className='text'>65 мм</p>
                        <p className='text'>50 мм</p>
                        <p className='text'>-30° и +50° по Цельсию</p>
                        <p className='text'>(черный) RAL 9005</p>
                      </div>
                    </div>
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
                      <li>Большое количество монтажных вариантов</li>
                      <li>Специальные размеры</li>
                      <li>Грунтовка</li>
                      <li>Антискользящее покрытие Mandurax для платформы и аппарели</li>
                      <li>Цвет RAL по выбору</li>
                      <li>Нижняя сторона платформы оснащена PU-изоляцией</li>
                      <li>Другое напряжение</li>
                      <li>Двойной цилиндр платформы</li>
                      <li>Аппарель со скошенными краями</li>
                      <li>Выдвижные боковые сегменты 1:1</li>
                      <li>Более длинная аппарель (от длины доклевеллера 2500 мм)</li>
                      <li>Оцинковка горячим способом</li>
                      <li>Система безопасности доклевеллер/промышленные ворота</li>
                      <li>Повышенное IP-значение</li>
                      <li>Уплотняющие профили с трех сторон доклевеллера для предотвращения сквозняка</li>
                      <li>Выключатель исходного положения для управления светофором, воротами и т.д.</li>
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
              <ComponentAccordion accordionTitle='Стандартные технические средства защиты'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        Полная остановка гидравлической системы в аварийных ситуациях, осуществляемая посредством
                        предохранительных клапанов в шлангах цилиндров
                      </li>
                      <li>Выключатель аварийной остановки с перезагрузкой (анти-паника)</li>
                      <li>Зафиксированная защита для ног персонала</li>
                      <li>Прочные регулируемые опоры для поперечного движения</li>
                      <li>Черная/желтая предупреждающая маркировка</li>
                      <li>Фиксируемая ремонтная подпорка</li>
                      <li>Защита мотора при помощи теплового реле</li>
                      <li>Система управления оснащена поясняющими пиктограммами</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='accordionFile'>
              <div className='secondaryTitle'>
                <h3 className='title'>Мост с откидной аппарелью 232NG (60kN)</h3>
              </div>
              <Button
                className='download'
                onClick={handleDownloadSectionalDoors}
              >
                Скачать
              </Button>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Мост с выдвижной аппарелью 233M (100kN)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PoweRamp 233 с грузоподъемностью 100 кН – это электрогидравлический перегрузочный мост от Loading
                  Systems с выдвижной аппарелью и увеличенной грузоподъемностью. Платформа и аппарель оборудованы
                  гидравлическим приводом. Этот перегрузочный мост, обладающий CE маркировкой, соответствует всем
                  требованиям безопасности Европейской директивы EN 1398. Стандартная грузоподъемность 100 кН рассчитана
                  с учетом минимальной площади контакта колеса (150 x 150 мм) и максимального угла наклона платформы
                  (12,5%), согласно Европейской норме EN 1398.
                </p>
              </div>
            </div>
          </div>

          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/bridgeInRetractableAparelle.png'
                alt='bridgeInRetractableAparelle'
                className='img'
              />
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
                        <p className='title'>Нормы</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Грузоподъемность (EN 1398)</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Длина аппарели</p>
                        <p className='text'>Угол между платформой и аппарелью</p>
                        <p className='text'>Мотор </p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Управляющий ток</p>
                        <p className='text'>Класс защиты</p>
                        <p className='text'>Закрытая гидравлическая система</p>
                        <p className='text'>Внешний диаметр главного цилиндра</p>
                        <p className='text'>Внешний диаметр цилиндра аппарели</p>
                        <p className='text'>Температура эксплуатации между</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>CE -маркировка</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>100 кН</p>
                        <p className='text'>700 мм</p>
                        <p className='text'>0-500 мм</p>
                        <p className='text'>(примерно 5°) 25 мм</p>
                        <p className='text'>0,75 кВт</p>
                        <p className='text'>400 V / 50 Гц / 2,5 A</p>
                        <p className='text'>24 VDC</p>
                        <p className='text'>IP 54</p>
                        <p className='text'>примерно 100 Бар</p>
                        <p className='text'>65 мм</p>
                        <p className='text'>50 мм</p>
                        <p className='text'>-30° и +50° по Цельсию</p>
                        <p className='text'>(черный) RAL 9005</p>
                      </div>
                    </div>
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
                      <li>Большое количество монтажных вариантов</li>
                      <li>Доклевеллер в качестве пит-бокс модели</li>
                      <li>Специальные размеры и/или рабочий диапазон</li>
                      <li>Более длинная аппарель (от длины доклевеллера 2500 мм)</li>
                      <li>Аппарель со скошенными краями</li>
                      <li>Антискользящее покрытие Mandurax</li>
                      <li>Оцинковка горячим способом</li>
                      <li>Оси шарниров из нержавеющей стали</li>
                      <li>Оборудование нижней стороны платформы изоляцией из пенополистирола</li>
                      <li>Цвет RAL по выбору</li>
                      <li>Система безопасности доклевеллер/промышленные ворота</li>
                      <li>Пульт управления, включая управление воротами</li>
                      <li>Повышенное IP-значение</li>
                      <li>Другое напряжение</li>
                      <li>Уплотняющие профили с трех сторон доклевеллера для предотвращения сквозняка</li>
                      <li>Выключатель исходного положения для управления светофором, воротами и т.д.</li>
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
              <ComponentAccordion accordionTitle='Стандартные технические средства защиты'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>
                        Полная остановка гидравлической системы в аварийных ситуациях, осуществляемая посредством
                        предохранительных клапанов в шлангах цилиндров
                      </li>
                      <li>Выключатель аварийной остановки с перезагрузкой (анти-паника)</li>
                      <li>Зафиксированная защита для ног персонала</li>
                      <li>Прочные регулируемые опоры для поперечного движения</li>
                      <li>Черная/желтая предупреждающая маркировка</li>
                      <li>Фиксируемая ремонтная подпорка</li>
                      <li>Защита мотора при помощи теплового реле</li>
                      <li>Система управления оснащена поясняющими пиктограммами</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='accordionFile'>
              <div className='secondaryTitle'>
                <h3 className='title'>Мост с откидной аппарелью 232NG (60kN)</h3>
              </div>
              <Button
                className='download'
                onClick={handleDownloadSectionalDoors}
              >
                Скачать
              </Button>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Перегрузочный тамбур</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Перегрузочный тамбур от Loading Systems – это инновационная альтернатива традиционным приямочным
                  системам, идеально подходящая для расширения складских помещений. Экономически выгодный выбор по
                  сравнению с установкой обычных перегрузочных мостов, он также эффективно повышает энергоэффективность.
                  Модульная концепция делает этот перегрузочный тамбур универсальным решением для различных потребностей
                  клиента.
                </p>
                <ul>
                  <li>Перегрузочный мост с откидной или выдвижной аппарелью</li>
                  <li>Занавесочный или надувной герметизатор проема</li>
                  <li>Ступенчатые рамы</li>
                  <li>Решение ISO - док</li>
                  <li>Расположение в виде связанных блоков</li>
                  <li>Расположение под углом</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/reloadingVestibule.png'
                alt='reloadingVestibule'
                className='img'
              />
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
                      <div className='infoBox'>
                        <p className='taxt'>Стандартная длина</p>
                        <p className='taxt'>Стандартная ширина</p>
                        <p className='taxt'>Высота перрона</p>
                        <p className='taxt'>Грузоподъемность</p>
                        <p className='taxt'>Стандартный цвет </p>
                        <p className='taxt'>Отвод воды</p>
                        <p className='text'>Максимальная нагрузка от ветра (еврокод 3)</p>
                        <p className='text'>Максимальная нагрузка от снега (еврокод 3)</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoBox'>
                        <p className='text'>2080, 2580, 3080, мм</p>
                        <p className='text'>3000 до 3500 мм</p>
                        <p className='text'>950 до 1500 мм</p>
                        <p className='text'>60 кН</p>
                        <p className='text'>RAL 9005</p>
                        <p className='text'>стандартно на передней стороне</p>
                        <p className='text'>0,84 кН/м2</p>
                        <p className='text'>2 кН/м2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='accordionFile'>
              <div className='secondaryTitle'>
                <h3 className='title'>Перегрузочный тамбу</h3>
              </div>
              <Button
                className='download'
                onClick={handleDownloadSectionalDoors}
              >
                Скачать
              </Button>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default PageDockLevelers;
