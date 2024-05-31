import React from "react";
import "./styles.sass";
import ContactsForm from "@/components/ContactsForm";

const ContactUs = () => {
  return (
    <div className='contactUs'>
      <div className='pageContainer'>
        <div className='container'>
          <div className='contactUsContainer'>
            <div className='sectionTitle'>
              <h3 className='title'>Есть вопросы или предложения?</h3>
            </div>
            <div className='contactUsBox'>
              <div className='contactUsItem'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Адрес</h3>
                </div>
                <div className='sectionText'>
                  <p className='text'>Узбекистан, Ташкент ЮНУСАБАДСКИЙ РАЙОН, ул. АМИРА ТЕМУРА, 60</p>
                </div>
              </div>
            </div>
            <div className='contactUsBox'>
              <div className='contactUsItem'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Электронный адрес</h3>
                </div>
                <div className='sectionText'>
                  <p className='text'>example@gmail.com</p>
                </div>
              </div>
              <div className='contactUsItem'>
                <div className='secondaryTitle'>
                  <h3 className='title'>Номера для справок </h3>
                </div>
                <div className='sectionText'>
                  <p className='text'>+7 777 777 777</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactsForm />
      </div>
    </div>
  );
};

export default ContactUs;
