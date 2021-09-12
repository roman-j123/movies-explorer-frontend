import React, { useState } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import SearchForm from './SearchForm/SearchForm.js';

function Movies(props) {
  const [showShortMovies, setShowShortMovies] = useState(false);
  const [showFilms, setShowFilms] = useState(12);

  function handleShowMore() {
    if(showFilms <= props.moviesList.length) {
      setShowFilms(showFilms + 12);
    } else {
      document.querySelector('.movies__button-more').disabled = true;
    }
  }
  function handleShowShortMovies() {
    setShowShortMovies(!showShortMovies)
  }
  return (
    <>
    <main className="movies container">
      <div className="container__inner">
        <SearchForm handleMoviesList={handleShowShortMovies} />
        <section className="movies__container">
        <MoviesCardList
          films={(showShortMovies ? props.moviesList.filter(el => el.duration <= 40) : props.moviesList )}
          showFilms={showFilms}
        />
        <button className="movies__button-more" type="button" onClick={handleShowMore}>Еще</button>
      </section>
      </div>
    </main>
    </>
  )
}

export default Movies;