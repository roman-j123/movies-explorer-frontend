import React from 'react';

function MoviesCard(props) {
  function handleSaveCard() {
    props.onCardSave(props.card);
  }
  function handleUnsaveCard() {
    props.onCardUnsave(props.card);
  }

  return (
    <li className="cardList__item card">
      <div className="card__header">
        <div className="card__header-content">
          <span className="card__title">{props.card.nameRU}</span>
          <span className="card__time">
          {props.card.duration <= 40 ? `${props.card.duration}мин` : 
          `${Math.floor(props.card.duration / 60)}ч ${props.card.duration - 60}мин`}
          </span>
        </div>
          { document.location.pathname !== '/saved-movies' && 
          <button 
            className={`card__favorite ${props.card.liked ? 'card__favorite_true' : ''}`}
            onClick={handleSaveCard}
          ></button>
          }
          {
            document.location.pathname === '/saved-movies' && 
            <button 
            className='card__favorite card__favorite_unsave'
            onClick={handleUnsaveCard}
            ></button>
          }
      </div>
      <img src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.image.name} className="card__image" />
    </li>
  )
}

export default MoviesCard;