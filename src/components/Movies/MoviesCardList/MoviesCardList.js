import React, { useState ,useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [renderMovies, setRenderMovies] = useState(0);
  const [showMovies, setShowMovies] = useState([]);
  function onCardSave(item) {
    props.onCardSave(item)
  }
  function onCardDelete(item) {
    props.onCardDelete(item)
  }
  function showMore() {
    if(screenSize > 1280) {
      console.log('desctop_size clicked')
      setRenderMovies(renderMovies + 3);
      if(renderMovies === 7) {
        setRenderMovies(renderMovies + 7)
      }
    }
    if(screenSize > 461 && screenSize < 1279) {
      console.log('tablet_size clicked')
      setRenderMovies(renderMovies + 2);
    }
    if(screenSize > 320 && screenSize < 460) {
      console.log('mobile_size clicked')
      setRenderMovies(renderMovies + 2);
    }
  }
  useEffect(() => {
    setShowMovies(props.films)
  },[props.films])
  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setScreenSize(window.innerWidth);
      }, 500);
    })
    if(screenSize > 1280) {
      console.log('desctop_size')
      setRenderMovies(12);
    }
    if(screenSize > 461 && screenSize < 1279) {
      console.log('tablet_size')
      setRenderMovies(8);
    }
    if(screenSize > 320 && screenSize < 460) {
      console.log('mobile_size')
      setRenderMovies(5);
    }
  },[showMovies])

  return (
    <>
      <ul className="cardList">
        { 
          showMovies.slice(0,renderMovies).map(item => {
            return <MoviesCard
          key={item.id || item._id} 
          card={item}
          onClickSave={onCardSave}
          onClickDelete={onCardDelete}
          checkFilmStatus={props.checkFilmStatus}
          />
          })
        }
      </ul>
      {showMovies.length > renderMovies ?
          <button 
          className="movies__button-more" 
          type="button"
          onClick={showMore}
        >Еще</button> 
        :
        null
      }
    </>
  )
}

export default MoviesCardList;