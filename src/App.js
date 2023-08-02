// App.js
import React from 'react';
import Formik from "./components/formik";
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App bg-gray-900">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/formik" element={<Formik/>} />

            
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
