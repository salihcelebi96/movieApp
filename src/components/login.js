import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, logoutUser } from '../reducers/authReducer';
import {Link} from "react-router-dom";

const Auth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Assume you get the form data (username, email, password) from the user input
    const username = 'correctUsername';
    const email = 'correctEmail@example.com';
    const password = 'correctPassword';

    // Assuming your authentication logic here...
    // Check if the username, email, and password are correct
    if (
      username === 'correctUsername' &&
      email === 'correctEmail@example.com' &&
      password === 'correctPassword'
    ) {
      // Dispatch the LOGIN_SUCCESS action to set isLoggedIn to true
      dispatch({ type: 'LOGIN_SUCCESS', payload: { username, email, password } });
    }
  };

  const handleLogout = () => {
    // Dispatch the LOGOUT_SUCCESS action to set isLoggedIn to false
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
