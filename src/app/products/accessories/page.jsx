"use client";
import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import Button from "@/components/UI/Button";

const PageAccessories = () => {
  const handleFoldingGatesCatalog = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageAccessories'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Противооткатные башмаки</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Колесные противооткатные башмаки от Loading Systems повышают безопасность во время
                  погрузочно-разгрузочных операций. Их установка перед колесами транспортного средства является
                  экономически выгодным решением. Металлические и двойные колесные башмаки могут быть подключены к блоку
                  управления, связанному с перегрузочным мостом, промышленными воротами, светофорами (снаружи) и
                  сигнальными лампами (внутри). После установки башмака можно безопасно открывать ворота и начинать
                  управление доклевеллером. В этот момент светофор снаружи переключается на красный, а внутренняя лампа
                  становится зеленой. При снятии башмаков светофор снаружи снова становится зеленым, а внутренняя лампа
                  переключается на красный, предупреждая о небезопасности погрузочно-разгрузочного процесса.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3 className='title'>Металлические противооткатные башмаки</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Колесный башмак из металла обладает высокой прочностью и включает датчик, регистрирующий установку
                  транспортного средства после установки башмака.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/metalBoots.png'
                alt='metalBoots'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Технические спецификации</h4>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Подключение</p>
                    <p className='text'>Спиральный кабель</p>
                    <p className='text'>Стандартный цвет</p>
                    <p className='text'>Класс защиты</p>
                    <p className='text'>Коробка для подключения, закрепляемая на стене </p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>24 V/DC</p>
                    <p className='text'>растягивается до 8м</p>
                    <p className='text'>RAL 1023</p>
                    <p className='text'>IP54</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Опции</h4>
              </div>
              <div className='sectiontext'>
                <p className='text'>Гальванизированная цепь (5 м) для защиты от кражи, закрепляемая на стене</p>
                <p className='text'>
                  Монтажные инструменты и табличка остановки для повышения безопасности, перемещаемые на колесах
                </p>
                <p className='text'>Оцинковка горячим способом</p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3 className='title'>Резиновые противооткатные башмаки</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Данные колесные башмаки сделаны из прочной резины и оснащены рым-болтом, также доступны в симметричной
                  модели и стандартном черном цвете.
                </p>
              </div>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Опции</h4>
              </div>
              <div className='sectiontext'>
                <ul>
                  <li>Гальванизированная цепь (5 м) для защиты от кражи, закрепляемая на стене</li>
                  <li>Кронштейн для крепления к стене</li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='secondaryTitle'>
                <h4 className='title'>Двойные противооткатные башмаки</h4>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Эти колесные башмаки выполнены из крепкой резины с рым-болтом и представлены в симметричном дизайне.
                  Основной цвет - черный.
                </p>
              </div>
              <div className='sectionSubtitle'>
                <div className='subtitle'>Технические спецификации </div>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Стандартный цвет</p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>RAL 1023</p>
                  </div>
                </div>
              </div>
              <div className='sectionText'>
                <p className='text'>Гальванизированная цепь (5 м) для защиты от кражи, закрепляемая на стене</p>
              </div>

              <div className='sectionSubtitle'>
                <div className='subtitle'>Опции</div>
              </div>
              <div className='sectionText'>
                <ul>
                  <li>Оптический датчик; спиральный кабель, растягиваемый до 8 метров, и коробка для подключения</li>
                  <li>Оцинковка горячим способом</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='accordionFile'>
              <div className='secondaryTitle'>
                <h3 className='title'>Колесные башмаки</h3>
              </div>
              <Button
                className='download'
                onClick={handleFoldingGatesCatalog}
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
                <h3 className='title'>Доковый прожектор</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Доковые LED прожекторы компании Loading Systems обеспечивают яркое и равномерное освещение кузова
                  транспортного средства по всей длине и позволяют предотвратить травмы и повреждения груза и самого
                  транспортного средства во время погрузочно-разгрузочных процессов. Их удобно подключать к контактной
                  коробке на стене или к пульту управления перегрузочным мостом, надувным докшелтером или промышленными
                  воротами. Эти компактные LED прожекторы могут быть установлены стационарно или на поворотном
                  кронштейне, а также легко закрепляются на существующей опоре.
                </p>
              </div>
              <div className='secondaryTitle'>
                <h4 className='title'>Доковый прожектор LED 220VAC</h4>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title    '>Долгий срок службы и энергосбережение</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Средний срок службы твердотельного светодиода составляет 50 000 часов без необходимости замены лампы.
                  Доковый прожектор LED от Loading Systems потребляет всего 16 Вт для работы, обеспечивая экономию
                  энергии на 89% по сравнению с доковым прожектором на лампе накаливания мощностью 150 Вт.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/dockFloodlight.png'
                alt='dockFloodlight'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Материалы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Модульный доковый прожектор LED обеспечивает яркое и равномерное освещение всей длины транспортного
                  средства. Прочный корпус из литого алюминия окрашен в сигнальный желтый цвет для максимальной
                  видимости. Небольшие размеры корпуса снижают вероятность столкновения с транспортным средством. Кроме
                  того, корпус остается прохладным во время эксплуатации. Благодаря отсутствию накаливания в источнике
                  света, доковый прожектор LED обладает высокой прочностью и даже при случайном столкновении остается
                  неповрежденным.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Опции</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>Желтая двойная опора на шарнирах для крепления докового прожектора</p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Технические спецификации</h4>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Нормы</p>
                    <p className='text'>Эксплуатационный срок</p>
                    <p className='text'>Энергопотребление</p>
                    <p className='text'>Подключение</p>
                    <p className='text'>Угол излучения</p>
                    <p className='text'>Линза</p>
                    <p className='text'>Минимальная температура использования</p>
                    <p className='text'>Максимальная температура использования</p>
                    <p className='text'>Класс защиты</p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>CE</p>
                    <p className='text'>50.000 часов</p>
                    <p className='text'>16 W</p>
                    <p className='text'>110/240V AC, 50/60Гц</p>
                    <p className='text'>± 15º</p>
                    <p className='text'>ударопрочный акрил (не стекло)</p>
                    <p className='text'>-30º C</p>
                    <p className='text'>40º C</p>
                    <p className='text'>IP65</p>
                  </div>
                </div>
              </div>
              <div className='sectionText'>
                <p className='text'>Монтажный кронштейн стальной с отверстием 13 мм для крепления</p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='sectiontext'>
                <ul>
                  <li>Потребление энергии на 89% меньше, чем у моделей 150W</li>
                  <li>Ударопрочные акриловые линзы</li>
                  <li>Крепкий металлический корпус и твердотельный источник света</li>
                  <li>Во время использования корпус остается прохладным</li>
                  <li>Доковый прожектор легко монтируется к уже имеющейся опоре</li>
                  <li>
                    Тип LED имеет долгий эксплуатационный срок (в среднем 50.000 часов) и обеспечивает яркое равномерное
                    освещение
                  </li>
                </ul>
              </div>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Доковый прожектор LED 220VAC</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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
              <div className='secondaryTitle'>
                <h4 className='title'>Доковый прожектор LED 12 VDC</h4>
              </div>
              <div className='sectionTitle'>
                <h3 className='title'>Долгий срок службы и энергосбережение</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Средний срок службы твердотельного светодиода составляет 50 000 часов без необходимости замены лампы.
                  Доковый прожектор LED от Loading Systems потребляет всего 16 Вт для работы, обеспечивая экономию
                  энергии на 89% по сравнению с доковым прожектором на лампе накаливания мощностью 150 Вт.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/dockFloodlight2.png'
                alt='dockFloodlight2'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Материалы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Модульный доковый прожектор LED обеспечивает яркое и равномерное освещение транспортного средства на
                  всей его длине. Корпус из черного пластика оснащен удобной ручкой для переноски, а алюминиевый
                  радиатор обеспечивает эффективное охлаждение в процессе использования. Усиленные точки крепления
                  повышают надежность. Благодаря отсутствию накаливания в источнике света, прожектор LED обладает
                  высокой прочностью, даже при случайных столкновениях сохраняя свою неповрежденность. Прочный корпус из
                  литого алюминия окрашен в сигнальный желтый цвет для обеспечения максимальной видимости, а также может
                  быть оцинкован.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Опции</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  (920-000950) Трансформатор 24W 220V AC / 12V DC для блока управления(920-000961) Блок управления
                  докового осветителя IP65 с выключателем
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Технические спецификации</h4>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Нормы</p>
                    <p className='text'>Размеры светильника (LxWxH)</p>
                    <p className='text'>Размеры с поворотным рычагом (LxWxH)</p>
                    <p className='text'>Эксплуатационный срок</p>
                    <p className='text'>Энергопотребление</p>
                    <p className='text'>Количество ламп LED</p>
                    <p className='text'>Напряжение</p>
                    <p className='text'>Световой поток</p>
                    <p className='text'>Цветовая температура</p>
                    <p className='text'>Класс защиты</p>
                    <p className='text'>Вес набора</p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>CE</p>
                    <p className='text'>76x110x181 mm</p>
                    <p className='text'>1115x110x310 mm</p>
                    <p className='text'>50.000 часов</p>
                    <p className='text'>24 W</p>
                    <p className='text'>6</p>
                    <p className='text'>12 VDC</p>
                    <p className='text'>1500 lm</p>
                    <p className='text'>5000-7000 K</p>
                    <p className='text'>IP68</p>
                    <p className='text'>5 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='sectiontext'>
                <ul>
                  <li> Потребление энергии на 84% меньше, чем у моделей 150W</li>
                  <li>
                    Тип LED имеет долгий эксплуатационный срок (в среднем 50.000 часов) и обеспечивает яркое равномерное
                    освещение
                  </li>
                  <li>Подключение 12 вольт через трансформатор</li>
                  <li>Встроенная ручка</li>
                  <li>Водонепроницаемый корпус и твердотельный источник света</li>
                  <li>Поворотный кронштейн может быть 2 видов: оцинкованный и окрашенный в цвет рал 1023 желтый</li>
                  <li>В комплект поставки входит комплект с осветителем, поворотным кронштейном и проводами</li>
                </ul>
              </div>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Доковый прожектор LED 12 VDC</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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
                <h3 className='title'>Доковые светофоры</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Светофоры LED обеспечивают эффективное регулирование с помощью световых сигналов, повышая уровень
                  безопасности вокруг и на погрузочно-разгрузочной платформе. Простое подключение к блоку управления для
                  перегрузочного моста, надувного докшелтера или секционных ворот обеспечивает удобство использования.
                  При открытии ворот или управлении оборудованием светофор снаружи переключается с зеленого на красный,
                  давая понять, что процесс начат. По завершению операции и закрытии ворот, светофор снова переходит с
                  красного на зеленый, сигнализируя о завершении и готовности для отъезда транспортного средства.
                  Внутренний блок управления может также быть оснащен световыми сигналами, синхронизированными с
                  внешними светофорами. Это обеспечивает комплексную систему управления, которая может взаимодействовать
                  с колесными башмаками или датчиками обнаружения транспортных средств.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/trafficLights.png'
                alt='trafficLights'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Материалы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Светофоры LED обеспечивают высокую видимость и интенсивное освещение, прочны, устойчивы к ударам, и
                  обладают водонепроницаемым корпусом (IP 65). Эти доковые светофоры обеспечивают долгий срок службы
                  более 50 000 часов и характеризуются низким энергопотреблением.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Опции</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>Сигнальные лампы, расположенные на блоке управления внутри помещения.</p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Технические спецификации</h4>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Нормы</p>
                    <p className='text'>Подключение</p>
                    <p className='text'>Длина волны</p>
                    <p className='text'>Класс защиты</p>
                    <p className='text'>934-151</p>
                    <p className='text'>Срок службы</p>
                    <p className='text'>Энергопотребление</p>
                    <p className='text'>Количество LED</p>
                    <p className='text'>Интенсивность света</p>
                    <p className='text'>934-152</p>
                    <p className='text'>Срок службы</p>
                    <p className='text'>Энергопотребление</p>
                    <p className='text'>Количество LED</p>
                    <p className='text'>Интенсивность света</p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>CE</p>
                    <p className='text'>12V/24V DC, 110V/220V AC, 50/60Гц</p>
                    <p className='text'>красный 625±5 nm / зеленый 505±5 nm</p>
                    <p className='text'>IP65</p>
                    <p className='text'>934-151</p>
                    <p className='text'>50.000 – 80.000 часов</p>
                    <p className='text'>= 12 W</p>
                    <p className='text'>красный и зеленый свет каждый 45 штук</p>
                    <p className='text'>красный 150 cd и зеленый 300 cd</p>
                    <p className='text'>934-152</p>
                    <p className='text'> 50.000 часов</p>
                    <p className='text'>= 21 W</p>
                    <p className='text'>красный и зеленый свет каждый 90 штук</p>
                    <p className='text'>красный 300 cd зеленый 500 cd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Размеры</h4>
              </div>
              <div className='sectiontext'>
                <p className='text'>
                  Светофоры доступны в двух моделях с различными размерами линз: 100 мм и 200 мм в диаметре.
                </p>
              </div>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='sectiontext'>
                <ul>
                  <li>Энергосбережение</li>
                  <li>Интенсивный световой поток</li>
                  <li>Износостойкость и долгий срок службы</li>
                  <li>Высокая ударопрочность</li>
                  <li>Минимальное тепловыделение</li>
                  <li>Водонепроницаемый корпус (IP 65)</li>
                  <li>Экологичность</li>
                  <li>Поставляются в двух различных моделях</li>
                  <li>
                    Возможность подключения к электропитанию с различным напряжением благодаря встроенному
                    трансформатору
                  </li>
                </ul>
              </div>

              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Варианты монтажа</h4>
              </div>
              <div className='sectiontext'>
                <p className='text'>
                  Благодаря встроенному трансформатору доковые светофоры могут быть подключены к источникам
                  электропитания с различными напряжениями, что делает этот продукт универсальным для новых и
                  существующих проектов. Маленькая модель крепится к задней стороне стены, в то время как большая модель
                  устанавливается на стену при помощи регулируемого монтажного кронштейна.
                </p>
              </div>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Доковый прожектор LED 12 VDC</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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
                <h3 className='title'>Маркировочные столбики</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Маркировочные столбики спроектированы для выдерживания экстремальных нагрузок и предназначены для
                  защиты ворот, стен здания, рамп погрузочно-разгрузочных устройств и оборудования от повреждений. Они
                  также применяются для обозначения безопасных рабочих зон. Маркировочные столбики предлагаются в двух
                  вариантах: для крепления на поверхности и для бетонирования. Модель для бетонирования может быть
                  установлена в бетон на глубину 400 мм или в предварительно установленную бетонную трубу, что позволяет
                  легко временно удалять столбики. Модель для монтажа на поверхности оснащена крепежной пластиной с
                  четырьмя отверстиями.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/markingPosts.png'
                alt='markingPosts'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Модели и опции</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  <span className='textBold'>Модель 1 </span>с диаметром 76 мм предназначена для использования с
                  гидравлическими тележками и рекомендуется устанавливать вдоль проходных дорожек.
                </p>
                <p className='text'>
                  <span className='textBold'>Модель 2 </span>имеющая диаметр 168 мм, предназначена для вилочных
                  погрузчиков и рекомендуется для установки на рампы с перегрузочным мостом.
                </p>
                <p className='text'>
                  <span className='textBold'>Модель 3 </span>с диаметром 270 мм, используется, когда грузовые автомобили
                  заезжают внутрь здания, и рекомендуется для больших рамп без перегрузочного моста.
                </p>
                <p className='text'>
                  Также доступен опциональный монтажный набор для маркировочных столбиков с крепежными пластинами.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Материалы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Маркировочные столбики выполнены из оцинкованной металлической трубы и окрашены в сигнальный желтый
                  цвет (RAL 1023). Верхняя часть столбика имеет округлую форму для оптимального стока воды.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='accordionText'>
                <ul>
                  <li>Благодаря закругленной форме верхней части, обеспечивается сток воды.</li>
                  <li>Представлены варианты с тремя различными диаметрами.</li>
                  <li>Поставляются в модификациях для бетонирования и с крепежной пластиной.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Защитные столбики </h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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
                <h3 className='title'>Колесные направляющие</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Колесные направляющие предназначены для корректной парковки грузовых автомобилей перед
                  погрузочно-разгрузочной платформой, минимизируя риск повреждений здания, перегрузочного моста,
                  герметизатора проема и самого транспортного средства. Рекомендуется использовать колесные направляющие
                  в сочетании с широкими доклевеллерами, докшелтерами надувного типа или подушками, поскольку правильное
                  расположение транспортного средства крайне важно при использовании этих продуктов.
                </p>
                <p className='text'>
                  Стандартные колесные направляющие, оцинкованные горячим способом, предлагаются в версиях для
                  бетонирования и для крепления на поверхности. Модель для бетонирования устанавливается в бетонный
                  фундамент, в то время как модель для установки на поверхности оснащена крепежной пластиной и
                  монтажными отверстиями.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/wheelGuides3.png'
                alt='wheelGuides3'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Модели</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>Колесные направляющие представлены в нескольких вариантах:</p>
                <ul>
                  <li>
                    Модель для установки на поверхности с крепежными пластинами. Изготовлены из высококачественной трубы
                    диаметром 170 мм, доступны в изогнутом (970-011) или прямом исполнении (970-012). Предлагается
                    монтажный набор как опция.
                  </li>
                  <li>
                    Модель для бетонирования с анкерным креплением в бетоне. Изготовлены из трубы диаметром 170 мм,
                    доступны в изогнутом (970-013) или прямом исполнении (970-014).
                  </li>
                  <li>
                    Низкая модель с крепежными пластинами. Изготовлены из трубы диаметром 140 мм, доступны в изогнутом
                    (970-030) или прямом исполнении (970-025).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/model3.png'
                alt='model3'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='accordionText'>
                <ul>
                  <li>Используются для строительства как новых, </li>
                  <li>так и существующих зданий. </li>
                  <li>
                    Разнообразные модели, предназначенные для бетонирования или крепления на поверхности,
                    предоставляются в различных размерах.
                  </li>
                  <li>Стандартно окрашены методом горячего оцинковывания.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Колесные направляющие</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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
                <h3 className='title'>CombiControl 930</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  CombiControl 930 - это универсальный блок управления для координации работы погрузочно-разгрузочного
                  оборудования, такого как перегрузочный мост PoweRamp, герметизатор проема PowerShelter и промышленные
                  ворота PowerDoor. Благодаря модульной концепции CombiControl 930 легко расширяется различными опциями,
                  повышающими уровень безопасности вокруг и на платформе. Этот блок управления соответствует всем
                  европейским нормам и обладает сертификацией CE, обеспечивая высокое качество и соответствие
                  безопасности стандартам.
                </p>
              </div>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Стандартные спецификации</h4>
              </div>
              <div className='sextionText'>
                <p className='text'>
                  Блок управления CombiControl 930 обладает классом защиты IP 54 и оснащен главным выключателем питания,
                  который защищен замком. Это обеспечивает возможность одним действием отключить электропитание для всех
                  устройств, подключенных к CombiControl, в случае аварии. Висящий замок также предотвращает
                  несанкционированное использование блока управления CombiControl 930. CombiControl стандартно
                  предназначен для работы в трехфазных сетях с напряжением между фазами 400 В. В этом случае необходимо
                  использовать нулевой и заземляющий проводники. Обозначение для такой 3-фазной сети - 3 N E 400V AC.
                  Тем не менее, блок управления CombiControl 930 также может быть подключен к сетям с другими фазами без
                  предварительной адаптации, такими как: 3 N E 230V AC или 1 N E 230V AC.
                </p>
              </div>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'> Последовательное подключение</h4>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  CombiControl функционирует на основе принципа последовательного подключения, предотвращая повреждение
                  систем погрузки и разгрузки:
                </p>
                <ul>
                  <li>
                    Подключение перегрузочного моста PoweRamp и промышленных ворот PowerDoor: Доклевеллер PoweRamp может
                    быть "освобожден" только после полного открытия промышленных ворот PowerDoor. Это исключает
                    возможность повреждения продукции из-за неправильного управления.
                  </li>
                  <li>
                    Подключение герметизатора проема PowerShelter и промышленных ворот PowerDoor: Промышленные ворота
                    PowerDoor могут открыться только после активации надувного док-шелтера PowerShelter. Это
                    предотвращает сквозняк и холодное проникновение внутрь помещения.
                  </li>
                  <li>
                    Подключение перегрузочного моста PoweRamp, герметизатора проема PowerShelter и промышленных ворот
                    PowerDoor: Промышленные ворота PowerDoor открываются только после активации надувного док-шелтера
                    PowerShelter. После полного открытия ворот можно управлять перегрузочным мостом PoweRamp. Такая
                    последовательность исключает не только повреждение оборудования из-за неправильного управления, но и
                    предотвращает проникновение холода и сквозняка внутрь помещения.
                  </li>
                </ul>
              </div>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Колесные направляющие</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/combiControl.png'
                alt='combiControl'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Комбинирование прочих погрузочно-разгрузочных систем</h4>
              </div>
              <div className='sectionText'>
                <ul>
                  <li>Светофоры и сигнальные лампы</li>
                  <li>Доковые прожекторы</li>
                  <li>Система обнаружения транспортных средств</li>
                  <li>Сигнал тревоги</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Опции</h4>
              </div>
              <div className='sectionText'>
                <ul>
                  <li>Блок управления с IP 64</li>
                  <li>Евроштекер к CombiControl</li>
                  <li>Светофор красный/зеленый</li>
                  <li>Сигнальные лампы красный/зеленый</li>
                  <li>Доковые прожекторы</li>
                  <li>Колесный башмак</li>
                  <li>Защитное ограждение</li>
                  <li>Звуковая сигнализация</li>
                  <li>Другое напряжение</li>
                  <li>Датчик обнаружения транспортного средства</li>
                  <li>Дистанционное управление для промышленных ворот PowerDoor</li>
                  <li>Модульное расширение дополнительными системами безопасности для промышленных ворот PowerDoor</li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Характеристики</h4>
              </div>
              <div className='accordionText'>
                <ul>
                  <li>Используются для строительства как новых, </li>
                  <li>так и существующих зданий. </li>
                  <li>
                    Разнообразные модели, предназначенные для бетонирования или крепления на поверхности,
                    предоставляются в различных размерах.
                  </li>
                  <li>Стандартно окрашены методом горячего оцинковывания.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Колесные направляющие</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
                >
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionSubtitle'>
                <h4 className='subtitle'>Технические спецификации</h4>
              </div>
              <div className='accordionBoxInfo'>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>Нормы</p>
                    <p className='text'>Высота</p>
                    <p className='text'>Ширина</p>
                    <p className='text'>Толщина</p>
                    <p className='text'>
                      Блок управления CombiControl PoweRamp 232/233 & (PowerShelter 403E /407) & PowerDoor 601
                    </p>
                    <p className='text'>Высота</p>
                    <p className='text'>Ширина</p>
                    <p className='text'>Толщина</p>
                    <p className='text'>Подключение</p>
                    <p className='text'>Класс защиты</p>
                    <p className='text'>Диапазон температуры</p>
                  </div>
                </div>
                <div className='info'>
                  <div className='infoBox'>
                    <p className='text'>согласно CE</p>
                    <p className='text'>254м</p>
                    <p className='text'>180мм</p>
                    <p className='text'>120мм</p>
                    <p className='text'></p>
                    <p className='text'>360 мм</p>
                    <p className='text'>254 мм</p>
                    <p className='text'>120мм</p>
                    <p className='text'>3 N E 400 V</p>
                    <p className='text'>IP 54</p>
                    <p className='text'>-20°C до + 60°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Единый блок управления</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGatesCatalog}
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

export default PageAccessories;
