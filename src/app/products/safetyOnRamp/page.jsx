"use client";
import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import React from "react";
import Button from "@/components/UI/Button";
import Image from "next/image";

const PageSafetyOnRamp = () => {
  const handleFoldingGatesCatalog = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageSafetyOnRamp'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Система фиксации транспортных средств PowerLock 505NG</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Система фиксации транспортных средств PowerLock 505NG, была разработана для преодоления рисков,
                  связанных с расстоянием между погрузочно-разгрузочной платформой и полом кузова транспортного
                  средства. Это снижает вероятность опасных ситуаций, таких как преждевременный отъезд транспортного
                  средства во время процесса погрузки или разгрузки, а также предотвращает `&quot`сползание`&quot`
                  транспортного средства при заезде и выезде погрузчика.
                </p>
                <p className='text'>
                  PowerLock 505NG может быть использован как автономная единица или интегрирован в пульты управления
                  перегрузочными мостами и промышленными воротами, что повышает уровень безопасности. Система также
                  способствует снижению случаев краж. Ее конструкция включает встроенную направляющую для колес,
                  обеспечивающую правильное положение грузового автомобиля по центру док-шелтера. Это обеспечивает
                  оптимальное покрытие кузова герметизатором проема, предотвращая повреждения доковых бамперов, здания и
                  самого транспортного средства.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/safetyonramp.png'
                alt='safetyonramp'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Преимущества системы '>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <ul>
                      <li>Автоматическая блокировка активируется примерно за 25 секунд.</li>
                      <li>
                        Уникальная конструкция полностью оцинкована горячим способом, обеспечивая высокую стойкость.
                      </li>
                      <li>Система выдерживает нагрузку полностью загруженного транспортного средства.</li>
                      <li>Встроенные колесные направляющие обеспечивают правильное направление движения.</li>
                      <li>Полностью гидравлическое управление обеспечивает эффективное функционирование.</li>
                      <li>
                        Оптимальный уровень безопасности и предотвращение краж с возможностью разблокировки только из
                        помещения склада.
                      </li>
                      <li>Система аварийного принудительного разблокирования при отключении электропитания.</li>
                      <li>Эффективная работа в любых погодных условиях.</li>
                      <li>Закрытая конструкция предотвращает накопление мусора.</li>
                      <li>
                        Подходит для всех типов транспортных средств (мин. расстояние от земли до пола кузова 35 см).
                      </li>
                      <li>
                        Разработана с ограниченным числом компонентов и минимальным количеством подвижных частей, не
                        требует сложного технического обслуживания.
                      </li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>PowerLock 505NG листовка</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleFoldingGatesCatalog}
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
              <ComponentAccordion accordionTitle='Конструкция'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <p className='text'>
                      Система фиксации транспортных средств 505NG проста в управлении и практически безотказна,
                      благодаря ограниченному количеству подвижных элементов и отсутствию механического привода. Это
                      обеспечивает минимальные затраты на техническое обслуживание и исключает блокировку грузовых
                      автомобилей из-за неполадок. 505NG способна фиксировать практически все транспортные средства,
                      обеспечивая безопасный процесс погрузки и разгрузки без повреждения оборудования или автомобиля.
                    </p>
                    <p className='text'>
                      Прочная конструкция из оцинкованной горячим способом стали предназначена для надежной фиксации
                      припаркованных транспортных средств. Встроенная направляющая для колес обеспечивает правильное
                      положение транспортного средства по центру погрузочно-разгрузочного дока, гарантируя безопасный
                      процесс погрузки и разгрузки без повреждения оборудования или автомобиля.
                    </p>
                    <p className='text'>
                      Для установки системы требуется ровная бетонная основа (минимум 200 мм) или плиты Stelcon, что
                      обеспечивает работоспособность в различных погодных условиях.
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
              <ComponentAccordion accordionTitle='Принцип действия'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <p className='text'>
                      Оператор склада управляет кнопочным постом внутри складского здания, который активирует
                      гидравлический цилиндр для механической блокировки задних колес транспортного средства. Встроенные
                      датчики отслеживают положение колес, обеспечивая точную фиксацию блокировки и предотвращая
                      `&quot`сползание`&quot` автомобиля от погрузочно-разгрузочного дока. При нажатии кнопки происходит
                      автоматическое обнаружение и блокировка заднего колеса. Процесс фиксации транспортного средства
                      занимает приблизительно 25 секунд. По запросу клиента можно установить систему контроля давления в
                      блоке на колесе.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Сигналы'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <p className='text'>
                      Система фиксации транспортных средств сопровождается звуковыми и световыми сигналами, включая
                      мигающую предупреждающую лампу. На внешней стороне установлен светофор с красным и зеленым светом,
                      а внутри здания находится пульт управления с индикаторными лампами (красная, оранжевая и зеленая
                      подсветка). Оба устройства наглядно показывают, заблокирован ли грузовой автомобиль, а также
                      обеспечивают безопасность для проведения процесса погрузки и/или разгрузки.
                    </p>
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
                <h3 className='title'>Система фиксации транспортных средств PowerLock 505NG</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Система механической парковочной блокировки PowerLock 515 предназначена для предотвращения случаев
                  преждевременного отъезда транспортных средств с доковых площадок. В отличие от PowerLock 505, эта
                  система работает в ручном режиме.
                </p>
              </div>
            </div>
          </div>

          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/fixationSystem.png'
                alt='fixationSystem'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности '>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <ul>
                      <li>Крепкая и надежная конструкция весом 180 килограмм.</li>
                      <li>Повышенная безопасность по сравнению с другими системами блокировки.</li>
                      <li>Предотвращение повреждений или скатываний транспортных средств.</li>
                      <li>Система фиксации предотвращает угон вашего транспортного средства.</li>
                      <li>Защита от `&quot`откатывания`&quot` транспортного средства.</li>
                      <li>Используется в качестве направляющих для погрузчика.</li>
                    </ul>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Конструкция'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    <p className='text'>
                      Система фиксации транспортных средств 505NG проста в управлении и практически безотказна,
                      благодаря ограниченному количеству подвижных элементов и отсутствию механического привода. Это
                      обеспечивает минимальные затраты на техническое обслуживание и исключает блокировку грузовых
                      автомобилей из-за неполадок. 505NG способна фиксировать практически все транспортные средства,
                      обеспечивая безопасный процесс погрузки и разгрузки без повреждения оборудования или автомобиля.
                    </p>
                    <p className='text'>
                      Прочная конструкция из оцинкованной горячим способом стали предназначена для надежной фиксации
                      припаркованных транспортных средств. Встроенная направляющая для колес обеспечивает правильное
                      положение транспортного средства по центру погрузочно-разгрузочного дока, гарантируя безопасный
                      процесс погрузки и разгрузки без повреждения оборудования или автомобиля.
                    </p>
                    <p className='text'>
                      Для установки системы требуется ровная бетонная основа (минимум 200 мм) или плиты Stelcon, что
                      обеспечивает работоспособность в различных погодных условиях.
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
                        <p className='text'>Высота верхнего сегмента</p>
                        <p className='text'>Монтажная высота</p>
                        <p className='text'>Исполнение занавесочных сегментов</p>
                        <p className='text'>Стандартный цвет</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoBox'>
                        <p className='text'>3400 мм</p>
                        <p className='text'>3400 мм</p>
                        <p className='text'></p>
                        <p className='text'>600 мм (включая алюминиевый профиль)</p>
                        <p className='text'>1000 мм (включая алюминиевый профиль)</p>
                        <p className='text'>500 мм над самым высоким грузовым автомобилем</p>
                        <p className='text'>3000, 3700, 3900г/м²</p>
                        <p className='text'>черный/белый</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>PowerLock 515NG листовка</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleFoldingGatesCatalog}
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
              <ComponentAccordion accordionTitle='Работа PowerLock 515'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Основное различие этой системы фиксации транспортных средств от PowerLock 505 заключается в том,
                      что ее действие полностью зависит от ручного управления. Для активации устройства необходимо,
                      чтобы транспортное средство сначала пристыковалось к доку. Затем сотрудник склада подходит к
                      устройству и закрепляет его вручную.
                    </p>
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
                <h3 className='title'>Система фиксации транспортных средств PowerLock 505NG</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Система механической парковочной блокировки PowerLock 515 предназначена для предотвращения случаев
                  преждевременного отъезда транспортных средств с доковых площадок. В отличие от PowerLock 505, эта
                  система работает в ручном режиме.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Сигнальные лампы'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    Сигналы светофора могут функционировать независимо или совместно с лампами управления, повышая общую
                    безопасность в районе погрузочно-разгрузочной рампы. При активации процесса погрузки или разгрузки
                    внешний световой сигнал переключается с зеленого на красный (предупреждение о небезопасности
                    движения), а при установке доклевеллера на пол кузова машины, внутренний световой сигнал на блоке
                    управления переходит с красного на зеленый. Завершив процесс, внешний световой сигнал снова
                    становится зеленым, а внутренний переключается с зеленого на красный (указывая на опасность
                    дальнейших операций).
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/signalLamps.png'
                alt='signalLamps'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Датчик обнаружения транспортного средства'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    Настройка последовательной логики в блоке управления может быть выполнена в соответствии с вашими
                    предпочтениями. При сочетании последовательной логики с датчиком обнаружения транспортного средства
                    гарантируется, что промышленные ворота будут открываться только после того, как транспортное
                    средство установлено на погрузочно-разгрузочную рампу. Это обеспечивает безопасность на погрузочной
                    рампе, предотвращая водителя вилочного погрузчика от случайного выезда задним ходом на платформу.
                    Такой подход существенно снижает потери энергии, поскольку ворота открываются только после того, как
                    машина полностью `&quot`заперта`&quot` в шлюзе.
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/signalLamps2.png'
                alt='signalLamps2'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Сигнал тревоги'>
                <div className='accordionContainer'>
                  <div className='accordionText'>
                    Блок управления может быть оборудован звуковым сигналом тревоги, который срабатывает при обнаружении
                    транспортного средства, покидающего погрузочно-разгрузочную рампу преждевременно, предупреждая об
                    опасной ситуации.
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxImageContainer'>
              <Image
                width={100}
                height={100}
                src='/signalLamps3.png'
                alt='signalLamps3'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default PageSafetyOnRamp;
