/**
Redirects to different pages
@returns home page
@author:Shravya P
 */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';
import { getToken } from './utils/Common';
import { loginStatus } from './actions/categoryActions';

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
