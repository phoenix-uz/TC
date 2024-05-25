"use client";
import ComponentDivider from "@/components/ComponentDivider";
import React from "react";
import "./styles.sass";
import Button from "@/components/UI/Button";
import Image from "next/image";

const FoldingGates = () => {
  const handleFoldingGates = () => {
    const link = document.createElement("a");
    link.href = "/files/installationDrawings/handlingEquipment/dockDocks/dockDock105NG/dockDock105NG.pdf"; // path to your file in the public directory
    link.download = "dockDock105NG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='pageFoldingGates'>
      <div className='pageContainer'>
        <ComponentDivider>
          <div className='item'>
            <div className='itemBox'>
              <div className='sectionTitle'>
                <h3 className='title'>Складчатые ворота</h3>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Складчатые ворота Loading Systems - это ворота, состоящие из нескольких створок, которые открываются
                  по сторонам проема, аналогично дверям в автобусах. Эти ворота предпочтительны в ситуациях, когда
                  установка обычных подъемно-секционных ворот затруднена:
                </p>
                <ul>
                  <li>В промышленных зданиях, где над проемами проходят коммуникации.</li>
                  <li>В депо метро или на железнодорожных станциях, где есть контактные провода через проемы.</li>
                  <li>
                    На грузовых и автобусных станциях обслуживания, где видимость для водителя может быть ограничена,
                    что приводит к повреждениям нижних секций подъемных или рулонных ворот.
                  </li>
                </ul>
                <p className='text'>
                  В этих сценариях складчатые ворота представляют собой удобное и безопасное решение.
                </p>
              </div>
              <div className='foldingGatesImagesBox'>
                <div className='foldingGatesImagesBoxContainer'>
                  <Image
                    width={100}
                    height={100}
                    src='/foldingGates1.png'
                    alt='foldingGates'
                    className='img'
                  />
                </div>
                <div className='foldingGatesImagesBoxContainer'>
                  <Image
                    width={100}
                    height={100}
                    src='/foldingGates2.png'
                    alt='foldingGates'
                    className='img'
                  />
                </div>
                <div className='foldingGatesImagesBoxContainer'>
                  <Image
                    width={100}
                    height={100}
                    src='/foldingGates3.png'
                    alt='foldingGates'
                    className='img'
                  />
                </div>
                <div className='foldingGatesImagesBoxContainer'>
                  <Image
                    src='/foldingGates4.png'
                    alt='foldingGates'
                    className='img'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='foldingGatesImagesBoxContainer'>
                  <Image
                    width={100}
                    height={100}
                    src='/foldingGates5.png'
                    alt='foldingGates'
                    className='img'
                  />
                </div>
              </div>
              <div className='sectionText'>
                <p className='text'>
                  Створки ворот выполнены из теплоизолированных сэндвич-панелей толщиной 50 мм с обрамлением из
                  алюминиевого профиля. Стандартное решение предполагает 2+2 створки с размерами до 5.000 х 5.250 мм и
                  вариативным приводом: ручным, электрическим или гидравлическим. Опционально предоставляются окна
                  различных размеров, встроенная калитка, покраска в выбранный цвет, а также различные системы
                  безопасности и автоматики. По запросу доступно изготовление практически любых нестандартных
                  конструкций.
                </p>
              </div>
              <div className='accordionFile'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Складчатые ворота</h3>
                </div>
                <Button
                  className='download'
                  onClick={handleFoldingGates}
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

export default FoldingGates;
