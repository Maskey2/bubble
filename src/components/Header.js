import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './../img/header2.jpg'
import img2 from './../img/header.jpg'
import img3 from './../img/header3.jpg'
import './../App.css';

export default function Header() {
    return (
        <Carousel dynamicHeight={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay transitionTime={600}>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
        </Carousel>
    )

}