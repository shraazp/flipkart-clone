import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./Slide.scss"
export default function Slide() {
    return <div class="carousel-wrapper">
        <Carousel className="carousel" infiniteLoop useKeyboardArrows autoPlay
            showStatus={false}
            showThumbs={false}>
            <div>
                <img className="carousel-image" src="https://rukminim1.flixcart.com/flap/1688/280/image/1b4cc9f62ac9ee97.jpg?q=50"/>
            </div>
            <div>
                <img className="carousel-image" src="https://rukminim1.flixcart.com/flap/1688/280/image/30a361b00075c80e.jpg?q=50"/>
            </div>
            <div>
                <img className="carousel-image" src="https://rukminim1.flixcart.com/flap/844/140/image/fb549ccc7b6b5d46.jpg?q=50"/>
            </div>
            <div>
                <img className="carousel-image" src="https://rukminim1.flixcart.com/flap/1688/280/image/6606d49bbc0af95f.jpg?q=50"/>
            </div>
        </Carousel>
    </div>;
}
