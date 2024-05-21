import React from "react";
import Button from "../UI/Button";
import "./styles.sass";

const ContactsForm = () => {
  return (
    <div className='contactsForm'>
      <div className='container'>
        <div className='contactsContainer'>
          <div className='contactsText'>
            <div className='contactsTitle'>
              <h2 className='title'>СВЯЖИТЕСЬ С НАМИ</h2>
            </div>
            <div className='contactsSubtitle'>
              <p className='subtitle'>И мы сделаем переработку пищевых продуктов удобнее и легче</p>
            </div>
          </div>
          <form className='form'>
            <div className='inputBox'>
              <input
                type='text'
                id='fname'
                name='fname'
                placeholder='Ваше имя'
                className='input'
              />
            </div>
            <div className='inputBox'>
              <input
                type='text'
                id='companyName'
                name='companyName'
                placeholder='Название компании'
                className='input'
              />
            </div>
            <div className='inputBox'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Ваш email'
                className='input'
              />
            </div>
            <Button>Отправить заявку</Button>
          </form>
          <div className='contactsPolicy'>
            <p className='text'>
              Нажимая кнопку, вы подтверждаете, что согласны с пользовательским соглашением <br /> и ознакомлены с{" "}
              <a
                href=''
                className='text'
              >
                Политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsForm;
