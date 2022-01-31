import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import Slide from '../../components/ImageSlider/Slide';
import FooterC from '../../components/footer/Footer';

export default function Home() {
  return (
    <div id="container">
      <Header />
      <NavBar />
      <Slide />
      <FooterC />
    </div>
  );
}
