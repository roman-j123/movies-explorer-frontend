import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  
  function onCardSave(item) {
    props.onCardSave(item)
  }
  function onCardDelete(item) {
    props.onCardDelete(item)
  }
  return (
    <>
      <ul className="cardList">
        {props.films ? 
          props.films.map(item => {
            return <MoviesCard
          key={item.id || item._id} 
          card={item}
          onClickSave={onCardSave}
          onClickDelete={onCardDelete}
          checkFilmStatus={props.checkFilmStatus}
        />
      })
        : 
         console.log('Ошибка')
        }
      </ul>
    </>
  )
}

export default MoviesCardList;