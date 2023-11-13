import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../reducers/authReducer';
import "../css/login.css"

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
    <div className='absolute text-2xl   font-serif border-none p-2  rounded-md  top-3 right-5 hover:bg-gray-300 border bg-white  '>
      {isAuthenticated ? (
        <button className='text-black' onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}
         className={`login-button      ${isAuthenticated ? '' : 'blinking'}`}  >Login</button>
      )}
    </div>
  );
};

export default LoginButton;
