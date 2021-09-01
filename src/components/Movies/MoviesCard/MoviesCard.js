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
          <span className="card__title">{props.card.name}</span>
          <span className="card__time">{props.card.time}</span>
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
      <img src={props.card.pic} alt={props.card.name} className="card__image" />
    </li>
  )
}

export default MoviesCard;