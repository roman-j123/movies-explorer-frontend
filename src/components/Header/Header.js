import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg';

function Header(props) {
  const [navigationState, setNavigationState] = useState(false);
  const [navigationItemState, setNavigationItemState] = useState(false);

  function handleNavigationState() {
    setNavigationState(!navigationState);
    setNavigationItemState(!navigationState);
    document.querySelector('.app').classList.toggle('app_fixed');
    document.querySelector('#navigation').classList.toggle('header__navigation_open');
    document.querySelector('.burger').classList.toggle('burger_close');
  }
  function handleCloseNavigation() {
    setNavigationState(false);
    setNavigationItemState(false);
    document.querySelector('.app').classList.remove('app_fixed');
    document.querySelector('#navigation').classList.remove('header__navigation_open');
    document.querySelector('.burger').classList.remove('burger_close');
  }
  return (
    <header className="header container">
      <div className="container__inner">
        <div className="header__container">
          <a href='/'>
            <img src={logo} alt="Логотип сайта" />
          </a>
          {
            props.signIn === true && 
            ( <ul className="header__navigation" id="navigation">
                <li className="header__navigation-item">
                  <button className="burger" onClick={handleNavigationState}></button>
                </li>
                <li className={`header__navigation-item header__navigation-item_main ${navigationItemState ? "header__navigation-item_open" : ""}`}>
                  <NavLink 
                  exact
                  to="/" 
                  onClick={handleCloseNavigation} 
                  activeClassName="header__navigation-link_active"
                  className="header__navigation-link">Главная</NavLink>
                </li>
                <li className={`header__navigation-item ${navigationItemState ? "header__navigation-item_open" : ""}`}>
                  <NavLink 
                  to="/movies" 
                  onClick={handleCloseNavigation} 
                  activeClassName="header__navigation-link_active"
                  className="header__navigation-link">Фильмы</NavLink>
                </li>
                <li className={`header__navigation-item ${navigationItemState ? "header__navigation-item_open" : ""}`}>
                  <NavLink 
                  to="/saved-movies" 
                  onClick={handleCloseNavigation} 
                  activeClassName="header__navigation-link_active"
                  className="header__navigation-link">Сохраненные фильмы</NavLink>
                </li>
                <li className={`header__navigation-item ${navigationItemState ? "header__navigation-item_open" : ""}`}>
                  <NavLink 
                  to="/profile" 
                  onClick={handleCloseNavigation}
                  className="header__navigation-link header__navigation-link_accaunt">Аккаунт</NavLink>
                </li> 
              </ul> )
            }
            { 
            props.signIn === false && 
            ( <ul className="header__login">
                <li className="header__login-item">
                  <NavLink to="/signup" className="header__login-link">Регистрация</NavLink>
                </li>
               <li className="header__login-item">
                  <NavLink to="/signin" className="header__login-link header__login-link_signin">Войти</NavLink>
              </li> 
          </ul> )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;