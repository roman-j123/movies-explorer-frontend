import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [saveCard, setSaveCard] = useState(false)
  useEffect(() => {
    setTimeout(() => {setIsLoading(true)}, 1000)
  },[])
  
  const filmsList = props.films.slice(0, props.showFilms).map((item) => (
    <MoviesCard
      key={item.id} 
      card={item}
      onCardSave={() => {handleSaveCard(item.id)}}
      onCardUnsave={() => {handleUnsaveCard(item.id)}}
      />
  ));

  function handleSaveCard(index) {
    setSaveCard(!saveCard);
    props.films[index].liked = !saveCard;
    console.log(props.films[index])
  }
  function handleUnsaveCard(index) {
    setSaveCard(false);
    props.films[index].liked = saveCard;
  }
  return (
    <>
      <ul className="cardList">
      {filmsList}
      </ul>
      {!isLoading && <Preloader />}
    </>
  )
}

export default MoviesCardList;