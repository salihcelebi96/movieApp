// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import overViewReducers from "../reducers/overViewReducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    overView: overViewReducers,
  },
  
});

export default store;
