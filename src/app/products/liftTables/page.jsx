"use client";
import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import "./styles.sass";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import Button from "@/components/UI/Button";

const LiftTables = () => {
  const handleDownloadSectionalDoorN = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/IndustrialGates/SectionalDoorN/SectionalDoorN1.pdf";
    link.download = "SectionalDoorN1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageLiftTables'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Подъемные столы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Платформы PowerLift от Loading Systems предназначены для преодоления значительных высотных различий
                  между нулевым уровнем и кузовом транспортного средства. Это гидравлические ножницевидные платформы
                  модульной конструкции, предоставляющие гибкую возможность компенсации разнообразных высот и нагрузок.
                  Наши индивидуальные заказы гарантируют, что мы создадим продукт, полностью соответствующий вашим
                  требованиям. Основные черты наших ножницевидных платформ - это долговечность, высокое качество,
                  безопасность, функциональность и легкость в использовании.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Качество и безопасность </h3>
              </div>
              <div className='infoText'>
                <ul>
                  <li className='text'>
                    Подъемные платформы PowerLift, в форме ножниц, соответствуют стандарту безопасности EN 1570 и
                    маркировке CE.
                  </li>
                  <li className='text'>
                    Применение ЧПУ гарантирует оптимальную точность изготовления и отделки произведенных компонентов.
                    Ножницевидные подъемные платформы PowerLift имеют защитные кромки со всех сторон.
                  </li>
                  <li className='text'>
                    Гидравлическая система имеет защиту от избыточного давления и запорный клапан, предотвращающие
                    повреждения.
                  </li>
                  <li className='text'>
                    Гидравлические цилиндры защищены от разрыва шлангов, блокируя подъемный стол.
                  </li>
                  <li className='text'>
                    Опоры на всех четырех углах обеспечивают устойчивость при нижнем положении платформы.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/quaolityAndSafe.png'
                alt='quaolityAndSafe'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Долговечность</h3>
              </div>
              <div className='infoText'>
                <ul>
                  <li className='text'>
                    Использование высококачественной стали обеспечивает максимальную прочность и долговечность
                    платформы.
                  </li>
                  <li className='text'>Нижняя рама устойчива к вибрациям и защищена от внешних повреждений.</li>
                  <li className='text'>
                    Гидравлическая станция полностью изолирована, обеспечивая надежную защиту в условиях суровой
                    эксплуатации.
                  </li>
                  <li className='text'>
                    Наличие смотрового люка на платформе облегчает проведение быстрого и легкого технического
                    обслуживания.
                  </li>
                  <li className='text'>
                    Роликовые подшипники, не требующие обслуживания, обеспечивают более длительный срок службы.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/durability.png'
                alt='durability'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Ножницевидная подъемная платформа 740</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PowerLift 740 - это гидравлическая ножницевидная подъемная платформа, разработанная для эффективной
                  погрузки и разгрузки грузов. Модульная концепция стола обеспечивает гибкий выбор размеров и
                  грузоподъемности, делая PowerLift 740 универсальным решением для различных ситуаций. Управление
                  осуществляется с помощью стандартного пульта, включающего две кнопки и ключ-выключатель, что делает
                  его легким в использовании.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <img
                src='/Scissor.png'
                alt='Scissor'
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
                      PowerLift 740 - прочная и надежная подъемная платформа, объединенная с верхней рамой, обладает
                      качественным рифленым покрытием (Fe 360B) толщиной 8 или 10 мм в зависимости от грузоподъемности.
                      Спроектирована для эффективной погрузки и разгрузки, обеспечивает устойчивость под нагрузкой колес
                      и предотвращает деформации. Платформа снабжена смотровым люком.
                    </p>
                    <p className='text'>
                      Ножницевидные рычаги PowerLift 740 изготавливаются с использованием компьютерно управляемого
                      аппарата плазменной резки, обеспечивая высокую точность и отделку. Нижняя рама из стали снабжена
                      четырьмя опорами по углам для максимальной устойчивости в нижней позиции. Конструкция покрыта
                      базовым лаком и однокомпонентным структурированным лаком RAL 3002 (карминно-красный). Защитные
                      алюминиевые кромки обеспечивают безопасность со всех сторон. Все электрические компоненты имеют
                      класс защиты IP 54.
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
                      Подъемная платформа использует гидравлический привод, который полностью изолирован от внешних
                      воздействий, таких как песок, пыль и мусор. Гидравлическая система оборудована защитой от
                      избыточного давления и обратным клапаном, расположенными на нижней раме. Это обеспечивает защиту
                      от вибрации и повреждений.
                    </p>
                    <p className='text'>
                      Движение подъемной платформы осуществляется двумя высококачественными поршневыми цилиндрами с
                      хромированными штоками. Каждый цилиндр имеет защиту от разрыва шланга, что гарантирует немедленную
                      остановку при разрыве шланга или трубки. Эти функции совместно обеспечивают безопасность
                      гидравлической системы, продолжительный срок службы и минимизацию технического обслуживания.
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
                        <p className='text'>Нормы</p>
                        <p className='text'>Грузоподъемность</p>
                        <p className='text'>Конструктивная высота</p>
                        <p className='text'>Высота подъема</p>
                        <p className='text'>Скорость подъема</p>
                        <p className='text'>Подключение</p>
                        <p className='text'>Мощность мотора</p>
                        <p className='text'>Управляющее напряжение</p>
                        <p className='text'>Класс защиты</p>
                        <p className='text'>Гидравлическое масло</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoBox'>
                        <p className='text'>EN 1570-1:2011 и UVV-VBG 14</p>
                        <p className='text'>от 20 до 60 кН</p>
                        <p className='text'>280 / 350 / 410 мм</p>
                        <p className='text'>1300 / 1590 мм</p>
                        <p className='text'>25 / 34 / 38 секунд</p>
                        <p className='text'>3 N 400 V</p>
                        <p className='text'>2,9 / 4,4 кВт</p>
                        <p className='text'>24 / 230 V AC</p>
                        <p className='text'>IP 54</p>
                        <p className='text'>биоразлагаемое, синтетическое</p>
                        <p className='text'>(карминно-красный) RAL 3002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Стандартные средства безопасности'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Антискользящее рифленое покрытие платформы</li>
                      <li>Откидная опора безопасности для сервиса</li>
                      <li>Защитные кромки со всех сторон</li>
                      <li>Черная / желтая маркировка безопасности</li>
                      <li>Защита двигателя посредством теплового реле</li>
                      <li>Клапан в шланге цилиндра, предохраняющий от разрыва</li>
                      <li>Защита от избыточного давления и обратный клапан</li>
                      <li>Ключ-выключатель для защиты от несанкционированного использования подъемной платформы</li>
                      <li>Пиктограммы на платформе</li>
                      <li>Средства безопасности в зависимости от монтажной ситуации:</li>
                      <li>Ограждение; съемное или прикручиваемое: к платформе или к перрону</li>
                      <li>Портальное ограждение</li>
                      <li>Калитка в ограждении с электрическим и механическим замком</li>
                      <li>Горизонтальные или вертикальные откидные мостики</li>
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
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Горизонтальный откидной мостик, управляемый гидравлически или вручную</li>
                      <li>Вертикальный откидной мостик, управляемый вручную</li>
                      <li>Защитные ограждения шторного типа снизу платформы</li>
                      <li>Предохранительный упор для защиты от скатывания</li>
                      <li>Фиксация платформы в бетоне</li>
                      <li>Платформы увеличенных размеров по запросу</li>
                      <li>Защита от переклона</li>
                      <li>Укрепленная платформа</li>
                      <li>Нижняя рама в баке сбора масла</li>
                      <li>Самонесущая нижняя рама</li>
                      <li>Ограждение, съемное или прикручиваемое</li>
                      <li>Выключатель блокирования для съемного ограждения</li>
                      <li>Вентиль аварийного опускания на платформе</li>
                      <li>Портальное ограждение</li>
                      <li>Калитка в ограждении с электрическим и механическим замком</li>
                      <li>Выключатель для промежуточных остановок</li>
                      <li>Управление конечной высотой (+/- 20 мм)</li>
                      <li>Защитная контактная пластина под перроном</li>
                      <li>Класс защиты IP 65</li>
                      <li>Дополнительный набор для ручного управления</li>
                      <li>Встроенный пульт управления</li>
                      <li>Ножное управление, встроенное в платформу и отдельный выключатель аварийной остановки</li>
                      <li>Плавное регулирование скорости опускания</li>
                      <li>Повышенная скорость подъема и опускания</li>
                      <li>Гидравлическое замедление в конце опускания</li>
                      <li>Агрегат с 100% рабочим циклом</li>
                      <li>Агрегат, установленный за пределами подъемной платформы</li>
                      <li>Модели, выполненные полностью или частично из оцинкованной горячим способом стали</li>
                      <li>Цвет RAL по выбор</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Подъемный стол 740</h3>
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

export default LiftTables;
