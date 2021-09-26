class MainApi {
  constructor({adress}) {
    this._adress = adress;
  }
  _checkResponse() {
    return res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }
  }
  registerUser(data) {
    return fetch(`${this._adress}/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
    }).then(this._checkResponse())
  }
  loginUser(item) {
    return fetch(`${this._adress}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: item.userEmail || item.email,
        password: item.userPassword || item.password
      })
    }).then(this._checkResponse())
  }

  updateUserProfile(user) {
    const token = localStorage.getItem('token')
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({name: user.name, email: user.email})
    }).then(this._checkResponse())
  }
  // Получаем список сохраненных фильмов
  getFavoriteMovies() {
    const token = localStorage.getItem('token');
    return fetch(`${this._adress}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      }
    }).then(this._checkResponse());
  }
  // Добавлем фильм в избранные
  doFavoriteMovie(data){
    const token = localStorage.getItem('token');
    return fetch(`${this._adress}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country ? data.country : 'none',
        director: data.director,
        duration: data.duration, 
        year: data.year, 
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`, 
        trailer: data.trailerLink, 
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id
      })
    }).then(this._checkResponse());
  }
  deleteFavoriteMovie(id) {
    const token = localStorage.getItem('token');
    console.log(id)
    return fetch(`${this._adress}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
    }).then(this._checkResponse());
  }
  getContent(token) {
    return fetch(`${this._adress}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
  }).then(this._checkResponse());
  }
}
const config = {
  adress: 'https://api.rj123-diploma.nomoredomains.rocks',
}
const mainApi = new MainApi(config);
export default mainApi;