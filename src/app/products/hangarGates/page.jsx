import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import "./styles.sass";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import Image from "next/image";

const HangarGates = () => {
  return (
    <div className='pageHangarGates'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Ангарные ворота </h3>
              </div>
              <div className='sectionSubtitle'>
                <p className='subtitle'>
                  Loading Systems – изготовление промышленных ангарных ворот, которые проектируются индивидуально для
                  каждого проекта и не имеют практических ограничений по размерам
                </p>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Вне зависимости от типа здания, его функционального предназначения, формы проема или климатических
                  условий, Loading Systems предлагает проверенные решения для изготовления промышленных ворот. Например,
                  для больших прямоугольных проемов судовых эллингов предпочтительны шторные ангарные ворота, для
                  ангаров малой и средней авиации — складчатые ангарные ворота, а для тяжелой промышленности —
                  автоматические рулонные ворота больших размеров.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Подъемные тентовые ворота</h3>
              </div>
              <div className='sectionSubtitle'>
                <p className='subtitle'>Тентовые ангарные ворота</p>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Ворота Loading Systems представляют собой эффективную подъемную конструкцию, состоящую из полотна,
                  вертикальные направляющие и систему электропривода. Их высокая устойчивость к агрессивным средам и
                  сильным ветровым нагрузкам, в сочетании с минимальным количеством подвижных компонентов, обеспечивает
                  надежность, долговечность и экономичность в эксплуатации. Эти ворота идеально подходят для применения
                  в судовых доках, тяжелой промышленности и на аэродромах, не имея практических ограничений по размерам.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                src='/liftingAwningGates.png'
                alt='liftingAwningGates'
                className='img'
                width={100}
                height={100}
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Полотно'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Полотно ангарных ворот представляет собой два слоя усиленного полиэстера (900-1500 г/м2) с
                      виниловым покрытием. Эти слои крепятся на горизонтальных промежуточных профилях и, открываясь,
                      складываются в противоположные стороны.
                    </p>
                    <p className='text'>
                      Промежуточные профили имеют шаг от 600 до 2200 мм и ширину от 100 до 2500 мм, в зависимости от
                      размеров и конфигурации ворот. Нижний профиль, обеспечивающий натяжение полотна и сохранение его
                      теплотехнических характеристик, выполнен из стали с полимерным покрытием.
                    </p>
                    <p className='text'>
                      Полотно предлагается в 11 стандартных цветах, включая светопрозрачный вариант. Дополнительные
                      опции включают другие цвета по шкале RAL и NCS, комбинацию разноцветных сторон полотна, логотипы,
                      встроенные окна, калитки и технологические ворота для ангаров.
                    </p>
                    <p className='text'>
                      Материал полотна спроектирован для работы в температурном диапазоне от -35°C до +70°C (в
                      опциональном арктическом исполнении – от -60°C) и выдерживает ветровые нагрузки от 0,7 до 3,6 кПа
                      (от 70 до 360 кг/м2), в зависимости от региона и требований заказчика.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      src='/canvas.png'
                      alt='canvas'
                      className='img'
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Боковые направляющие'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Все ангарные ворота Loading Systems, за исключением серии 671-700, включают комплект боковых
                      вертикальных направляющих, выполненных из экструдированного алюминия. В случае серии 671-700
                      вертикальные направляющие формируются несущими конструкциями здания, параметры которых уточняются
                      в процессе согласования рабочих чертежей. При необходимости, небольшие шторные ворота Loading
                      Systems могут быть поставлены с комплектной самонесущей рамой по запросу.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      src='/sideGuides.png'
                      alt='sideGuides'
                      className='img'
                      width={100}
                      height={100}
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
              <ComponentAccordion accordionTitle='Промежуточные подъемные опоры'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Промежуточные подъемные опоры применяются в шторных воротах серии Loading Systems 671-800 для
                      разделения отдельных полотен ворот. Каждая опора поднимается в горизонтальное положение с
                      использованием отдельного электропривода. Эта система часто используется в воротах для авиационных
                      ангаров, где широкий проем сочетается с ограниченной высотой, как, например, у самолетов AirBus
                      A380 и АН-124.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      src='/intermediateLiftingSupports.png'
                      alt='intermediateLiftingSupports'
                      className='img'
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Теплоизоляция'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Нижний профиль всех ворот для ангаров оснащен уплотнителем из вспененной резины, обеспечивающим
                      плотное прилегание к полу при закрытых воротах. Направляющие шторных ворот имеют интегрированные
                      теплоизолирующие щеточки или уплотнители из вспененной резины в зависимости от серии ворот.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      src='/thermalInsulation.png'
                      alt='thermalInsulation'
                      className='img'
                      width={100}
                      height={100}
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
              <ComponentAccordion accordionTitle='Электроприводы и концевые выключатели'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Электроприводы обычно размещаются над проемом ворот. Каждое полотно ворот может быть оснащено
                      одним или двумя синхронизированными электроприводами мощностью от 1,1 до 80,0 кВт в зависимости от
                      параметров. Концевые выключатели, автоматически останавливающие ворота для ангаров в полностью
                      открытом или закрытом состоянии, также установлены над проемом ворот с системой, соответствующей
                      высоким стандартам безопасности Loading Systems, оснащенной двойной цепью безопасности.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      src='/electricDrivesAndLimitDrives.png'
                      alt='electricDrivesAndLimitDrives '
                      className='img'
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Приводные тросы и ремни'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      В зависимости от веса полотна шторные ворота приводятся в движение тросами или ремнями, связанными
                      с нижней балкой и наматывающимися на барабан электропривода. Ремни и тросы отвечают высоким
                      стандартам безопасности Mock Doors, кратным запасом прочности. Их конструкция предотвращает
                      контакт с полотном, предотвращая его износ или повреждение.
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
              <ComponentAccordion accordionTitle='Блокираторы + ветровые замки'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Все серии ангарных ворот Loading Systems, за исключением 671-700, оснащены специальными
                      блокираторами, связанными с нижней балкой. Эти блокираторы предотвращают движение ворот в случае
                      редкого обрыва ремней или тросов, а также активируют функцию ветрового замка, предотвращая
                      нежелательное поднятие ворот под воздействием сильного фронтального ветра.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Система управления'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Система управления ангарными воротами основана на программируемом логическом контроллере (PLC),
                      предоставляющем разнообразные дополнительные функции. Эти функции включают в себя самодиагностику,
                      удаленное управление воротами через Интернет, а также автоматический вызов сервисной службы для
                      технического обслуживания после определенного числа циклов или в случае нештатных ситуаций.
                    </p>
                    <p className='text'>
                      Обычно ворота поставляются с системой управления `&quot`на удержании`&quot`, где кнопка
                      `&quot`НИЗ`&quot` должна быть удерживаема во время опускания ворот (при отпускании кнопки ворота
                      немедленно останавливаются). Кнопка `&quot`ВВЕРХ`&quot` работает в импульсном режиме, достаточно
                      ее однократного нажатия для полного открытия ворот. Кнопка `&quot`СТОП`&quot` останавливает ворота
                      в любом положении. Маленькие ворота для ангаров могут быть дополнительно оборудованы контактной
                      кромкой безопасности, позволяющей управлять воротами в импульсном режиме в любом направлении
                      движения.
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
              <ComponentAccordion accordionTitle='CLR – система перекрестно-соединенных тросов'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Серия шторных ворот 671-700, предназначенная для очень больших проемов, оснащена системой CLR. Эта
                      система обеспечивает удержание ворот в строго горизонтальном положении даже при маловероятном
                      обрыве одного из тросов. Использование такой системы исключает необходимость в блокираторах и
                      ветровых замках, придавая конструкции ворот большую гибкость, так как каждый из тросов может быть
                      регулирован индивидуально.
                    </p>
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

export default HangarGates;
