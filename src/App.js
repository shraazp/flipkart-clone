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
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/singleProduct/SingleProduct';
import OrderPage from './pages/orderPage/OrderPage';
import Success from './pages/orderSuccess/Success';
import { getToken } from './utils/Common';
import { loginStatus } from './actions/categoryActions';
import { setCart } from './actions/cartActions';
import { getCart } from './services/CartService';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = getToken();
    if (loggedInUser !== null) {
      dispatch(loginStatus(true));
    }
  }, []);
  useEffect(() => {
    getCart().then((res) => {
      dispatch(setCart(res));
    }).catch(() => {
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories/:id" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderPage" element={<OrderPage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
