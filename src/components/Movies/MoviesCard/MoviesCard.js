import React, {useState} from 'react';

function MoviesCard(props) {
  const isLiked = props.checkFilmStatus(props.card);
  const [active, isActive] = useState(isLiked)
  function handleClickSave() {
    props.onClickSave(props.card)
    isActive(!active)
  }
  function handleClickDelete() {
    props.onClickDelete(props.card)
    isActive(!active)
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
            className={`card__favorite ${isLiked ? 'card__favorite_true' : ''}`}
            onClick={!isLiked ? handleClickSave : handleClickDelete}
          ></button>
          }
          {
            document.location.pathname === '/saved-movies' && 
            <button 
            className='card__favorite card__favorite_unsave'
            onClick={handleClickDelete}
            ></button>
          }
      </div>
      <img 
        src={props.card.image.url ? `https://api.nomoreparties.co${props.card.image.url}` : props.card.image} 
        alt={props.card.image.name} 
        className="card__image"
        onClick={() => { window.open(`${props.card.trailerLink ? props.card.trailerLink : props.card.trailer}`, '_blank') }} />
    </li>
  )
}

export default MoviesCard;