/**
 * Carousel component of the application contains  offers and many more
 * @author:Shravya P
 */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.scss';
import { CarouselData } from '../../constants/data';

export default function ImageSlider() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="carousel"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        {
          CarouselData.map((image) => (
            <div key={image}>
              <img
                className="carousel-image"
                src={image}
                alt="carousel"
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}
