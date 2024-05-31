"use client";
import ComponentDivider from "@/components/ComponentDivider";
import Button from "@/components/UI/Button";
import React from "react";
import "./styles.sass";
import Image from "next/image";
const RollingGates = () => {
  const handleFoldingGatesCatalog = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleFoldingGatesDoubleWalled = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleFoldingGatesWindow = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleFoldingGatesPerforated = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageRollingGates'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Рулонные ворота</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  На протяжении свыше 50 лет нашей деятельности наша компания накопила бесценный опыт в сфере холодной
                  штамповки, внедряем инновационные идеи и накапливаем богатый опыт. Все наши знания и мастерство
                  воплощаются в каждом созданном профиле. Процесс изготовления, включая проектирование, производство и
                  сборку, полностью сосредоточен в одном здании, обеспечивая клиентам оперативность, экономичность и
                  точное соответствие всем требованиям.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/rollingGates.svg'
                alt='rollingGates'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Лучшие материалы для долгосрочной службы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Хорошие рулонные ворота должны обеспечивать беспроблемное функционирование максимально долго.
                  Рольставни в профилях холодной штамповки Loading Systems очень надежны и долговечны. Современный
                  дизайн, тщательный подбор материалов и финишная обработка поверхности – решающий фактор для стабильной
                  и бесшумной работы. Мы используем в производстве только высококлассное сырье – оцинкованные стальные
                  листы, алюминий и нержавеющую сталь ведущих производителей.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Точный расчет структурной ветровой нагрузки</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Стабильность под ветровой нагрузкой – важнейшее условие для рулонных ворот. Совместно с Институтом
                  строительного проектирования Рейнско-Вестфальского технического университета Ахена (RWTH Aachen
                  University) мы разработали сертифицированное программное обеспечение для расчета деформаций рулонных
                  ворот под воздействием ветровой нагрузки с учетом ветровых замков или без них. Эта программа позволяет
                  точно определить параметры ворот в зависимости от скорости ветра.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Вся наша продукция проходит серию испытаний</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Наши новые материалы и профили проходят тщательные внутренние и внешние испытания перед внедрением.
                  Особое внимание уделяется тепло- и звукоизоляционным свойствам, подтвержденным соответствующими
                  сертификатами. Кроме того, мы предоставляем рольставни, сертифицированные на устойчивость к пулям,
                  взрывам и взлому.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/tests.svg'
                alt='tests'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Высочайшее качество как стандарт</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Мы предлагаем обширный выбор двустенных рулонных профилей для промышленных и частных нужд.
                  Многообразие материалов, дизайна и разнообразие цветов открывают множество вариантов для воплощения
                  ваших идей. Наши продукты объединены общей чертой – надежная как скала конструкция.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/quality.svg'
                alt='quality'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Двустенные рулонные профили</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Рекомендуем использовать двустенные рулонные профили, если важны теплоизоляция и плавность движения. В
                  зависимости от модели они обеспечивают утепление с использованием пенополистирола, минеральной ваты
                  или полиуретановой пены, соответствуя высоким стандартам прочности, устойчивости и безопасности.
                  Доступны в разнообразных цветах и изготавливаются из различных материалов. Для повышения безопасности,
                  улучшения видимости и вентиляции в профили можно добавить проемы и прорези.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionSubtitle'>
                <h3 className='subtitle'>Скоростные рулонные ворота – сокращение затрат на электроэнергию</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Помимо стандартных систем, мы предоставляем готовые конструкторы для скоростных рулонных ворот с
                  достижимой средней скоростью около 0.9 м/с. Особенностями выделяется двустенный профиль рулонных ворот
                  ISO-SL с заполнением из пенополиуретана, что существенно снижает уровень шума во время работы и
                  обеспечивает отличные теплоизоляционные характеристики.
                </p>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Собраны и упакованы</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Как поставщики комплексных решений, мы предлагаем готовые наборы рулонных ворот, изготовленные на
                  заказ и адаптированные к индивидуальным потребностям каждого клиента.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='imageBox'>
              <Image
                width={100}
                height={100}
                src='/collected.svg'
                alt='collected'
                className='img'
              />
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Прекрасное дополнение: аксессуары для рулонных ворот</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Сила цепи определяется силой её слабейшего звена, а надежность ворот зависит от надежности каждой
                  детали. Поэтому мы уделяем внимание каждой детали в конечном продукте. Специализируясь на
                  индивидуальных проектах, наш отдел проектирования и производственный отдел работают совместно,
                  создавая профили любой сложности. Учитывая потребности каждого проекта и применяя новейшие методы
                  производства, наши специалисты разрабатывают оптимальные эксклюзивные решения для клиентов. Мы
                  предлагаем широкий выбор материалов для профилей различной толщины, включая:
                </p>
                <ul>
                  <li>Сталь: полированная, оцинкованная или окрашенная</li>
                  <li>Нержавеющая сталь: от марки 1.4016 до 1.4571, полированная, матовая</li>
                  <li>Алюминий: полированный, оцинкованный или окрашенный</li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentDivider>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='buttonBox'>
                <div className='accordionFile'>
                  <div className='secondaryTitle'>
                    <h3 className='title'>Рулонные ворота каталог</h3>
                  </div>
                  <Button
                    className='download'
                    onClick={handleFoldingGatesCatalog}
                  >
                    Скачать
                  </Button>
                </div>
                <div className='accordionFile'>
                  <div className='secondaryTitle'>
                    <h3 className='title'>Рулонные ворота: двустенные профили</h3>
                  </div>
                  <Button
                    className='download'
                    onClick={handleFoldingGatesDoubleWalled}
                  >
                    Скачать
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemBox'>
              <div className='buttonBox'>
                <div className='accordionFile'>
                  <div className='secondaryTitle'>
                    <h3 className='title'>Рулонные ворота: двустенные оконные профил</h3>
                  </div>
                  <Button
                    className='download'
                    onClick={handleFoldingGatesWindow}
                  >
                    Скачать
                  </Button>
                </div>
                <div className='accordionFile'>
                  <div className='secondaryTitle'>
                    <h3 className='title'>Рулонные ворота: перфорированные профили</h3>
                  </div>
                  <Button
                    className='download'
                    onClick={handleFoldingGatesPerforated}
                  >
                    Скачать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default RollingGates;
