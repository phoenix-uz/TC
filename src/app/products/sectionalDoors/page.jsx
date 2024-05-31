"use client";
import React from "react";
import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import Button from "@/components/UI/Button";
import "./styles.sass";
import Image from "next/image";

const PageSectionalDoors = () => {
  const handleDownloadSectionalDoors = () => {
    const link = document.createElement("a");
    link.href = "/files/catalogs/sectionalDoors.pdf";
    link.download = "sectionalDoors.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadSectionalDoorN = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/IndustrialGates/SectionalDoorN/SectionalDoorN1.pdf";
    link.download = "SectionalDoorN1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageSectionalDoors'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Секционные ворота</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Loading Systems PowerDoor - это высококачественные секционные ворота, спроектированные для
                  интенсивного промышленного использования. При открывании ворот панели двигаются под потолком или
                  вертикально вдоль стен склада, минимизируя занимаемое пространство.
                </p>
                <p className='text'>
                  Конструкция ворот обеспечивает оптимальную защиту от повреждений и максимальное использование
                  складских объемов. Loading Systems PowerDoor предлагают гибкие варианты на заказ, учитывая ваши
                  требования к конструкции, отделке, системам управления и монтажу. Главные приоритеты - удобство и
                  безопасность. Высококачественная отделка панелей обеспечивает долговечность, отличные изоляционные
                  свойства и минимальные затраты на техническое обслуживание.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/SectionalDoors.svg'
                alt='SectionalDoors'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Качество и срок службы'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Выбирая высококачественный материал, мы гарантируем долгий срок службы ворот даже при
                      экстремальных погодных условиях. Все секционные ворота изготовлены из оцинкованного стального
                      листа толщиной 0,5 мм с лакокрасочным покрытием.
                    </p>
                    <p className='text'>
                      Благодаря высокой изоляции, ворота Loading Systems существенно снижают энергопотребление: система
                      шип-паз обеспечивает практически безупречное уплотнение между панелями, предотвращая проникновение
                      воздуха и влаги и обеспечивая отличную теплоизоляцию.
                    </p>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Секционные ворота каталог</h3>
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
              <ComponentAccordion accordionTitle='Внешняя отделка'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Loading Systems предлагает разнообразие стандартных цветов и отделок для панелей, позволяя
                      полностью адаптировать ворота к архитектурным и функциональным требованиям вашего здания.
                      Независимо от выбранного типа панели, обеспечивается отличная теплоизоляция и коррозионная
                      стойкость, благодаря заполнению пеннополиуретаном без фреона.
                    </p>
                    <p className='text'>
                      Внешняя отделка панелей устойчива к УФ-лучам, предотвращая выцветание и царапины. Кроме
                      разнообразия стандартных цветов, наши панели доступны для покраски в любой цвет по RAL, NCS, BS
                      или по индивидуальному запросу.
                    </p>
                  </div>
                  <div className='accordionImage'>
                    <Image
                      width={100}
                      height={100}
                      src='/exteriorFinishing.svg'
                      alt='exteriorFinishing'
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
              <ComponentAccordion accordionTitle='Системы направляющих ворот'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Направляющие ворот от Loading Systems производятся из высококачественной оцинкованной стали,
                      изготавливаясь индивидуально под каждый заказ на заводе компании. Тип направляющих выбирается в
                      зависимости от конструктивных особенностей здания.
                    </p>
                    <p className='text'>
                      В большинстве случаев используется стандартный тип направляющих, но если есть дополнительное
                      пространство над проемом, более экономичным может быть использование вертикального или высокого
                      типа направляющих. Для ограниченных пространств над проемом используется низкий тип направляющих.
                      За исключением вертикальных направляющих, все другие могут быть выполнены под наклоном, следуя
                      форме крыши.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Встроенная и боковая калитка'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Loading Systems предлагает полный спектр встроенных и боковых калиток для эффективного управления
                      движением пешеходов и транспорта вокруг вашего здания. В случае наличия достаточного пространства
                      вокруг ворот, боковая калитка становится более экономичным и безопасным выбором. Калитки также
                      могут быть встроены в секционные ворота Loading Systems.
                    </p>
                    <p className='text'>
                      Разнообразие вариантов по расположению и направлению открывания калиток позволяет выбрать
                      оптимальное решение. Калитки Loading Systems с низким порогом уменьшают риск травм и обеспечивают
                      удобство прохода для пешеходов и внутреннего транспорта. В случае необходимости дополнительной
                      освещенности или видимости снаружи и внутри ворот, они могут быть оснащены одним или несколькими
                      окнами.
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
              <ComponentAccordion accordionTitle='Ворота с полным остеклением'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Секционные ворота Loading Systems с полным остеклением изготовлены из высококачественных
                      материалов, обладают высокой прочностью и использованием алюминиевых профилей с прозрачной панелью
                      для оптимального естественного освещения. Этот дизайн делает ворота особенно привлекательными, и
                      они идеально подходят для ситуаций, где важно обеспечить видимость внутри помещения, например, в
                      выставочных залах. Дополнительное естественное освещение уменьшает необходимость в искусственном
                      освещении, что значительно экономит энергозатраты.
                    </p>
                    <p className='text'>
                      Стандартная верхняя часть ворот с полным остеклением обеспечивает надежную прочность и
                      прозрачность. Для нижней секции Loading Systems рекомендует использование стандартных панелей,
                      соответствующих цвету и текстуре верхней части, чтобы предотвратить потенциальное обесцвечивание
                      от грязи и механических повреждений.
                    </p>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <div className='boxImageContainer'>
                <Image
                  width={100}
                  height={100}
                  src='/gatesWithFullGlazing.svg'
                  alt='gatesWithFullGlazing'
                  className='img'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionTitle'>
                <h3 className='title'>
                  Секционные ворота <span className='secondaryText'>601N</span>
                </h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  PowerDoor 601 - это секционные ворота с изолированными стальными сэндвич-панелями толщиной 40 мм. По
                  желанию заказчика, ворота могут быть оснащены защитой от защемления пальцев и выполнены с заполнением
                  из полиуретановой пены, не содержащей фреон.
                </p>
                <p className='text'>
                  Эти секционные ворота предназначены преимущественно для промышленного и коммерческого использования. С
                  широким спектром моделей, отделок (включая цвета с небольшими отклонениями от стандартных), вариантов
                  управления, систем подъема и дополнительных опций, PowerDoor 601 позволяют подобрать оптимальное
                  решение для любой ситуации. Эти ворота обеспечивают удобное управление, повышают безопасность и легко
                  интегрируются с другими системами погрузочно-разгрузочных станций. Также предоставляется множество
                  опций для адаптации к архитектурным особенностям здания.
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
                      PowerDoor 601 - это изолированные секционные ворота, состоящие из стальных сэндвич-панелей,
                      облицованных пластинами толщиной 0,5 мм. Внешняя сторона панелей покрыта клинкером, в то время как
                      внутренняя сторона имеет гладкую поверхность. Стальные панели обладают дополнительным покрытием с
                      внутренней стороны, обеспечивающим прочное сцепление с пенополиуретаном без фреона.
                    </p>
                    <p className='text'>
                      Эта форма изоляции обеспечивает высокую степень уплотнения, теплоизоляции и эффективный
                      коэффициент теплопередачи. PowerDoor 601 полностью изолированы со всех сторон, предотвращая
                      проникновение дождя, воздуха, песка и мусора. Система шип-паз и изолирующая лента между панелями
                      обеспечивают оптимальное уплотнение. Вертикальные рельсы имеют резиновый профиль для бокового
                      уплотнения, а под нижним профилем расположен резиновый профиль с двойным водоотводом. Верхняя
                      часть ворот оснащена резиновым козырьком, обеспечивая оптимальное уплотнение, что приводит к
                      уменьшению затрат энергии и улучшению производственных условий.
                    </p>
                    <p className='text'>
                      Эта форма изоляции обеспечивает высокую степень уплотнения, теплоизоляции и эффективный
                      коэффициент теплопередачи. PowerDoor 601 полностью изолированы со всех сторон, предотвращая
                      проникновение дождя, воздуха, песка и мусора. Система шип-паз и изолирующая лента между панелями
                      обеспечивают оптимальное уплотнение. Вертикальные рельсы имеют резиновый профиль для бокового
                      уплотнения, а под нижним профилем расположен резиновый профиль с двойным водоотводом. Верхняя
                      часть ворот оснащена резиновым козырьком, обеспечивая оптимальное уплотнение, что приводит к
                      уменьшению затрат энергии и улучшению производственных условий.
                    </p>
                    <p className='text'>
                      Оцинкованные рельсы, профили, соединяющие элементы, шарниры, опоры роликов и пластины подшипников
                      обеспечивают долговечность. Фиксируемые соединения крепятся на прочные профили, предотвращая
                      деформацию и ржавчину. Оцинкованный вал и торсионные пружины подходят для минимум 15 000 циклов
                      движения. Нейлоновые ролики с подшипниками и оцинкованной осью обеспечивают плавное движение.
                      Барабаны имеют минимум две обмотки безопасности, а стальные тросы рассчитаны на 6-кратную
                      нагрузку. Пружинные бамперы установлены на концах рельсов. В случае необходимости повышенной
                      освещенности или видимости, ворота PowerDoor 601 могут быть изготовлены с полным остеклением.
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
                      Промышленные ворота PowerDoor 601 предоставляются под заказ, учитывая конкретные требования
                      клиента.
                    </p>
                    <p className='text'>
                      С широким ассортиментом систем подъема, ворота изготавливаются на заказ по размеру для практически
                      любого типа проема. Выбор подходящей системы подъема обеспечивает открытие ворот таким образом,
                      чтобы проем и окружающее пространство становились полностью свободными. Кроме того, ворота могут
                      поставляться в собранном виде, что упрощает процесс монтажа и обслуживания.
                    </p>
                    <p className='text'>
                      Секционные ворота PowerDoor 601 доступны с различными типами подъема: низкий (Low Lift),
                      стандартный (Standard Lift), повышенный (High Lift) и вертикальный (Vertical Lift). За исключением
                      вертикального типа направляющих, все другие типы могут быть выполнены под наклоном (следование
                      наклону крыши).
                    </p>
                  </div>
                  <div className='boxText'>
                    <p className='text'>Характеристики ворот:</p>
                    <ul>
                      <li>Максимальная ширина: 8000 мм</li>
                      <li>Максимальная высота: 6700 мм</li>
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
              <ComponentAccordion accordionTitle='Управление'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>Секционные ворота PowerDoor 601 обладают разнообразными методами управления:</p>
                    <ul>
                      <li>
                        Ручное управление: оснащены тяговым шнуром, ручкой/педалью и задвижкой для удобства
                        использования.
                      </li>
                      <li>
                        Управление цепью: для ворот размером более 17 м² предусмотрено управление цепью или
                        электрическое управление. Управление цепью доступно с передачей 1:3 и 1:4.
                      </li>
                      <li>
                        Электрическое управление: осуществляется с помощью двух кнопок `&quot`Вверх-Вниз`&quot` и
                        аварийной остановки. Модульная концепция блока управления позволяет расширять функциональность
                        PowerDoor различными вставными модулями, включая дистанционное управление, автоматическое
                        закрытие, инфракрасные датчики и другие. При электрическом управлении двигатели оборудованы
                        системой аварийного управления, гарантирующей открытие или закрытие ворот при отключении
                        электропитания.
                      </li>
                    </ul>
                    <p className='text'>
                      Торсионные пружины, изготовленные по размеру, обеспечивают отличное сбалансированное состояние
                      секционных ворот PowerDoor 601. Это освобождает оператора от необходимости прикладывать
                      дополнительные усилия для открытия или закрытия ворот, независимо от выбранного метода управления.
                    </p>
                  </div>
                  <div className='boxImageContainer'>
                    <Image
                      width={100}
                      height={100}
                      src='/control.svg'
                      alt='control'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Технические спецификации'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <ul>
                      <li>Безопасность ..................... согласно Европейским нормам (CE)</li>
                      <li>Толщина облицовочных пластин ..................... 0,5 мм</li>
                      <li>Толщина панели..................... 40 мм</li>
                      <li>Заполнение ..................... полиуретан 100% без фреона</li>
                      <li>Рельсы и арматура ..................... гальванизированы, толщина 2, 0 мм</li>
                      <li>Двигатель ..................... 0,37 кВт</li>
                      <li>Подключение ..................... 230/400 V</li>
                      <li>Управляющее напряжение ..................... 24 V DC</li>
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
                      <li>Специальные размеры;</li>
                      <li>Предварительная сборка;</li>
                      <li>Овальные/прямоугольные окошки с защелкиванием;</li>
                      <li>Панели с полным остеклением;</li>
                      <li>Одинарное или двойное остекление SAN;</li>
                      <li>Одинарное закаленное стекло;</li>
                      <li>Плотное изолирующее заполнение с алюминиевым покрытием стукко;</li>
                      <li>Панели с защитой от защемления пальцев;</li>
                      <li>Полная программа стандартных цветов;</li>
                      <li>Цвет RAL по выбору для внешней и/или внутренней стороны;</li>
                      <li>Панели с британским стальным цветным покрытием HPS200;</li>
                      <li>Повышенное количество циклов движения торсионных пружин;</li>
                      <li>Защищенные торсионные пружины;</li>
                      <li>Встроенная калитка в воротах PowerDoor;</li>
                      <li>Боковая калитка рядом с воротами PowerDoor;</li>
                      <li>Пластмассовые или алюминиевые вентиляционные решетки;</li>
                      <li>Различные цилиндровые замки;</li>
                      <li>Цифры на воротах PowerDoor;</li>
                      <li>Защита от разрыва троса;</li>
                      <li>Контакт для встроенной калитки;</li>
                      <li>Роликовый контакт;</li>
                      <li>Связь промышленные ворота PowerDoor /перегрузочный мост PoweRamp;</li>
                      <li>Подключение мотора 3 x 230 V;</li>
                      <li>Повышение класса защиты блока управления IP65;</li>
                      <li>Дистанционное управление;</li>
                      <li>Внешние кнопки, ключ-выключатели;</li>
                      <li>Автоматическое закрытие;</li>
                      <li>Шарниры, опоры роликов, ось роликов и/или нижняя консоль из нержавеющей стали;</li>
                      <li>Одинарное или двойное остекление из поликарбоната со свойствами против взлома;</li>
                      <li>
                        Самотестируемая система обнаружения препятствий по нижней кромке ворот при электрическом
                        управлении;
                      </li>
                      <li>Фотоэлементы для управления воротами с инфракрасным передатчиком и приемником.</li>
                    </ul>
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
                      <li>
                        Промышленные ворота PowerDoor 601 имеют CE-маркировку, гарантию качества и безопасности согласно
                        действующим Европейским нормам;
                      </li>
                      <li>Защита от разрыва пружины (при ручном управлении или отсоединяемом моторе);</li>
                      <li>Защита двигателя с помощью теплового реле (при электрическом управлении);</li>
                      <li>
                        Блок управления с выключателем аварийной остановки, согласно действующим Европейским нормам;
                      </li>
                      <li>Автоматическая аварийная остановка (при электрическом управлении);</li>
                      <li>Контроль натяжения троса (при электрическом управлении).</li>
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
              <ComponentAccordion accordionTitle='Стандартные цвета панелей без защиты от защемления пальцев'>
                <div className='accordionContainer'>
                  <div className='boxImageContainer'>
                    <Image
                      width={100}
                      height={100}
                      src='/withSecurity.svg'
                      alt='withSecurity'
                      className='img'
                    />
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Стандартные цвета панелей с защитой от защемления пальцев'>
                <div className='accordionContainer'>
                  <div className='boxImageContainer'>
                    <Image
                      width={100}
                      height={100}
                      src='/withoutSecurity.svg'
                      alt='withoutSecurity'
                      className='img'
                    />
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Секционные ворота 601N</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleDownloadSectionalDoorN}
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
            <div className='boxContainer'>
              <div className='sectionTitle'>
                <h3 className='title'>
                  Секционные ворота <span className='secondaryText'>601DD</span>
                </h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Секционные ворота 601DD - это новейшая модель промышленных ворот, созданная на базе серии 601N. Эти
                  ворота специально разработаны для зон погрузки и разгрузки. Благодаря тщательно продуманной
                  конструкции и используемым материалам, ворота данной серии отличаются высокой надежностью и
                  устойчивостью к износу.
                </p>
              </div>
              <div className='secondaryTitle'>
                <div className='h3 title'>Отличия от ворот 601N</div>
              </div>
              <div className='sectionText'>
                <ul>
                  <li>Оптимизированы для работы в доке</li>
                  <li>Максимальные размеры: 3,750 х 4000</li>
                  <li>Предварительно собранный пружинный блок</li>
                  <li>Только 2 подъемные системы: вверх и вертикальная</li>
                  <li>Поставляется с двумя видами приводов: 50/60 Hm или Эко-привод</li>
                  <li>Доступны с и без терморазрыва</li>
                </ul>
              </div>
              <ComponentAccordion accordionTitle='Опции'>
                <div className='accordionContainer'>
                  <div className='sectionText'>
                    <ul>
                      <li>Высокий или вертикальный подъем</li>
                      <li>Разработаны для погрузочных зон</li>
                      <li>Низкие цены для проектов средних резмеров</li>
                      <li>Низкие цены для проектов больших размеров</li>
                    </ul>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Секционные ворота 601N</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleDownloadSectionalDoorN}
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
            <div className='boxContainer'>
              <div className='sectionTitle'>
                <h3 className='title'>
                  Скоростные сеционные ворота <span className='secondaryText'>620NG</span>
                </h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Представляем наш новый продукт - Высокоскоростные секционные ворота Loading Systems 620. Основная цель
                  разработки заключалась в увеличении общей скорости работы. Мы стремились создать секционные ворота,
                  которые работают быстро и сохраняют все преимущества нашей модели PowerDoor 601. И нам это удалось!
                  Эти ворота не только быстро открываются и закрываются, но и обладают превосходными теплоизоляционными
                  свойствами. Они также сочетают в себе практичность и экономичное потребление электроэнергии. Новая
                  техническая конструкция обеспечивает их долговечность, делая ворота уникальным дополнением к семейству
                  промышленных ворот Loading Systems.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Особенности'>
                <div className='accordionContainer'>
                  <div className='sectionText'>
                    <ul>
                      <li>Высокая скорость открытия и закрытия, обеспечивающая быстрый проезд автотранспорта</li>
                      <li>Снижение циркуляции воздуха между внешней и внутренней средой</li>
                      <li>Сокращение затрат электроэнергии до 4-х раз</li>
                      <li>Все основные преимущества 601, только еще быстрее</li>
                      <li>Специально разработанные компоненты:консоли, подшипники и стойки</li>
                      <li>Пружины, рассчитанные на 50000 циклов</li>
                    </ul>
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
                src='/specials.svg'
                alt='specials'
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
                        <p className='text'>Толщина панели</p>
                        <p className='text'>Высота секции</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Высокоскоростные ворота 620NG</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>согласно нормам СЕ</p>
                        <p className='text'>5000 мм</p>
                        <p className='text'>5000 мм</p>
                        <p className='text'>до 1.4 м/с</p>
                        <p className='text'>0.8 м/с</p>
                        <p className='text'>1,18 Wm²K</p>
                        <p className='text'>40 мм</p>
                        <p className='text'>244-610мм</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordionFile'>
                    <div className='secondaryTitle'>
                      <h3 className='title'>Секционные ворота 601N</h3>
                    </div>
                    <Button
                      className='download'
                      onClick={handleDownloadSectionalDoorN}
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

export default PageSectionalDoors;
