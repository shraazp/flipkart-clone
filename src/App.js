/**
Redirects to different pages
@returns home page
@author:Shravya P
 */
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';
import { getToken } from './utils/Common';
import { loginStatus } from './actions/categoryActions';
=======
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = getToken();
    if (loggedInUser !== null) {
      dispatch(loginStatus(true));
    }
  }, []);
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
