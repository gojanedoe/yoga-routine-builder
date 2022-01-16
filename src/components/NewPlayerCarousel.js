import { React, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yogaPoses from '../data/yogaPoses.json';
import './NewPlayerCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// used https://www.positronx.io/react-responsive-carousel-tutorial/ to help code, BUT I'm using css from a library
// and there are elements I want/need to change
//help with customizing: http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls

export default function NewPlayerCarousel({routine}) {
  const [currImg, setCurrImg] = useState(0);

  const updateSlide = index => {
    console.log(index);
    console.log('pose properties: ', routine[index]);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel onChange={updateSlide}>
        {routine.map(pose => {
          return <img src={pose.image} />;
        })}
      </Carousel>
    </div>
  );
}
