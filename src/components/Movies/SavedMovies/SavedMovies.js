import React, { useState, useEffect } from 'react';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from '../../Footer/Footer.js';
import Header from '../../Header/Header.js';
import Preloader from '../Preloader/Preloader.js';

function SavedMovies(props) {
  const [filter, setFilter] = useState(false);
  const [shortMovies, setShortMovies] = useState([])
  
  function toggleFilter() {
    setFilter(!filter);
  }
  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter((movie) => movie.duration <= 40);
  return shortMoviesArray;
  }
  function handleDelete(item) {
    props.handleDeleteMovie(item);
  }
  useEffect(() => {
    if(filter) {
      setShortMovies(sortShortMovies(props.favoriteFilmsList))
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
          {props.loading && <Preloader />}

            <>
            <MoviesCardList
            films={filter ? shortMovies : props.favoriteFilmsList}
            onCardDelete={handleDelete}
            checkFilmStatus={props.checkFilmStatus}
            /> 
          <button 
            className="movies__button-more" 
            type="button" 
          >Еще</button>
          </>
          
      </section>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;