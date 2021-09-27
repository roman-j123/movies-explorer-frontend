import React, { useState, useEffect } from 'react';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import { Route, Switch, useHistory } from 'react-router-dom';
import { currentUserContext } from '../../contexts/currentUserContext.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import PageNotFound from '../PageNotFound/PageNotFound.js'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [films, setFilms] = useState([]); // Список всех фильмов
  const [searchFilms, setSearchFilms] = useState([]); // Список выдачи результатов
  const [favoriteFilms, setFavoriteFilms] = useState([]); // Список сохраненных фильмов
  const [favoriteSearchFilms, setFavoriteSearchFilms] = useState(favoriteFilms);
  
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setIsloading] = useState(false)


  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      if(loggedIn) {
        const films = JSON.parse(localStorage.getItem('moviesList'));
        if(films) {
          setFilms(films)
        } else {
          getAllMovies();
        }
        mainApi.getContent(token)
            .then((res) => {
                if (res) {
                    setCurrentUser(res);
                    mainApi.getFavoriteMovies() 
                    .then((response) => {
                      if(response) {
                        const filteredMovies = response.movies.filter(item => item.owner === res._id);
                        console.log(filteredMovies);
                        setFavoriteFilms(filteredMovies)
                      }
                    })
                    .catch(error => {console.log(error)})
                    history.push('/movies');
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("token");
                history.push("/");
            });
          }
          
    }
  },[loggedIn])

  // Получаем весь список фильмов
 function getAllMovies() {
   setIsloading(true);
    moviesApi.getAllFilms()
      .then(response => {
        localStorage.setItem('moviesList', JSON.stringify(response))
      })
      .catch(err => {console.log(err)})
      .finally(() => {
        setIsloading(false);
      })
  }
  function handleRegiser(data) {
    mainApi.registerUser(data)
    .then(response => {
        if(response) {
          handleLogin({email: data.email, password: data.password})
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  function handleLogin(item) {
    mainApi.loginUser(item)
    .then(response => {
      if(response.token) {
        setLoggedIn(true);
        localStorage.setItem('token', response.token);
        history.push('/movies');
      }
    })
    .catch(error => {
      if(error === 'Error: 401') {
        setErrorMessage('Вы ввели неправильный логин или пароль.')
      }
      console.log(error);
    })
  }
  function handleLogout() {
    localStorage.removeItem('searchResult');
    localStorage.removeItem('moviesList');
    localStorage.removeItem('token');
    setCurrentUser({name: '', email: ''})
    setFilms([]);
    setSearchFilms([]);
    setFavoriteFilms([]);
    setFavoriteSearchFilms([]);
    setLoggedIn(false);
  }

  function handleGetUserInfo() {
    const token = localStorage.getItem('token')
    mainApi.getContent(token)
      .then(response => {
        setCurrentUser(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  function handleUpdateUserProfile(profile) {
    mainApi.updateUserProfile(profile)
    .then(response => {
      setCurrentUser(response)
    })
    .catch((error) => {
      if(error === 'Error: 400') {
        setErrorMessage('При обновлении профиля произошла ошибка')
        setTimeout(() => {
            setErrorMessage('')
        },10000)  
      }
      console.log(error)
    })
  }

  // Сохраняем фильм
  function handleFavoriteMovie(data) {
    mainApi.doFavoriteMovie(data)
    .then(response => {
      const newSavedFilm = response;
      setFavoriteFilms([...favoriteFilms, newSavedFilm]);
    })
    .catch(error => {
      console.log(error);
    })
  }
  function checkFilmStatus(film) {
    return favoriteFilms.some((item) => item.movieId === film.id && item.owner === currentUser._id);
  }
  function handleDeleteFilm(data) {
    const movieId = favoriteFilms.find((item) => item.nameRU === data.nameRU);
    mainApi.deleteFavoriteMovie(movieId._id)
      .then(() => {
        mainApi.getFavoriteMovies() 
        .then((response) => {
          if(response) {
            console.log(response.movies);
            setFavoriteFilms(response.movies)
          }
        })
        .catch(error => {console.log(error)})
      })
      .catch((err) => console.log(err));
  }

  function handleInput(value) {
    searchAllMovies(value)
  }
  function handleFavoriteInput(value) {
    searchFavoriteMovies(value)
  }
  // Поиск фильмов
  function handleSubmit(data, value) {
    const searchResult = data.filter((item) => {
      return ( 
        item.nameRU.toLowerCase().includes(value.toLowerCase())
              )
    })
    if(searchResult.length < 1) {
      return
    }
    return searchResult;
  }
  function searchAllMovies(keyword) {
    const films = JSON.parse(localStorage.getItem('moviesList'));
    setSearchFilms(handleSubmit(films, keyword))
    return localStorage.setItem('searchResult', JSON.stringify(searchFilms))
  }
  function searchFavoriteMovies(keyword) {
    setFavoriteSearchFilms(favoriteFilms)
    if(keyword !== '') {
      setFavoriteSearchFilms(handleSubmit(favoriteFilms, keyword))
    } 
  }
  // Сортировка коротких фильмов

  
  
  useEffect(() => {
    if(searchFilms) {
      localStorage.setItem('searchResult', JSON.stringify(searchFilms));
    } else {
      localStorage.setItem('searchResult', undefined);
    } 
    if(favoriteFilms) {
      setFavoriteSearchFilms(favoriteFilms)
    }
  },[loggedIn, favoriteFilms, searchFilms])

  return (
    <currentUserContext.Provider value={currentUser}>
    <div className="app">
        <Switch>
          <Route exact path="/">
            <Header signIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegiser}            
             />
          </Route>
          <Route path="/signin">
            <Login 
              onLogin={handleLogin}
              errorMessage={errorMessage}
            />
          </Route>
          <ProtectedRoute 
            path="/movies" 
            loggedIn={loggedIn}
            component={Movies}
            searchResults={searchFilms}
            handleSaveCard={handleFavoriteMovie}
            handleDeleteMovie={handleDeleteFilm}
            checkFilmStatus={checkFilmStatus}
            loading={loading}
            handleInput={handleInput}
            />
          <ProtectedRoute 
            path="/saved-movies" 
            loggedIn={loggedIn}
            component={SavedMovies}
            favoriteFilmsList={favoriteSearchFilms}
            handleDeleteMovie={handleDeleteFilm}
            checkFilmStatus={checkFilmStatus}
            handleInput={handleFavoriteInput}
          />
          <ProtectedRoute 
            path="/profile" 
            loggedIn={loggedIn}
            component={Profile}
            userInfo={handleGetUserInfo}
            onEdit={handleUpdateUserProfile}
            onLogout={handleLogout}
            errorMessage={errorMessage}
            />
          <Route path="*">
            <PageNotFound />
          </Route>
        </ Switch>
    </div>
    </currentUserContext.Provider>
  );
}

export default App;
