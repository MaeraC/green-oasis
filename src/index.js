import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import "typeface-dm-serif-display"
import "typeface-roboto"
import "typeface-lobster"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllPlants from './AllPlants';
import Product from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App /> } /> 
        <Route path="/toutes-nos-plantes" element={ <AllPlants /> } />
        <Route path="/product/:index" element={ <Product /> } />
      </Routes>
    </Router>
   
  </React.StrictMode>
)
