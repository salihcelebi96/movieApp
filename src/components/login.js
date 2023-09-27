import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../reducers/authReducer';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout: auth0Logout } = useAuth0();
  const login = useSelector(state => state.auth.login);
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    loginWithRedirect();
    dispatch(setLogin(true)); 
    
    
  };

  const handleLogout = () => {
    auth0Logout();
    dispatch(setLogin(false));  
    
  };
  
  return (
    <div className='absolute top-3 right-5'>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;
