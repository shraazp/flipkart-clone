import React from 'react';
import "./home.css"
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar'
import Slide from '../../components/ImageSlider/Slide';
export default function Home() {
  return <div id="container">
    <Header/>
    <NavBar/>
    <Slide/>
  </div>;
}
