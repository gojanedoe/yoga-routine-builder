import { React, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import yogaPoses from '../data/yogaPoses.json';
import "./NewPlayerCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// used https://www.positronx.io/react-responsive-carousel-tutorial/ to help code, BUT I'm using css from a library
// and there are elements I want/need to change
//help with customizing: http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls


export default function NewPlayerCarousel() {

    const [currImg, setCurrImg] = useState(0)

    return (
        
        <div className="carousel-wrapper">
            <Carousel autoPlay interval="5000">
                {/* here we would write the logic for displaying the poses in order from the json / user input */}
                <img src={yogaPoses[0].image} />
                <img src={yogaPoses[1].image} />
                <img src={yogaPoses[2].image} />
                <img src={yogaPoses[3].image} />
                <img src={yogaPoses[4].image} />
                <img src={yogaPoses[5].image} />
                <img src={yogaPoses[6].image} />
                <img src={yogaPoses[7].image} />
                <img src={yogaPoses[8].image} />
                <img src={yogaPoses[9].image} />
            </Carousel>
        </div>
    );
}