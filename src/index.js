import React                                      from 'react'
import ReactDOM                                   from 'react-dom/client'
import App                                        from './App'
import {BrowserRouter as Router, Routes, Route}   from 'react-router-dom'
import AllPlants                                  from './AllPlants'
import Product                                    from './Product'
import Contact                                    from './components/Contact'
import                                            "typeface-dm-serif-display"
import                                            "typeface-roboto"
import                                            "typeface-lobster"
import                                            './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact  path="/"                      element={ <App /> }         /> 
        <Route        path="/toutes-nos-plantes"    element={ <AllPlants /> }   />
        <Route        path="/contact"               element={ <Contact /> }     />
        <Route        path="/product/:index"        element={ <Product /> }     />
      </Routes>
    </Router>
   
  </React.StrictMode>
)
