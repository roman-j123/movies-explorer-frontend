import React from 'react';
import { useFormWithValidation } from '../../hooks/formValidation.js';
import Logo from '../../images/logo.svg';

function Register(props) {
  const validate = useFormWithValidation();

  function handleSubmitForm(event) {
    event.preventDefault();
    props.onRegister(validate.values)
  }
  return (
    <main className="register">
      <div className="register__container">
        <a href="/">
          <img className="register__logo" src={Logo} alt="Логотип сайта" />
        </a>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form form" onSubmit={handleSubmitForm}>
          <label className="form__label" htmlFor="register-name">Имя</label>
          <input 
            className={`form__input ${validate.errors.name ? 'form__input_error' : '' }`}
            type="text" 
            name="name"
            minLength={2}
            id="register-name" 
            value={validate.values.name|| ''}
            onChange={validate.handleChange}  
            required
          />
          <p className="field__error">{validate.errors.name || ''}</p>
          <label className="form__label" htmlFor="register-email">E-Mail</label>
          <input 
            className={`form__input ${validate.errors.email ? 'form__input_error' : '' }`}
            type="email" 
            name="email"
            id="register-email"
            value={validate.values.email || ''}
            onChange={validate.handleChange} 
            required
          />
          <p className="field__error">{validate.errors.email || ''}</p>
          <label className="form__label" htmlFor="register-password">Пароль</label>
          <input 
            className={`form__input ${validate.errors.password ? 'form__input_error' : '' }`} 
            type="password" 
            name="password"
            minLength={8}
            id="register-password"
            value={validate.values.password || ''}
            onChange={validate.handleChange} 
            required
          />
          <p className="field__error">{validate.errors.password || ''}</p>
          <div className="form__buttom">
            <button className="form__submit" type="submit" disabled={!validate.isValid}>Зарегистрироваться</button>
            <p className="form__submit-text">Уже зарегистрированы?&nbsp;
            <a href="/signin" className="form__submit-text-href">Войти</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register;