import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // react-redux'tan Provider'ı import edin
import store from './redux/store'; // Redux store'u import edin

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    
        <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
