/**
 * Home page of the application contains header,navigatio bar top offers and footer
 * @author:Shravya P
 */
import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Footer from '../../components/footer/Footer';
import TopOffers from '../../components/offers/TopOffers';
import About from '../../components/brandDirectory/About';
import NavigationBar from '../../components/navbar/NavigationBar';
import Deals from '../../components/offers/Deals';

export default function Home() {
  const offers = useSelector((state) => state.allOffers.offers);
  return (
    <div id="container">
      <div className="header-container">
        <Header />
      </div>
      <NavigationBar />
      <ImageSlider style={{ padding: '0 0 10px' }} />
      {offers['Deals of the Day'] ? <TopOffers products={offers['Deals of the Day']} /> : null}
      {offers['Todays fashion deals'] ? (
        <Deals
          data={offers['Todays fashion deals']}
          title="Today's fashion deals"
          timer={false}
        />
      ) : null}
      <div style={{ backgroundColor: '#fff' }}>
        <About />
        <Footer />
      </div>
    </div>
  );
}
