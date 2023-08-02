// authReducer.js
const initialState = {
    isLoggedIn: false,
    user: null,
    username: null,
    email: null,
    password: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          username: null,
          email: null,
          password: null,
        };
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.payload,
        };
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      default:
        return state;
    }
  };
  
  // Action creators
  export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    payload: username,
  });
  
  export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  
  export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password,
  });
  export const logoutUser = () => ({
    type: 'LOGOUT_SUCCESS',
  });
  
  export default authReducer;
  