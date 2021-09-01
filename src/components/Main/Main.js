import React, {useEffect} from 'react';
import Promo from './Promo/Promo.js';
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Portfolio from './Portfolio/Portfolio.js';

function Main() {
  useEffect(() => {
    document.title = 'Учебный проект студента факультета Веб-разработки.';
  })
  return (
    <main className="main">
      <Promo />
      <section className="main__section section section_about" id="about">
        <h2 className="section__title">О проекте</h2>
        <AboutProject />
      </section>
      <section className="main__section section section_techs" id="tech">
        <h2 className="section__title">Технологии</h2>
        <Techs />
      </section>
      <section className="main__section section section_aboutMe" id="student">
        <h2 className="section__title">Студент</h2>
        <AboutMe />
      </section>
      <section className="main__section section section_portfolio">
        <h2 className="section__title section__title_portfolio">Портфолио</h2>
        <Portfolio />
      </section>
    </main>
  );
}

export default Main;