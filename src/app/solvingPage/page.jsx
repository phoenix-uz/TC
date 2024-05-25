"use client";
import ComponentDivider from "@/components/ComponentDivider";
import Button from "@/components/UI/Button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import Image from "next/image";

const SolvingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='solvingPage'>
      <div className='pageContainer'>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Решения для любой отрасли </h3>
              </div>
              <div className='sectionContent'>
                <ul>
                  <li
                    className='text'
                    data-aos='fade-up-right'
                  >
                    Индивидуальные промышленные решения
                  </li>
                  <li
                    className='text'
                    data-aos='fade-up-right'
                  >
                    Большой ассортимент продукции
                  </li>
                  <li
                    className='text'
                    data-aos='fade-up-right'
                  >
                    Высокое качество и долговечность
                  </li>
                  <li
                    className='text'
                    data-aos='fade-up-right'
                  >
                    Специалисты для всех отраслей
                  </li>
                </ul>
              </div>
              <Button data-aos='fade-up-right'>Свяжитесь с нами</Button>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='fade-right'
                >
                  Складские здания с температурным режимом
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Loading Systems имеет обширный опыт в применении логистических решений для холодильных и морозильных
                  камер, обеспечивая беспрепятственный проход при различных температурах от -31 до +35 градусов без
                  прерываний в работе и снижения производительности.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox w-50'>
                <div
                  className='secondaryTitle'
                  data-aos='fade-right'
                >
                  <h3 className='title'>Наши высокоскоростные ворота обладают следующими преимуществами</h3>
                </div>
                <div className='infoText'>
                  <ul>
                    <li
                      className='text'
                      data-aos='fade-right'
                    >
                      Быстро открываются и закрываются, сводя к минимуму колебания температуры
                    </li>
                    <li
                      className='text'
                      data-aos='fade-right'
                    >
                      Превосходные уплотнения обеспечивают высокую гигиеничность ворот
                    </li>
                    <li
                      className='text'
                      data-aos='fade-right'
                    >
                      Минимизирует риск загрязнения, защищая от пыли, грязи, насекомых и сквозняков.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/stockImage.png'
                  alt=''
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Решение с телескопической аппарелью и ступенчатой стыковкой</h3>
              </div>
            </div>
          </div>

          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox itemBoxCol'>
                <div className='sectionText'>
                  <p
                    className='text'
                    data-aos='fade-right'
                  >
                    При погрузо-разгрузочных работах в условиях с контролируемой температурой, наши комбинированные
                    перегрузочные мосты (доклевеллеры) с телескопической аппарелью и системой ступенчатой стыковки
                    позволяют выполнять работы, не нарушая температурный режим внутри помещения:
                  </p>
                </div>
                <div className='itemContent'>
                  <ul>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      Грузовой транспорт может пристыковываться без необходимости предварительного открытия дверей
                      кузова
                    </li>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      После этого надувной герметизатор проема обеспечивает плотное прилегание к бортам грузового
                      транспорта и надежную изоляцию помещения от внешней среды
                    </li>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      Далее вы можете открыть секционные ворота без риска нарушить температурный режим и провести
                      стыковку доклеввелера с кузовом грузового транспорта.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/stockImage.png'
                  alt=''
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider
          flexCol='flexCol'
          bgGray='bgGray'
        >
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Автомобильная промышленность</h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Будь то выставочный зал для автомобилей или производственный комплекс, Loading Systems предлагает
                  широкий спектр эстетичных, эффективных и долговечных решений для промышленных ворот и перегрузочного
                  оборудования, разработанных с учетом потребностей и требований автомобильной промышленности.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox itemBoxCol'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Решения для автомобильных производственных комплексов
                  </h3>
                </div>
                <div className='sectionContent'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    В процессе производства и хранения автомобилей и/или их компонентов контролируемая среда играет
                    ключевую роль. Защита от пыли становится одним из главных вопросов, поскольку пыль может оказать
                    пагубное действие на критические компоненты автомобиля и снизить качество выпускаемой продукции.
                  </p>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Решения Loading Systems позволяют повысить эффективность работы предприятия и минимизировать риски,
                    поддерживая требуемое качество воздуха внутри помещений.
                  </p>
                </div>
              </div>
              <div
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/car.png'
                  alt=''
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox itemBoxCol'>
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-up'
                >
                  <h3 className='title'>Скоростные ворота: оптимальное решение для максимальной изоляции.</h3>
                </div>
                <div className='sectionContent'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Эффективная изоляция играет ключевую роль в автомобильной промышленности, и скоростные ворота
                    Loading Systems представляют собой оптимальное решение.
                  </p>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Наши двери обеспечивают:
                  </p>
                  <ul>
                    <li data-aos='zoom-in-up'>
                      <span className='textBold'>Высокую эффективность: </span> Благодаря высокой скорости открывания и
                      закрывания минимизируются температурные колебания, а также предотвращается вторжение пыли,
                      насекомых и сквозняков. Это обеспечивает бесперебойность рабочих процессовбеспрепятственный
                      рабочий процесс.
                    </li>
                    <li data-aos='zoom-in-up'>
                      <span className='textBold'>Экологичность: </span>С помощью наших скоростных ворот можно оптимально
                      регулировать температуру в помещении, что повышает экологичность работы предприятия.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <image
                  width={100}
                  height={100}
                  src='/bmwImage.png'
                  alt=''
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox  w-50'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Эстетичное решение для красивого выставочного зала
                  </h3>
                </div>
                <div className='sectionContent'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Секционные ворота `&quot`Full Vision`&quot` — популярное решение для дилерских центров. С
                    разнообразием вариантов исполнения мы можем подобрать для вас наиболее подходящее решение с учетом
                    ваших индивидуальных требований. Алюминиевые секции двери могут быть окрашены в разные цвета.
                  </p>
                </div>
              </div>
              <div className='itemBox  w-50'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Максимальное пропускание света и экономичность
                  </h3>
                </div>
                <div className='sectionContent'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    В автомобильной промышленности растет спрос на экологичные решения. Секционные ворота `&quot`Full
                    Vision`&quot` от Loading Systems изготовлены из самых высококачественных материалов, благодаря
                    которым не только повышается видимость и эстетическая привлекательность, но и сокращаются расходы на
                    электроэнергию.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox itemBoxCol'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Подъемные платформы: быстрая и Эффективная Транспортировка автомобилей
                  </h3>
                </div>
                <div className='sectionContent'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Мы предлагаем решения для перемещения автомобилей между этажами при помощи подъемных платформ
                    Loading Systems, гарантируя стабильную работу и безопасное перемещение автомобилей в многоэтажных
                    выставочных залах. Наши подъемные изготовлены из высококачественных материалов и могут быть
                    установлены как внутри, так и перед зданием.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='fade-right'
                >
                  Онлайн-коммерция
                </h3>
              </div>
              <div className='sectionText'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  В связи с увеличением количества онлайн-покупок растет спрос на дополнительные складские помещения.
                  Ритейлеры хотят предложить своим покупателям лучший опыт работы в Интернете, а это начинается с
                  эффективного управления потоком товаров. Будь то крупный логистический комплекс или небольшой
                  распределительный центр, компания Loading Systems может предоставить наиболее подходящее решение.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox w-50 rowGap'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Доклевеллер для крупных фургонов и небольших грузовиков
                  </h3>
                </div>
                <div className='sectionText'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Комбинированный доклевеллер позволяет загружать и разгружать оба типа транспортных средств на одной
                    погрузочной площадке! Таким образом, вы всегда используете все погрузочные площадки для перемещения
                    вашего товара.
                  </p>
                </div>
                <div
                  className='itemContentImage'
                  data-aos='flip-right'
                >
                  <Image
                    width={100}
                    height={100}
                    src='/docleLeveller.png'
                    alt=''
                    className='imageReverse'
                  />
                </div>
              </div>
              <div className='itemBox w-50 rowGap'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-up'
                  >
                    Перегрузочный мост Van-Dock
                  </h3>
                </div>
                <div className='sectionText'>
                  <p
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    С увеличением числа онлайн-покупок наблюдается растущий поток небольших грузовиков. Инновационным
                    решением, объединяющим несколько функций в одном комплексе, является перегрузочный мост “Van Dock”.
                    Этот уникальный продукт включает в себя перегрузочный мост, систему ступенчатой стыковки и
                    интегрированный блок управления, обеспечивая полностью автоматизированный процесс работы.
                  </p>
                </div>
                <div className='infoText'>
                  <ul>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      Быстро открываются и закрываются, сводя к минимуму колебания температуры
                    </li>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      Превосходные уплотнения обеспечивают высокую гигиеничность ворот
                    </li>
                    <li
                      className='text'
                      data-aos='zoom-in-up'
                    >
                      Минимизирует риск загрязнения, защищая от пыли, грязи, насекомых и сквозняков.
                    </li>
                  </ul>
                </div>
                <div
                  className='itemContentImage'
                  data-aos='flip-right'
                >
                  <Image
                    width={100}
                    height={100}
                    src='/VanDock.png'
                    alt=''
                    className='imageReverse'
                  />
                </div>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='fade-right'
                >
                  Пищевая промышленность
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  В пищевой промышленности существуют строгие требования к гигиене и контролю температуры. Решения
                  Loading Systems обеспечивают надежную изоляцию, гарантируя поддержание нужной температуры и
                  предотвращая проникновение насекомых и пыли.
                </p>
              </div>
            </div>
          </div>
          <div
            className='itemContentImage'
            data-aos='flip-right'
          >
            <Image
              width={100}
              height={100}
              src='/industry.png'
              alt='industry'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='fade-right'
                >
                  Герметизатор
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Герметичность погрузочных платформ является важным аспектом в пищевой промышленности. Использование
                  герметизатора обеспечивает защиту груза от неблагоприятных погодных условий во время погрузки и
                  разгрузки, поддерживая постоянную температуру внутри помещения. Кроме того, предотвращение попадания
                  сквозняков, пыли и насекомых позволяет существенно экономить ресурсы.
                </p>
              </div>
            </div>
          </div>
          <div
            className='itemContentImage'
            data-aos='flip-right'
          >
            <Image
              width={100}
              height={100}
              src='/Sealer.png'
              alt='Sealer'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-up'
                >
                  Герметизаторы надувного типа
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='zoom-in-up'
                >
                  Герметизаторы надувного типа являются оптимальным выбором для применения в сфере пищевой
                  промышленности. Подушки полностью прилегают к контурам транспортного средства, обеспечивая наиболее
                  плотную и надежную изоляцию от внешней среды. Надувные подушки активируются сразу после стыковки
                  грузового транспорта, формируя надежное герметичное уплотнение по всему периметру кузова. Этот тип
                  герметизатора идеален для компаний, работающих с разными видами грузовых транспортных средств.
                </p>
              </div>
            </div>
          </div>
          <div
            className='itemContentImage'
            data-aos='flip-right'
          >
            <Image
              width={100}
              height={100}
              src='/Sealer2.png'
              alt='Sealer2'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-up'
                >
                  Скоростные ворота
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='zoom-in-up'
                >
                  Скоростные ворота являются идеальным решением для пищевой промышленности и холодильных камер, где
                  гигиена и энергоэффективность производства имеют большое значение. Наши скоростные ворота были
                  специально разработаны с учетом строгих гигиенических требований.
                </p>
              </div>
              <div className='infoText'>
                <ul>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Быстро открываются и закрываются, сводя к минимуму колебания температуры
                  </li>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Превосходные уплотнения обеспечивают высокую гигиеничность ворот
                  </li>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Минимизирует риск загрязнения, защищая от пыли, грязи, насекомых и сквозняков.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Логистика
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Промышленные ворота и решения для погрузо-разгрузочных систем от Loading Systems способствуют
                  эффективной работе сотен логистических компаний по всему миру. Будь то небольшой склад или
                  международный распределительный центр, решения Loading Systems обеспечат высокую эффективность работы.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Решения для каждой части вашего распределительного центра
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Для ежедневной бесперебойной работы очень важно полагаться на надежность погрузочно-разгрузочных
                  процессов. При проектировании распределительного центра необходимо учитывать все операционные
                  требования, а также существующие нормативы и потребности конечных пользователей оборудования.
                </p>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Независимо от типов ваших товаров, <span className='textBold'>Loading Systems обеспечивает </span>
                  безопасность, энергоэффективность, бесперебойность и экономичность ваших процессов. Loading Systems
                  может предложить предложить решения, с учетом Ваших индивидуальных требований.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Скоростные ворота
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Для ежедневной бесперебойной работы очень важно полагаться на надежность погрузочно-разгрузочных
                  процессов. При проектировании распределительного центра необходимо учитывать все операционные
                  требования, а также существующие нормативы и потребности конечных пользователей оборудования.
                </p>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Скоростные ворота - идеальное решение для различных отраслей промышленности и логистики. Они
                  эффективно поддерживают нужную температуру, открываясь и закрываясь молниеносно, минимизируя потери
                  тепла или холода. Это не только обеспечивает комфортные условия, но и создает безопасную среду для
                  работников.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item w-50'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Фармацевтика
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Для создания стерильной среды мы представляем линию изолирующих продуктов, обеспечивающих защиту от
                  погоды и предотвращение попадания мелких частиц, вроде пыли, бактерий или насекомых, в помещение.
                </p>
              </div>
            </div>
          </div>
          <div className='item w-50'>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Система ступенчатой стыковки
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Наши комбинированные перегрузочные мосты (доклевеллеры) с телескопической аппарелью и системой
                  ступенчатой стыковки позволяют выполнять работы, поддерживая максимальную изоляцию помещения от
                  воздействий со стороны внешней среды:
                </p>
                <ul>
                  <li
                    className='text'
                    data-aos='fade-right'
                  >
                    Грузовой транспорт может пристыковываться без необходимости предварительного открытия дверей кузова
                  </li>
                  <li
                    className='text'
                    data-aos='fade-right'
                  >
                    После этого надувной герметизатор проема обеспечивает плотное прилегание к бортам грузового
                    транспорта и надежную изоляцию помещения от внешней среды
                  </li>
                  <li
                    className='text'
                    data-aos='fade-right'
                  >
                    Далее вы можете открыть секционные ворота без риска нарушить температурный режим и провести стыковку
                    доклеввелера с кузовом грузового транспорта.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item w-50'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Розничная торговля
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Компания Loading Systems уже более 50 лет поставляет решения для погрузочных площадок многим ведущим
                  мировым ритейлерам. Выбирая Loading Systems, вы можете быть уверены в том, что получите безопасное и
                  экономически эффективное надежное решение, отвечающее требованиям современного логистического мира
                  24/7/365. Наши решения устанавливаются на всех этапах цепочки поставок, от производства до склада и
                  далее до розничных магазинов. Наши решения установлены в десятках тысяч торговых точек по всему миру,
                  что позволяет нашим клиентам безопасно и эффективно осуществлять логистические операции.
                </p>
              </div>
            </div>
          </div>
          <div className='item '>
            <div className='imageContainer'>
              <div
                className='imageBox'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/decathlon.png'
                  alt='decathlon'
                />
              </div>
              <div
                className='imageBox'
                data-aos='flip-left'
              >
                <Image
                  width={100}
                  height={100}
                  src='/ikea.png'
                  alt='ikea'
                  className='img'
                />
              </div>
              <div
                className='imageBox'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/primark.png'
                  alt='primark'
                  className='img'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider flexCol='flexCol'>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  БЕЗОПАСНОСТЬ
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Безопасность – наш приоритет. Loading Systems предоставляет самые безопасные и эффективные решения для
                  вашего бизнеса, от проектирования до технического обслуживания, учитывая ваши индивидуальные
                  требования. Наши продукты и услуги соответствуют европейским стандартам и обладают маркировкой CE.
                  Loading Systems также сертифицирована по ISO 9001:2000, VCA и HACCP.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox w-50'>
                <div className='secondaryTitle'>
                  <h3
                    className='title'
                    data-aos='zoom-in-down'
                  >
                    Безопасная погрузка и разгрузка
                  </h3>
                </div>
                <div className='contentText'>
                  <p
                    className='text'
                    data-aos='fade-right'
                  >
                    В дополнение к нашим постоянно совершенствующимся безопасным и надежным решениям для погрузочных
                    платформ, мы создали специальные продукты, которые повышают безопасность процессов погрузки и
                    разгрузки пристыкованных транспортных средств. Наши интегрированные системы безопасности, такие как
                    гидравлические устройства удержания, предотвращают скольжение и преждевременное движение автомобиля,
                    обеспечивая надежную защиту
                  </p>
                </div>
              </div>
              <div
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/stepImage.png'
                  alt='stepImage'
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item w-50'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3
                  className='title'
                  data-aos='zoom-in-down'
                >
                  Устойчивое развитие
                </h3>
              </div>
              <div className='sectionContent'>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Мы стремимся к минимизации углеродного следа, развивая экологически устойчивое будущее. Loading
                  Systems обладает сертификатом ISO 14001, подтверждающим высокий стандарт нашей экологической системы
                  управления.
                </p>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Мы уделяем внимание не только продуктам и сервисам, но и их высокому качеству. Все наши изделия
                  изготовлены из первоклассных материалов, обеспечивая прочность и долгий срок службы. Кроме того,
                  помимо стандартных решений, мы предлагаем широкий выбор энергоэффективных и экологически чистых
                  продуктов
                </p>
                <p
                  className='text'
                  data-aos='fade-right'
                >
                  Наши продукты приносят множество преимуществ: минимизация потерь энергии, увеличение дневного света и
                  постоянный контроль циркуляции воздуха. Загрузочный отсек, оборудованный нашими энергосберегающими
                  продуктами, не только сокращает выбросы углекислого газа, но и существенно экономит электроэнергию.
                </p>
              </div>
            </div>
          </div>
          <div
            className='itemContentImage'
            data-aos='flip-right'
          >
            <Image
              width={100}
              height={100}
              src='/books.png'
              alt='books'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default SolvingPage;
