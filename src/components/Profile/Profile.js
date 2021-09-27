import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { currentUserContext } from '../../contexts/currentUserContext.js';
import { useFormWithValidation } from '../../hooks/formValidation.js';

function Profile(props) {
  const validate = useFormWithValidation();
  const currentUser = React.useContext(currentUserContext);
  const [editStatus, setEditStatus] = useState(false);
  
  function handleSubmit(event){
    event.preventDefault();
    props.onEdit(validate.values);
    alert('Вы успешно обновили проифль')
    setEditStatus(false)
  }
  function handleClickEditButton() {
    setEditStatus(true)
  }

  function handleLogout() {
    props.onLogout();
  }

  useEffect(() => {
    validate.setValues(currentUser);
  }, [currentUser]);
  return (
    <>
    <Header signIn={props.loggedIn} />
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__content" method="POST">
          <div className="profile__field field">
            <label className="field__title">Имя</label>
              <input 
                className="field__value" 
                type="text"
                name="name"
                pattern="^[A-Za-zА-ЯЁа-яё -]+$"
                value={validate.values.name || ''}
                onChange={validate.handleChange}
                minLength={2}
                maxLength={20}
                disabled={editStatus ? false : true}
              />
          </div>
          <p className="field__error">{validate.errors.name || ''}</p>
          <div className="profile__field field">
            <label className="field__title">Почта</label>
            <input className="field__value" 
              type="email" 
              name="email"
              value={validate.values.email || ''}
              onChange={validate.handleChange}
              minLength={2}
              maxLength={20}
              disabled={editStatus ? false : true}
              />
          </div>
          <p className="field__error">{validate.errors.email || ''}</p>
        </form>
        <div className="profile__buttons-container">
          <span style={{textAlign: 'center', fontSize: '12px', color: 'red', marginBottom: '15px'}}>{props.errorMessage}</span>
          {editStatus ?
            <button 
              className="profile__submit" 
              type="submit" 
              onClick={handleSubmit}
              disabled={!validate.isValid || validate.values.name.legth === 0}  
              >Сохарнить</button>
          :
          <>
            <button className="profile__navigation profile__navigation_edit" onClick={handleClickEditButton} >Редактировать</button>
            <button className="profile__navigation profile__navigation_exit" onClick={handleLogout}>Выйти из аккаунта</button>
          </>
          }
        </div>
      </div>
    </main>
    </>
  )
}

export default Profile;