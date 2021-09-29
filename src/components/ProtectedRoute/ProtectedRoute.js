import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route>
      {() =>
        localStorage.getItem('token') || props.loggedIn ? <Component {...props} /> : <Redirect to="./signin" />
        
      }
    </Route>
  )
}

export default ProtectedRoute;