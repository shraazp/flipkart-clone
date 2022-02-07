/**
Redirects to different pages
@returns home page
@author:Shravya P
 */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/home/Home';
import getAllDeals from './services/OffersService';
import { setOffers } from './actions/offerActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllDeals().then((res) => {
      dispatch(setOffers(res));
    }).catch(() => {
    });
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
