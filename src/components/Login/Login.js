import React from 'react';
import { useFormWithValidation } from '../../hooks/formValidation.js';

import Logo from '../../images/logo.svg';

function Login(props) {
  const validate = useFormWithValidation();
  
  function handleSubmitForm(event) {
    event.preventDefault();
    props.onLogin(validate.values);
  }
  return (
    <main className="register">
      <div className="register__container">
        <a href="/">
          <img className="register__logo" src={Logo} alt="Логотип сайта" />
        </a>
        <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form form" onSubmit={handleSubmitForm}>
        <label className="form__label" htmlFor="register-email">E-Mail</label>
        <input 
          className={`form__input ${validate.errors.email ? 'form__input_error' : '' }`} 
          type="email" 
          name="email"
          id="email" 
          value={validate.values.email || ''}
          onChange={validate.handleChange}
        />
        <p className="field__error">{validate.errors.email || ''}</p>
        <label className="form__label" htmlFor="register-password">Пароль</label>
        <input 
          className={`form__input ${validate.errors.password ? 'form__input_error' : '' }`} 
          type="password" 
          name="password"
          minLength={8}
          id="password" 
          value={validate.values.password || ''}
          onChange={validate.handleChange}
          required
        />
        <p className="field__error">{validate.errors.password || ''}</p>
        <p className="field__error">{props.errorMessage}</p>
        <div className="form__buttom">
          <button className="form__submit" type="submit" disabled={!validate.isValid}>Войти</button>
          <p className="form__submit-text">Ещё не зарегистрированы?&nbsp;
            <a href="/signup" className="form__submit-text-href">Регистрация</a>
          </p>
        </div>
      </form>
      </div>
    </main>
  )
}

export default Login;