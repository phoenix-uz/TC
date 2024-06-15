"use client";
import React, { useState } from "react";
import Button from "../UI/Button";
import "./styles.sass";

const ContactsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxbV3yGAv4i_6eff27RnPmoKaITGlwZu_A1hplfqZ9WhtT7Ro8Vj6_t0g5yEj0idUi-Aw/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();
    if (result.result === "success") {
      alert("Данные успешно отправлены!");
    } else {
      alert("Ошибка отправки данных");
    }
  };
  return (
    <div className='contactsForm'>
      <div className='container'>
        <div className='contactsFormBox'>
          <div className='contactsContainer'>
            <div className='contactsText'>
              <div className='contactsTitle'>
                <h2 className='title'>Свяжитесь с нами</h2>
              </div>
            </div>
            <form
              className='form'
              onSubmit={handleSubmit}
            >
              <div className='inputsContainer'>
                <div className='inputBox'>
                  <input
                    type='text'
                    id='fname'
                    name='firstName'
                    placeholder='Ваше имя'
                    className='input'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    id='lname'
                    name='lastName'
                    placeholder='Ваша фамилия'
                    className='input'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='inputsContainer'>
                <div className='inputBox'>
                  <input
                    type='text'
                    id='companyName'
                    name='company'
                    placeholder='Название компании'
                    className='input'
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Ваш email'
                    className='input'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='inputsContainer'>
                <div className='inputBox'>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='Ваш номер телефона'
                    className='input'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='inputBox'>
                <textarea
                  id='w3review'
                  name='w3review'
                  rows='4'
                  className='input'
                  cols='50'
                  placeholder='Ваше сообщение'
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
          <div className='connectWithUs'>
            <div className='connetcWithUsTitle'>
              <h3 className='title'>Наши контакты: </h3>
            </div>
            <div className='connectWithUsBlock'>
              <div className='connectWithUsBox'>
                <div className='connectWithUsBoxTitle'>
                  <h4 className='title'>Наша почта</h4>
                </div>
                <div className='connectWithUsBoxSubtitle'>
                  <p className='subtitle'>info@fabritec.com</p>
                </div>
              </div>
              <div className='connectWithUsBox'>
                <div className='connectWithUsBoxTitle'>
                  <h4 className='title'>Наш номер</h4>
                </div>
                <div className='connectWithUsBoxSubtitle'>
                  <p className='subtitle'>+8 888 888 888</p>
                </div>
              </div>
              <div className='connectWithUsBox'>
                <div className='connectWithUsBoxTitle'>
                  <h4 className='title'>Наша локация</h4>
                </div>
                <div className='connectWithUsBoxSubtitle'>
                  <p className='subtitle'>
                    050010, Казахстан, г. Алматы ул. Елебекова 10/1, БЦ “Venus” Блок 3, офис 108
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsForm;
