import React from 'react';

function Portfolio() {
  return (
    <ul className="portfolio">
    <li className="portfolio__item">
      <a href="https://github.com/roman-j123/how-to-learn" className="portfolio__link">
        <span className="portfolio__link-text">Статичный сайт</span>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
          </svg>              
      </a>
    </li>
    <li className="portfolio__item">
      <a href="https://github.com/roman-j123/russian-travel" className="portfolio__link">
        <span className="portfolio__link-text">Адаптивный сайт</span>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
          </svg>
          </a>
    </li>
    <li className="portfolio__item">
      <a href="https://github.com/roman-j123/react-mesto-api-full" className="portfolio__link">
        <span className="portfolio__link-text">Одностраничное приложение</span>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
          </svg>
      </a>
    </li>
  </ul>
  )
}

export default Portfolio;