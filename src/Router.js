import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/singleProduct/SingleProduct';
import OrderPage from './pages/orderPage/OrderPage';
import Success from './pages/orderSuccess/Success';

export default function RoutesPath() {
  return (
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
  );
}
