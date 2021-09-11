import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { currentUserContext } from '../../contexts/currentUserContext.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import PageNotFound from '../PageNotFound/PageNotFound.js'
import FilmsArr from '../../vendor/films.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [signIn, setIsSignIn] = useState(true);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    setFilms(FilmsArr);
    if(document.location.pathname === '/') {
      setIsSignIn(false);
    }
  },[])
  return (
    <currentUserContext.Provider value={currentUser}>
    <div className="app">
        <Switch>
          <Route exact path="/">
            <Header signIn={signIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/movies">
          <Header signIn={signIn} />
            <Movies moviesList={films} />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header signIn={signIn} />
            <Movies moviesList={films.filter(el => el.liked === true)} />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header signIn={signIn} />
            <Profile />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </ Switch>
    </div>
    </currentUserContext.Provider>
  );
}

export default App;
