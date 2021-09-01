import React from 'react';
import Logo from '../../images/logo.svg';

function Login() {
  return (
    <main className="register">
      <div className="register__container">
        <a href="/">
          <img className="register__logo" src={Logo} alt="Логотип сайта" />
        </a>
        <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form form" method="post">
        <label className="form__label" for="register-email">E-Mail</label>
        <input className="form__input" type="email" id="register-email" />
        <label className="form__label" for="register-password">Пароль</label>
        <input className="form__input" type="password" id="register-password" />
        <div className="form__buttom">
          <button className="form__submit" type="submit">Войти</button>
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