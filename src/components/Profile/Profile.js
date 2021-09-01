import React, { useState, useEffect } from 'react';

function Profile(props) {
  const [allProfileInputs, setAllProfileInputs] = useState([]);
  const [editInputProfile, setEditInputProfile] = useState(true);
  const [userName, setUserName] = useState('Виталий');
  const [userEmail, setUserEmail] = useState('pochta@yandex.ru');
  const editButton = document.querySelector('.profile__submit')
  const editNavigationAll = document.querySelectorAll('.profile__navigation');
  useEffect(() => {
    setAllProfileInputs([...document.querySelectorAll('.field__value')]);
  },[])

  function handleClickEditButton() {
    editButton.classList.remove('profile__submit_disabled');
    editNavigationAll.forEach(item => {item.classList.add('profile__navigation_hidden')});
    allProfileInputs.map(item => item.disabled = setEditInputProfile(!editInputProfile));
  }
  function handleClickSaveButton() {
    allProfileInputs.map(item => item.disabled = setEditInputProfile(!editInputProfile));
    editNavigationAll.forEach(item => {item.classList.remove('profile__navigation_hidden')});
    editButton.classList.add('profile__submit_disabled');
  }
  function handleChangeName(event) {
    setUserName(event.target.value);
  }
  function handleChangeEmail(event) {
    setUserEmail(event.target.value);
  }
  return (
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__content" method="POST" action="">
          <div className="profile__field field">
            <label className="field__title">Имя</label>
            <input 
              className="field__value" 
              type="text" 
              value={userName || ''}
              onChange={handleChangeName}
              disabled={editInputProfile} />
          </div>
          <div className="profile__field field">
            <label className="field__title">Почта</label>
            <input className="field__value" 
              type="email" 
              value={userEmail || ''}
              onChange={handleChangeEmail}
              disabled={editInputProfile} />
          </div>
        </form>
        <div className="profile__buttons-container">
          <button className="profile__submit profile__submit_disabled" type="submit" onClick={handleClickSaveButton} >Сохарнать</button>
          <button className="profile__navigation profile__navigation_edit" onClick={handleClickEditButton}>Редактировать</button>
          <button className="profile__navigation profile__navigation_exit">Выйти из аккаунта</button>
        </div>
      </div>
    </main>
  )
}

export default Profile;