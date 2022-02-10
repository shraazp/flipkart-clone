/**
 * Home page of the application contains header,navigatio bar top offers and footer
 * @author:Shravya P
 */
import React, { useEffect } from 'react';
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header/Header';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Footer from '../../components/footer/Footer';
import TopOffers from '../../components/offers/TopOffers';
import About from '../../components/brandDirectory/About';
import NavigationBar from '../../components/navbar/NavigationBar';
import Deals from '../../components/offers/Deals';
import { getAllDeals, getAllDiscounts, getAllSelection } from '../../services/OffersService';
import { setDeals, setDiscount, setSelection } from '../../actions/categoryActions';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllDeals().then((res) => {
      dispatch(setDeals(res));
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    getAllDiscounts().then((res) => {
      dispatch(setDiscount(res));
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    getAllSelection().then((res) => {
      dispatch(setSelection(res));
    }).catch(() => {
    });
  }, []);
  const deals = useSelector((state) => state.allCategories.deals);
  const discounts = useSelector((state) => state.allCategories.discounts);
  const selections = useSelector((state) => state.allCategories.selections);
  return (
    <div id="container">
      <div className="header-container">
        <Header />
      </div>
      <NavigationBar />
      <ImageSlider style={{ padding: '0 0 10px' }} />
      { deals.length !== 0
        ? (
          <div>
            {' '}
            <TopOffers products={deals} />
            <Deals
              data={discounts}
              title="Discounts for You"
              timer={false}
            />
            <Deals
              data={selections}
              title="Top Selection"
              timer={false}
            />
            {' '}
          </div>
        )
        : null}
      <div style={{ backgroundColor: '#fff' }}>
        <About />
        <Footer />
      </div>
    </div>
  );
}
