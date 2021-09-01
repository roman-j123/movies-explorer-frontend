import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();
  return (
    <div className="notFound">
      <div className="notFound__container">
        <h1 className="notFound__title">404</h1>
        <h2 className="notFound__subtitle">Страница не найдена</h2>
      </div>
      <button className="notFound__back" onClick={() => history.goBack()}>Назад</button>
    </div>
  )
}

export default PageNotFound;