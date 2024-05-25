import ComponentDivider from "@/components/ComponentDivider";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import React from "react";
import "./styles.sass";

const PageTentHangarDoors = () => {
  return (
    <div className='pageTentHangarDoors'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <div className='sectionTitle'>
                <div className='title'>Конфигурации тентовых ангарных ворот</div>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-100'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Серия 100 предназначена для относительно небольших проемов (до 8.000 мм) на промышленных
                      предприятиях с особенными требованиями к воротам. Например, в сталелитейным цехах,
                      мусороперерабатывающих заводах, станциях обслуживания тяжелой техники - то есть там, где предельно
                      важна устойчивость к агрессивной среде, простота и надежность эксплуатации, долговечность при
                      интенсивном использовании
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-100</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-0,9 кПа</p>
                        <p className='text'>800 кг</p>
                        <p className='text'>Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>8.000 мм</p>
                        <p className='text'>8.000 мм</p>
                        <p className='text'>100 мм</p>
                        <p className='text'>1000 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>1,1-2,2кВт</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>-</p>
                        <p className='text'> 10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors1.png'
                alt='tentHangarDoors1'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-170'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Серия 170 предназначена для проемов средних размеров (ширина до 12 м, высота до 17 м) и широко
                      применяется в портах, контейнерных терминалах, тяжелой промышленности, верфях и ангарах малой
                      авиации.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-170</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-1,7 кПа</p>
                        <p className='text'>2.500 кг</p>
                        <p className='text'>Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>17.000 мм</p>
                        <p className='text'>12.000 мм</p>
                        <p className='text'>170 мм</p>
                        <p className='text'>1200 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>1,5-8,0кВт</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>-</p>
                        <p className='text'> 10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors2.png'
                alt='tentHangarDoors2'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-290'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Ворота серии 290 предназначены для проемов высотой до 20 метров и обычно применяются на верфях при
                      строительстве яхт, создании судовых надстроек или для относительно небольших судовых секций. Эта
                      серия также подходит для использования в тяжелой промышленности и малых ангарах
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-290</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-1,7 кПа</p>
                        <p className='text'>5.000 кг</p>
                        <p className='text'>Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>20.000 мм</p>
                        <p className='text'>15.000 мм</p>
                        <p className='text'>290 мм</p>
                        <p className='text'>1300 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>3,0-10,0кВт</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>2</p>
                        <p className='text'> 10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors3.png'
                alt='tentHangarDoors3'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-390'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Ворота серии 390L могут быть размерами до 20 000 х 24 000 мм, что делает их идеальным выбором для
                      установки в эллинги на крупных верфях, больших покрасочных камерах, ангарах для тяжелых вертолетов
                      и малых самолетов, а также в специализированных зданиях в аэрокосмической области.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-390</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-1,7 кПа</p>
                        <p className='text'>5.000 кг</p>
                        <p className='text'>Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>20.000 мм</p>
                        <p className='text'>15.000 мм</p>
                        <p className='text'>290 мм</p>
                        <p className='text'>1300 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>3,0-10,0кВт</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>2</p>
                        <p className='text'> 10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors4.png'
                alt='tentHangarDoors4'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-600'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Уникальные гигантские размеры и выдающиеся показатели ветровой стойкости делают ворота 671-600
                      уникальными даже в специализированной сфере ангарных ворот. В отличие от более младших серий, эти
                      ворота отличаются наличием стальных ферм вместо алюминиевых промежуточных профилей, обеспечивающих
                      более высокую надежность при высоких нагрузках.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-600</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-3,0 кПа</p>
                        <p className='text'>15.000 кг</p>
                        <p className='text'>Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>35.000 мм</p>
                        <p className='text'>30.000 мм</p>
                        <p className='text'>600-1.000 мм</p>
                        <p className='text'>2.200 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>8,0-30,0кВт</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>2</p>
                        <p className='text'> 8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors5.png'
                alt='tentHangarDoors5'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-700'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Серия 671-700 представляет собой выдающееся инженерное решение, способное воплотить уникальные
                      проекты. Размер одного полотна ворот без промежуточных стоек может достигать 45 х 45 метров (более
                      2.000 квадратных метров) и даже больше. Предел допустимой ветровой нагрузки составляет 3,6 кПа
                      (360 кг/кв. м). В воротах этой серии используется система CLR - перекрестно-соединенные тросы,
                      обеспечивающие строго горизонтальное положение ворот на любом этапе открывания или закрывания.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-700</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-3,0 кПа</p>
                        <p className='text'>60.000 кг</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>45.000 мм</p>
                        <p className='text'>45.000 мм</p>
                        <p className='text'>800-2.500 мм</p>
                        <p className='text'>2.200 мм</p>
                        <p className='text'>6-12 м/мин</p>
                        <p className='text'>2</p>
                        <p className='text'>8,0-80,0кВт</p>
                        <p className='text'>нет</p>
                        <p className='text'>да</p>
                        <p className='text'></p>
                        <p className='text'></p>
                        <p className='text'>4</p>
                        <p className='text'> 8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors6.png'
                alt='tentHangarDoors6'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-800'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Тентовые ворота серии 671-800 - популярное решение для авиационных ангаров, состоящее из
                      нескольких полотен различных серий, разделенных подъемными промежуточными стойками. Эта
                      конструкция обусловлена особенной формой проекции самолетов: большой размах крыльев (60-80 метров)
                      сочетается с невысокой высотой, особенно в области крыльев и хвостового оперения. Ворота серии
                      671-800 имитируют форму самолета, что минимизирует площадь проема и экономит затраты на
                      строительство и обслуживание.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-800</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-3,0 кПа</p>
                        <p className='text'>-</p>
                        <p className='text'>Сталь/Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>26.000 мм</p>
                        <p className='text'>-</p>
                        <p className='text'>100-1.000 мм</p>
                        <p className='text'>2.200 мм</p>
                        <p className='text'>8-12 м/мин</p>
                        <p className='text'>1-2</p>
                        <p className='text'>-</p>
                        <p className='text'>да</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>2</p>
                        <p className='text'>2</p>
                        <p className='text'> 8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors7.png'
                alt='tentHangarDoors7'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='boxContainer'>
              <ComponentAccordion accordionTitle='Тентовые ангарные ворота 671-900'>
                <div className='accordionContainer'>
                  <div className='accordiontext'>
                    <p className='text'>
                      Ворота 671-900 - специальное решение для проемов, где верхняя часть шире нижней из-за наличия
                      крановых путей. Это часто встречается в тяжелой промышленности и судостроении, где требуется вывоз
                      крупногабаритных изделий с использованием кран-балки. Крановые пути, проходящие через проем,
                      ограничивают возможность установки других типов ворот. Решения Loading Systems позволяют
                      проектировать ворота даже для проемов с несколькими парами крановых путей на разных уровнях и/или
                      с разной колеей.
                    </p>
                  </div>
                  <div className='accordionBoxInfo'>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>Характеристики</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>Ветровая нагрузка</p>
                        <p className='text'>Максимальный вес полотна</p>
                        <p className='text'>Промежуточные профили</p>
                        <p className='text'>Нижний профиль</p>
                        <p className='text'>Макс. высота</p>
                        <p className='text'>Макс. ширина</p>
                        <p className='text'>Толщина полотна</p>
                        <p className='text'>Макс.межпрофильное расстояние</p>
                        <p className='text'>Скорость открывания/закрывания</p>
                        <p className='text'>Электроприводы</p>
                        <p className='text'>Мощность</p>
                        <p className='text'>Блокираторы/ветровые замки</p>
                        <p className='text'>Система CLR</p>
                        <p className='text'>Привод:</p>
                        <p className='text'>Ремни (кол-во)</p>
                        <p className='text'>Тросы (кол-во)</p>
                        <p className='text'>Коэф. безопасности</p>
                      </div>
                    </div>
                    <div className='info'>
                      <div className='infoTitle'>
                        <h4 className='title'>671-900</h4>
                      </div>
                      <div className='infoBox'>
                        <p className='text'>0,7-3,0 кПа</p>
                        <p className='text'>60.000 кг</p>
                        <p className='text'>Сталь/Алюминий</p>
                        <p className='text'>Сталь</p>
                        <p className='text'>35.000 мм</p>
                        <p className='text'>45.000 мм</p>
                        <p className='text'>290-2.500 мм</p>
                        <p className='text'>2.200 мм</p>
                        <p className='text'>6-12 м/мин</p>
                        <p className='text'>2</p>
                        <p className='text'>8,0-80,0 кВт</p>
                        <p className='text'>нет</p>
                        <p className='text'>нет</p>
                        <p className='text'></p>
                        <p className='text'>4-8</p>
                        <p className='text'>4</p>
                        <p className='text'> 8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentAccordion>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <img
                src='/tentHangarDoors8.png'
                alt='tentHangarDoors8'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default PageTentHangarDoors;
