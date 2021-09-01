import React from 'react';

function AboutProject() {
  return (
    <div className="about">
    <div className="about__block">
      <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
      <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
    </div>
    <div className="about__block">
      <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
      <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
    <div className="about__block about__block_full">
      <div className="progressbar">
        <div className="progressbar__block">
          <span className="progressbar__block-text">4 недели</span>
          <span className="progressbar__block-subtext">Front-end</span>
        </div>
        <div className="progressbar__block progressbar__block_active">
          <span className="progressbar__block-text">1 неделя</span>
          <span className="progressbar__block-subtext">Back-end</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutProject;