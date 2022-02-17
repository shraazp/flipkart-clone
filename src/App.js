/**
Redirects to different pages
@returns home page
@author:Shravya P
 */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutesPath from './Router';
import { getToken } from './utils/Common';
import { loginStatus } from './actions/categoryActions';
import { setCart } from './actions/cartActions';
import { getCart } from './services/CartService';
import './App.css';

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
      <div><RoutesPath /></div>
    </div>
  );
}

export default App;
