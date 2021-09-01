import React from 'react';

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__content">
        <h3 className="aboutMe__title">Виталий</h3>
        <h4 className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</h4>
        <div className="aboutMe__text">
          <p className="aboutMe__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.&nbsp;С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
        <ul className="aboutMe__social">
          <li className="aboutMe__social-item">
            <a href="https://www.facebook.com/roman.ismagilov.50/" className="aboutMe__social-link" target="_blank" rel="noreferrer">Facebook</a>
          </li>
          <li className="aboutMe__social-item">
            <a href="https://github.com/roman-j123" className="aboutMe__social-link" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
      <div className="aboutMe__photo"></div>
    </div>
  )
}

export default AboutMe;