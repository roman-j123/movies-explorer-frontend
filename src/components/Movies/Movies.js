import React, { useEffect, useState } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import SearchForm from './SearchForm/SearchForm.js';
import Footer from '../Footer/Footer.js';
import Preloader from './Preloader/Preloader.js';
import Header from '../Header/Header.js';

function Movies(props) {
  const [filter, setFilter] = useState(false);
  const [shortMovies, setShortMovies] = useState([])
  
  function toggleFilter() {
    setFilter(!filter);
  }
  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter((movie) => movie.duration <= 40);
  return shortMoviesArray;
  }
  function handleSave(item) {
    props.handleSaveCard(item);
  }
  function handleDelete(item) {
    props.handleDeleteMovie(item)
  }

  useEffect(() => {
    if(filter) {
      setShortMovies(sortShortMovies(props.searchResults))
    }
  }, [filter])
  return (
    <>
    <Header signIn={props.loggedIn}/>
    <main className="movies container">
      <div className="container__inner">
        <SearchForm
        filter={toggleFilter}
        handleInput={props.handleInput}
        />
        <section className="movies__container"> 
        {props.loading && 
        <Preloader /> 
        }
        <MoviesCardList
          films={filter ? shortMovies : props.searchResults}
          onCardSave={handleSave}
          onCardDelete={handleDelete}
          checkFilmStatus={props.checkFilmStatus}
        />
          <button 
          className="movies__button-more" 
          type="button" 
        >Еще</button> 

      </section>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Movies;