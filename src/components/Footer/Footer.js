import React from 'react';

function Footer() {
  return (
    <footer className="footer container container_footer">
      <div className="container__inner">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <span className="footer__year">&copy; 2020</span>
          <ul className="footer__links">
            <li className="footer__links-item">
              <a 
                href="https://praktikum.yandex.ru" 
                className="footer__links-link" 
                target="_blank"
                rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a 
                href="https://github.com/roman-j123" 
                className="footer__links-link"
                target="_blank"
                rel="noreferrer">Github</a>
            </li>
            <li className="footer__links-item">
              <a 
                href="https://www.facebook.com/roman.ismagilov.50/" 
                className="footer__links-link"
                target="_blank"
                rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
    </div>
  </footer>
  );
}

export default Footer;