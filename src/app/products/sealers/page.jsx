"use client";
import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import React from "react";
import Button from "@/components/UI/Button";
import "./styles.sass";
import Image from "next/image";

const PageSealers = () => {
  const handleDownloadSectionalDoors = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageSealers'>
      <div className='pageContainer '>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Герметизаторы проема ворот (докшелтеры)</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Докшелтеры от Loading Systems разрабатываются с упором на прочность и долговечность. Они обеспечивают
                  эффективную изоляцию от окружающей среды, способствуя снижению энергопотребления. Ассортимент
                  докшелтеров учитывает разнообразие транспортных средств, видов грузов и особенностей складских
                  операций.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Герметизатор занавесочный 403M</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PowerShelter 403M - герметизатор проема с прочными занавесочными сегментами, изготовленными из
                  износостойкого материала. Используется для изоляции пространства между складом и припаркованным
                  грузовым автомобилем, обеспечивая оптимальную изоляцию. Подходит для грузовых автомобилей с разной
                  величиной, а также может служить проездным докшелтером.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/sealers1.svg'
                alt='sealers1'
                className='img'
              />
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
                      Герметизатор проема 403M в пристраиваемой модели имеет стабильную конструкцию. Передняя рама
                      изготовлена из анодированного и экструдированного алюминия, а задняя – из оцинкованной горячим
                      способом стали. Прочная конструкция обеспечивает устойчивость при боковой нагрузке, предотвращая
                      провисание нижних кромок. Рамы соединены пружинящими рычагами, позволяя герметизатору подниматься
                      вверх при неправильной парковке и предотвращать повреждения.
                    </p>
                    <p className='text'>
                      Пристраиваемая конструкция покрыта цельным чехлом, предотвращая возможные щели, сквозняки и
                      протечки между верхней и боковыми частями докшелтера. Чехол имеет интегрированный отвод воды для
                      оптимального стока воды, предотвращая намокание товаров и складского помещения во время
                      погрузочно-разгрузочных процессов. Занавесочные сегменты, изготовленные из износостойкого
                      материала, обеспечивают высокую устойчивость к разрывам и могут быть различных видов.
                    </p>
                    <p className='text'>
                      Занавесочные сегменты выполнены из полиэстера и покрыты слоем ПВХ. Уникальная структура ткани
                      придает боковым секциям отличную гибкость в продольном направлении и стабильность в поперечном.
                      Эти характеристики обеспечивают не только максимальную подвижность, но и эффективное покрытие
                      припаркованных транспортных средств. Все занавесочные сегменты имеют износостойкое жесткое
                      ПВХ-покрытие, прошедшее антистатическую обработку, обеспечивая отличные механические свойства для
                      надежной работы докшелтера в различных условиях.
                    </p>
                    <p className='text'>
                      Боковые сегменты также оборудованы маркировочными полосами, которые служат ориентирами для
                      водителя, гарантируя правильную центровку грузового автомобиля при парковке под докшелтером. Все
                      продукты и системы Loading Systems, включая герметизатор проема 403М, соответствуют высоким
                      стандартам качества.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      width={100}
                      height={100}
                      src='/materials2.svg'
                      alt='materials2'
                      className='img'
                    />
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
                    <p className='text'>
                      Герметизатор проема 403M стандартных размеров предназначен для грузовых автомобилей,
                      припаркованных по центру, с шириной от 2300 до 2500 мм и высотой от 3600 до 4000 мм. Однако,
                      докшелтер 403 может быть индивидуально адаптирован под каждую потребность клиента.
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
                      <div className='infoBox'>
                        <p className='text'>Ширина</p>
                        <p className='text'>Высота</p>
                        <p className='text'>Глубина пристраивания</p>
                        <p className='text'>Ширина боковых Сегментов</p>
                        <p className='text'>Высота верхнего сегмента </p>
                        <p className='text'>Монтажная высота</p>
                        <p className='text'>Исполнение занавесочных сегментов</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoBox'>
                        <p className='text'>3400 мм</p>
                        <p className='text'>3400 мм</p>
                        <p className='text'>0 мм (встраиваемая модель); 600 мм (пристраиваемая модель)</p>
                        <p className='text'>600 мм (включая алюминиевый профиль)</p>
                        <p className='text'>1000 мм (включая алюминиевый профиль)</p>
                        <p className='text'>500 мм над самым высоким грузовым автомобилем</p>
                        <p className='text'>3000, 3700, 3900г/м²</p>
                        <p className='text'>черный/белый</p>
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
                      <li>Специальные размеры</li>
                      <li>Другие размеры верхнего и боковых занавесочных сегментов</li>
                      <li>Глубина пристраивания до 900 мм</li>
                      <li>Угловые уплотняющие элементы</li>
                      <li>Ламинирование верхнего занавеса с двух сторон 3700 г/м²</li>
                      <li>Верхний занавес с прорезями</li>
                      <li>Не складываемая рама</li>
                      <li>Модель, устойчивая в штормовых условиях</li>
                      <li>Другой цвет док-шелтера</li>
                      <li>Другой цвет маркировочных полос и овалов</li>
                      <li>Цветной или прозрачный сплошной </li>
                      <li>обтягивающий чехол</li>
                      <li>Цифры на верхнем занавесе</li>
                      <li>Логотип клиента на верхнем занавесе</li>
                      <li>Электрически управляемая рулонная штора</li>
                      <li>Датчик обнаружения транспортных средств для электрически управляемой рулонной шторы</li>
                      <li>Параллельное складывание, без подъема вверх (только для пристраиваемой модели 403M)</li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Герметизатор занавесочный 403M</h3>
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
                <h3 className='title'>Герметизатор надувной 407</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PowerShelter 407 – это герметизатор проема, который использует надувные подушки, изготовленные из
                  прочных материалов, для изоляции пространства между складом и припаркованным транспортным средством. В
                  ассортименте Loading Systems доступны две модели PowerShelter 407: встраиваемая и пристраиваемая
                  (выносная). Этот герметизатор проема представляет собой наиболее эффективное и долговечное решение
                  благодаря точному и гармоничному распределению подушек, обеспечивающему оптимальную изоляцию проема.
                  Он особенно подходит для ситуаций, где существует значительная разница в температуре внутри и снаружи,
                  например, в холодильных складах.
                </p>
                <p className='text'>
                  Подушки докшелтера 407 надуваются только после полного парковки транспортного средства, что
                  предотвращает их повреждение. Это также значительно увеличивает средний срок службы герметизатора
                  проема. В опущенном состоянии подушки аккуратно убраны за отметками въезда в док, сохраняя эстетичный
                  вид здания, а водитель имеет хороший обзор при парковке.
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
                  <div className='accordionText'>
                    <p className='text'>
                      Подушки выполнены из тревира полиэфирной ткани с соединением 1/1 (DIN 61101) и двусторонним
                      покрытием матовым ПВХ. Защитные полосы изготовлены из двухслойной полиэфирной ткани с плотностью
                      3500 г/м² и обеими сторонами, покрытыми износостойким и жестким ПВХ с антистатическими свойствами.
                      Это обеспечивает гибкость в продольном направлении и стабильность в поперечном.
                    </p>
                    <p className='text'>
                      Встроенная модель оборудована прочной оцинкованной рамой, покрытой стальными пластинами и
                      отделанной Goosewing Grey пластиком (BS10A05). Обе модели заключены в анодированные алюминиевые
                      рамки по периметру. Докшелтер 407, устойчивый к различным погодным условиям, обеспечивает
                      оптимальную безопасность с защитными консолями, также оцинкованными горячим способом. Все продукты
                      и системы Loading Systems, включая докшелтер 407, соответствуют высоким стандартам качества и
                      имеют маркировку CE.
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
                      Верхняя подушка материала разворачивается и скручивается обратно при помощи мощного трубчатого
                      мотора. При раскручивании двигатели обеспечивают подачу воздуха для надувания подушек.
                      Герметизаторы проема, будь то стандартные модели или изготовленные на заказ, с максимальным числом
                      в 25 надувных секций, поставляются с одним двигателем для воздуходувки. Все докшелтеры с более чем
                      25 надувными секциями, независимо от того, являются ли они стандартными или заказными, оснащаются
                      двумя двигателями для воздуходувки.
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
              <ComponentAccordion accordionTitle='Управление'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <p className='text'>
                      Управление двигателями воздуходувки и трубчатым мотором осуществляется одной кнопкой. После
                      центрирования грузового автомобиля в докшелтере, активируется оба двигателя, и через 30 секунд
                      пространство между складом и транспортным средством полностью изолировано.
                    </p>
                    <p className='text'>
                      На протяжении всего процесса погрузки и разгрузки двигатели воздуходувки поддерживают подушки под
                      давлением, а датчик верхней подушки подстраивается под изменяющуюся высоту транспортного средства,
                      предотвращая повреждения. По завершении процесса кнопкой отключаются двигатели воздуходувки. Затем
                      трубчатый мотор сворачивает верхнюю подушку, а боковые подушки втягиваются встроенной системой.
                      После возврата в исходное положение докшелтера, транспортное средство может покинуть
                      погрузочно-разгрузочную платформу. Герметизатор проема 407 обеспечивает защиту от случайного
                      отъезда грузового автомобиля. Уникальное крепление подушек позволяет им вывернуться наружу,
                      предотвращая повреждения компонентов докшелтера и подушек.
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
                    <p className='text'>
                      Герметизатор проема 407 со стандартными размерами предназначен для припаркованных по центру
                      грузовых автомобилей шириной от 2400 до 2800 мм и высотой от 3600 до 4200 мм. PowerShelter 407
                      также может быть изготовлен по индивидуальному заказу в соответствии с потребностями клиента
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
                        <p className='text'>Ширина</p>
                        <p className='text'>Высота</p>
                        <p className='text'>Защитные полосы</p>
                        <p className='text'>Монтажная высота</p>
                        <p className='text'>Исполнение подушек</p>
                        <p className='text'>Ширина боковых подушек</p>
                        <p className='text'>Высота боковых подушек</p>
                        <p className='text'>Продолжительность надувания</p>
                        <p className='text'>Продолжительность сдувания</p>
                        <p className='text'>Класс защиты пульта управления</p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Управляющее напряжение</p>
                        <p className='text'>Температура эксплуатации</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <p className='title'>CE -маркировка</p>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>3500 мм</p>
                        <p className='text'>3700 мм</p>
                        <p className='text'>ширина на боковых сторонах 250 мм; высота на верхней части 400 мм</p>
                        <p className='text'>(рекомендовано) 4700 мм</p>
                        <p className='text'>670 г/м²</p>
                        <p className='text'>(в надутом состоянии) 600 мм</p>
                        <p className='text'>(в надутом состоянии) 1100 мм</p>
                        <p className='text'>30 секунд</p>
                        <p className='text'>40 секунд</p>
                        <p className='text'>IP65</p>
                        <p className='text'>1NE/230V/0,25kW</p>
                        <p className='text'>24V DC</p>
                        <p className='text'>между -35° и +80° по Цельсию</p>
                        <p className='text'>черный</p>
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
                      <li>Специальные размеры</li>
                      <li>Другие размеры верхней и боковых подушек</li>
                      <li>Угловые уплотнители</li>
                      <li>Установка светофора</li>
                      <li>Блокировка ворот</li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Герметизатор занавесочный 403M</h3>
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
      </div>
    </div>
  );
};

export default PageSealers;
