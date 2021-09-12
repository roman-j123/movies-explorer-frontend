class MainApi {
  _checkRdsponse() {
    return res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}
const mainApi = new MainApi();
export default mainApi;