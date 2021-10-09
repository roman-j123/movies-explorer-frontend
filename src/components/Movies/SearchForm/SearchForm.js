import React from 'react';

function SearchForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    props.handleInput(event.target.search.value)
  }
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__container">
        <div className="searchForm__icon"></div>
        <input 
          className="searchForm__input" 
          type="search" 
          name="search"
          placeholder="Фильм"
        />
        <button className="searchForm__button" type="submit">Найти</button>
      </div>
      <label className="searchForm__checkbox-label" htmlFor="shorts">
        <input className="searchForm__checkbox" type="checkbox" id="shorts" onChange={props.filter}/>
        <span className="searchForm__checkbox-text">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;