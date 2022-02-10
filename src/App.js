/**
Redirects to different pages
@returns home page
@author:Shravya P
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories/:id" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
