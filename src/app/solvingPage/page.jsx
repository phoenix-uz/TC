"use client";
import ComponentDivider from "@/components/ComponentDivider";
import Button from "@/components/UI/Button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";
import Image from "next/image";
import Link from "next/link";

const SolvingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='solvingPage'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item '>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Хранения в холодных помещениях</h3>
              </div>
              <div className='secondaryTitle'>
                <h3 className='title'>
                  Складские здания
                  <br /> с температурным режимом
                </h3>
              </div>
              <div className='sectionContent'>
                <p className='text'>
                  Loading Systems имеет обширный опыт в применении логистических решений для холодильных и морозильных
                  камер, обеспечивая беспрепятственный проход при различных температурах от -31 до +35 градусов без
                  прерываний в работе и снижения производительности.
                </p>
              </div>
              <div className='secondaryTitle'>
                <h3 className='title'>
                  Наши высокоскоростные ворота обладают
                  <br /> следующими преимуществами
                </h3>
              </div>
              <div className='infoText'>
                <ul>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Поддержание температурного режима
                  </li>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Минимальное энергопотребление
                  </li>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Предотвращение образования льда из-за влаги
                  </li>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Подходят как для внутренних, так и для наружных дверей
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='item itemFlexEnd'>
            <div
              className='itemBox itemBoxCol imageSolving'
              data-aos='flip-right'
            >
              <Image
                width={100}
                height={100}
                src='/stockImage.svg'
                alt='stockImage'
                className='imageReverse img'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item '>
            <div className='itemBox'>
              <div className='secondaryTitle'>
                <h3 className='title'>
                  Решение с телескопической
                  <br /> аппарелью и ступенчатой стыковкой
                </h3>
              </div>
              <div className='sectionContent'>
                <p className='text'>
                  При погрузо-разгрузочных работах в условиях с контролируемой температурой, наши комбинированные
                  перегрузочные мосты (доклевеллеры) с телескопической аппарелью и системой ступенчатой стыковки
                  позволяют выполнять работы, не нарушая температурный режим внутри помещения:
                </p>
              </div>
              <div className='sectionContent'>
                <ul>
                  <li
                    className='text'
                    data-aos='zoom-in-up'
                  >
                    Грузовой транспорт может пристыковываться без необходимости предварительного открытия дверей кузова
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
                    Далее вы можете открыть секционные ворота без риска нарушить температурный режим и провести стыковку
                    доклеввелера с кузовом грузового транспорта.
                  </li>
                </ul>
              </div>
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
          <div className='item itemFlexEnd'>
            <Link
              href='https://www.youtube.com/watch?v=sPkjq5skZUM'
              className='itemBox itemBoxCol imageSolving'
              data-aos='flip-right'
            >
              <Image
                width={100}
                height={100}
                src='/youtube1.svg'
                alt='youtube'
                className='imageReverse img'
              />
            </Link>
          </div>
        </ComponentDivider>
        <ComponentDivider
          flexCol='flexCol'
          bgGray='bgGray'
          id='auto'
        >
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Автомобильная промышленность</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-up'
                >
                  <h3 className='title'>Решения для автомобильных производственных комплексов</h3>
                </div>
                <div
                  className='sectionContent'
                  data-aos='zoom-in-up'
                >
                  <p className='text'>
                    В процессе производства и хранения автомобилей и/или их компонентов контролируемая среда играет
                    ключевую роль. Защита от пыли становится одним из главных вопросов, поскольку пыль может оказать
                    пагубное действие на критические компоненты автомобиля и снизить качество выпускаемой продукции.
                  </p>
                  <p className='text'>
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
                  src='/car.svg'
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
                <Image
                  width={100}
                  height={100}
                  src='/bmwImage.svg'
                  alt='bmwImage'
                  className='imageReverse'
                />
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemContainer'>
              <div className='itemBox  w-50'>
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-up'
                >
                  <h3 className='title'>Эстетичное решение для красивого выставочного зала</h3>
                </div>
                <div
                  className='sectionContent'
                  data-aos='zoom-in-up'
                >
                  <p className='text'>
                    Секционные ворота `&quot`Full Vision`&quot` — популярное решение для дилерских центров. С
                    разнообразием вариантов исполнения мы можем подобрать для вас наиболее подходящее решение с учетом
                    ваших индивидуальных требований. Алюминиевые секции двери могут быть окрашены в разные цвета.
                  </p>
                </div>
              </div>
              <div className='itemBox  w-50'>
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-up'
                >
                  <h3 className='title'>Максимальное пропускание света и экономичность</h3>
                </div>
                <div
                  className='sectionContent'
                  data-aos='zoom-in-up'
                >
                  <p className='text'>
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
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-up'
                >
                  <h3 className='title'>Подъемные платформы: быстрая и Эффективная Транспортировка автомобилей</h3>
                </div>
                <div
                  className='sectionContent'
                  data-aos='zoom-in-up'
                >
                  <p className='text'>
                    Мы предлагаем решения для перемещения автомобилей между этажами при помощи подъемных платформ
                    Loading Systems, гарантируя стабильную работу и безопасное перемещение автомобилей в многоэтажных
                    выставочных залах. Наши подъемные изготовлены из высококачественных материалов и могут быть
                    установлены как внутри, так и перед зданием.
                  </p>
                  <Button>Свяжитесь с нами</Button>
                </div>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider
          flexCol='flexCol'
          id='olineCommertion'
        >
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Онлайн-коммерция</h3>
              </div>
              <div
                className='sectionText'
                data-aos='fade-right'
              >
                <p className='text'>
                  В связи с увеличением количества онлайн-покупок растет спрос на дополнительные складские помещения.
                  Ритейлеры хотят предложить своим покупателям лучший опыт работы в Интернете, а это начинается с
                  эффективного управления потоком товаров. Будь то крупный логистический комплекс или небольшой
                  распределительный центр, компания Loading Systems может предоставить наиболее подходящее решение.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-up'
              >
                <h3 className='title'>Доклевеллер для крупных фургонов и небольших грузовиков</h3>
              </div>
              <div
                className='sectionText'
                data-aos='zoom-in-up'
              >
                <p className='text'>
                  Комбинированный доклевеллер позволяет загружать и разгружать оба типа транспортных средств на одной
                  погрузочной площадке! Таким образом, вы всегда используете все погрузочные площадки для перемещения
                  вашего товара.
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
              src='/docleLeveller.svg'
              alt='docleLeveller'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-up'
              >
                <h3 className='title'>Перегрузочный мост Van-Dock</h3>
              </div>
              <div
                className='sectionText'
                data-aos='zoom-in-up'
              >
                <p className='text'>
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
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
          <div
            className='itemContentImage'
            data-aos='flip-right'
          >
            <Image
              width={100}
              height={100}
              src='/VanDock.svg'
              alt='VanDock'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider
          bgGray='bgGray'
          id='foodIndustry'
        >
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Пищевая промышленность</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
              src='/industry.svg'
              alt='industry'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Герметизатор</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
              src='/Sealer.svg'
              alt='Sealer'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-up'
              >
                <h3 className='title'>Герметизаторы надувного типа</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='zoom-in-up'
              >
                <p className='text'>
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
              src='/Sealer2.svg'
              alt='Sealer2'
              className='imageReverse'
            />
          </div>
        </ComponentDivider>
        <ComponentDivider bgGray='bgGray'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-up'
              >
                <h3 className='title'>Скоростные ворота</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='zoom-in-up'
              >
                <p className='text'>
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
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider id='logistics'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Логистика</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
              <div
                className='secondaryTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Решения для каждой части вашего распределительного центра</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
                  Для ежедневной бесперебойной работы очень важно полагаться на надежность погрузочно-разгрузочных
                  процессов. При проектировании распределительного центра необходимо учитывать все операционные
                  требования, а также существующие нормативы и потребности конечных пользователей оборудования.
                </p>
                <p className='text'>
                  Независимо от типов ваших товаров, <span className='textBold'>Loading Systems обеспечивает </span>
                  безопасность, энергоэффективность, бесперебойность и экономичность ваших процессов. Loading Systems
                  может предложить предложить решения, с учетом Ваших индивидуальных требований.
                </p>
              </div>
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Скоростные ворота</h3>
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
        <ComponentDivider>
          <div
            className='item w-50'
            id='pharmaceuticals'
          >
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Фармацевтика</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
                  Для создания стерильной среды мы представляем линию изолирующих продуктов, обеспечивающих защиту от
                  погоды и предотвращение попадания мелких частиц, вроде пыли, бактерий или насекомых, в помещение.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item '>
            <div className='itemBox'>
              <div
                className='secondaryTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Система ступенчатой стыковки</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
          <div className='item itemFlexEnd'>
            <div
              className='itemBox itemBoxCol'
              data-aos='flip-right'
            >
              <Image
                width={100}
                height={100}
                src='/youtube1.svg'
                alt='youtube'
                className='imageReverse'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider id='retail'>
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Розничная торговля</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
                  Компания Loading Systems уже более 50 лет поставляет решения для погрузочных площадок многим ведущим
                  мировым ритейлерам. Выбирая Loading Systems, вы можете быть уверены в том, что получите безопасное и
                  экономически эффективное надежное решение, отвечающее требованиям современного логистического мира
                  24/7/365. Наши решения устанавливаются на всех этапах цепочки поставок, от производства до склада и
                  далее до розничных магазинов. Наши решения установлены в десятках тысяч торговых точек по всему миру,
                  что позволяет нашим клиентам безопасно и эффективно осуществлять логистические операции.
                </p>
              </div>
              <Button>Свяжитесь с нами</Button>
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
                  src='/decathlon.svg'
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
                  src='/ikea.svg'
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
                  src='/primark.svg'
                  alt='primark'
                  className='img'
                />
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider
          flexCol='flexCol'
          id='safety'
        >
          <div className='item'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Безопасность</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
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
                <div
                  className='secondaryTitle'
                  data-aos='zoom-in-down'
                >
                  <h3 className='title'>Безопасная погрузка и разгрузка</h3>
                </div>
                <div
                  className='contentText'
                  data-aos='fade-right'
                >
                  <p className='text'>
                    В дополнение к нашим постоянно совершенствующимся безопасным и надежным решениям для погрузочных
                    платформ, мы создали специальные продукты, которые повышают безопасность процессов погрузки и
                    разгрузки пристыкованных транспортных средств. Наши интегрированные системы безопасности, такие как
                    гидравлические устройства удержания, предотвращают скольжение и преждевременное движение автомобиля,
                    обеспечивая надежную защиту
                  </p>
                </div>
                <Button>Свяжитесь с нами</Button>
              </div>
              <Link
                href='https://www.youtube.com/watch?v=sPkjq5skZUM'
                className='itemBox itemBoxCol'
                data-aos='flip-right'
              >
                <Image
                  width={100}
                  height={100}
                  src='/youtube1.svg'
                  alt='youtube'
                  className='imageReverse'
                />
              </Link>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider
          bgImage='bgImage'
          id='sustainableDevelopment'
        >
          <div className='item w-50'>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='zoom-in-down'
              >
                <h3 className='title'>Устойчивое развитие</h3>
              </div>
              <div
                className='sectionContent'
                data-aos='fade-right'
              >
                <p className='text'>
                  Мы стремимся к минимизации углеродного следа, развивая экологически устойчивое будущее. Loading
                  Systems обладает сертификатом ISO 14001, подтверждающим высокий стандарт нашей экологической системы
                  управления.
                </p>
                <p className='text'>
                  Мы уделяем внимание не только продуктам и сервисам, но и их высокому качеству. Все наши изделия
                  изготовлены из первоклассных материалов, обеспечивая прочность и долгий срок службы. Кроме того,
                  помимо стандартных решений, мы предлагаем широкий выбор энергоэффективных и экологически чистых
                  продуктов
                </p>
                <p className='text'>
                  Наши продукты приносят множество преимуществ: минимизация потерь энергии, увеличение дневного света и
                  постоянный контроль циркуляции воздуха. Загрузочный отсек, оборудованный нашими энергосберегающими
                  продуктами, не только сокращает выбросы углекислого газа, но и существенно экономит электроэнергию.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default SolvingPage;
