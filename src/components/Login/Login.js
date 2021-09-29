import React from 'react';
import { NavLink } from 'react-router-dom'
import useFormValidation from '../../hooks/formValidation.js';

import Logo from '../../images/logo.svg';

function Login(props) {
  const { values, errors, isValid, handleChange } = useFormValidation({});
  
  function handleSubmitForm(event) {
    event.preventDefault();
    props.onLogin(values);
  }
  return (
    <main className="register">
      <div className="register__container">
        <NavLink to="/">
          <img className="register__logo" src={Logo} alt="Логотип сайта" />
        </NavLink>
        <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form form" onSubmit={handleSubmitForm}>
        <label className="form__label" htmlFor="register-email">E-Mail</label>
        <input 
          className={`form__input ${errors.email ? 'form__input_error' : '' }`} 
          type="email" 
          name="email"
          id="email" 
          value={values.email || ''}
          onChange={handleChange}
        />
        <p className="field__error">{errors.email || ''}</p>
        <label className="form__label" htmlFor="register-password">Пароль</label>
        <input 
          className={`form__input ${errors.password ? 'form__input_error' : '' }`} 
          type="password" 
          name="password"
          minLength={8}
          id="password" 
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <p className="field__error">{errors.password || ''}</p>
        <p className="field__error">{props.errorMessage}</p>
        <div className="form__buttom">
          <button className="form__submit" type="submit" disabled={!isValid}>Войти</button>
          <p className="form__submit-text">Ещё не зарегистрированы?&nbsp;
            <NavLink to="/signup" className="form__submit-text-href">Регистрация</NavLink>
          </p>
        </div>
      </form>
      </div>
    </main>
  )
}

export default Login;