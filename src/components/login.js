import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, logoutUser } from '../reducers/authReducer';
import {Link} from "react-router-dom";

const Auth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    
    const username = 'correctUsername';
    const email = 'correctEmail@example.com';
    const password = 'correctPassword';

   
    
    if (
      username === 'correctUsername' &&
      email === 'correctEmail@example.com' &&
      password === 'correctPassword'
    ) {
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { username, email, password } });
    }
  };

  const handleLogout = () => {
    
    dispatch(logoutUser());
  };

  return (
    <div className='text-white absolute top-1 right-2'>
      {isLoggedIn ? (
        <div>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
            <Link to="/formik">
            <button onClick={handleLogin}>Login</button>
            </Link>
          
        </div>
      )}
    </div>
  );
};

export default Auth;
