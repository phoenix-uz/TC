import ComponentDivider from "@/components/ComponentDivider";
import Button from "@/components/UI/Button";
import ComponentAccordion from "@/components/UI/ComponentAccordion";
import Image from "next/image";
import React from "react";

const PageServices = () => {
  return (
    <div className='pageServices'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item '>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Сервисное обслуживание</h3>
              </div>
              <div className='secondaryTitle'>
                <h3 className='title'>
                  Компания Loading Systems не только предоставляет устройства и системы, но также предлагает сервисное
                  обслуживание.
                </h3>
              </div>
              <div className='sectionContent'>
                <p className='text'>
                  Правильное техническое обслуживание оборудования гарантирует его долгий срок службы и защиту на
                  протяжении всего времени эксплуатации, а также минимизирует риск простоев.
                </p>
              </div>
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
                src='/services1.svg'
                alt='services1'
                className='imageReverse'
              />
            </div>
          </div>
        </ComponentDivider>

        <ComponentDivider>
          <div className='item '>
            <div className='itemBox'>
              <div
                className='sectionTitle'
                data-aos='fade-right'
              >
                <h3 className='title'>Сервис и ремонт</h3>
              </div>
              <div className='sectionContent'>
                <p className='text'>
                  Наши сотрудники обладают навыками, знаниями и опытом, необходимыми для обеспечения оптимального ухода
                  за доковым оборудованием и промышленными воротами, независимо от их марки.
                </p>
                <p className='text'>
                  Для обеспечения эффективной и безопасной работы вашей системы поставок важно регулярно проводить
                  техническое обслуживание погрузочных платформ.
                </p>
              </div>
              <Button>Свяжитесь с нами</Button>
            </div>
          </div>
        </ComponentDivider>
      </div>
    </div>
  );
};

export default PageServices;
