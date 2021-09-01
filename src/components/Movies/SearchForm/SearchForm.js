import React from 'react';

function SearchForm(props) {
  return (
    <form className="searchForm">
      <div className="searchForm__container">
        <div className="searchForm__icon"></div>
        <input className="searchForm__input" type="search" placeholder="Фильм" />
        <button className="searchForm__button" type="submit">Найти</button>
      </div>
      <label className="searchForm__checkbox-label" htmlFor="shorts">
        <input className="searchForm__checkbox" type="checkbox" id="shorts" onChange={props.handleMoviesList} />
        <span className="searchForm__checkbox-text">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;