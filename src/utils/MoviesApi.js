class MoviesApi {
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
  getAllFilms() {
    return fetch(`${this._adress}`, {
      method: 'GET',
      mode: 'cors',
    }).then(this._checkResponse())
  }

}
const config = {
  adress: 'https://api.nomoreparties.co/beatfilm-movies',
}
const moviesApi = new MoviesApi(config);
export default moviesApi;