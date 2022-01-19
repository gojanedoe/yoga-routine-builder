import { React, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yogaPoses from '../data/yogaPoses.json';
import './NewPlayerCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// used https://www.positronx.io/react-responsive-carousel-tutorial/ to help code, BUT I'm using css from a library
// and there are elements I want/need to change
//help with customizing: http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls

export default function NewPlayerCarousel({
  routine,
  slideIndex,
  setSlideIndex
}) {
  const updateSlide = index => {
    setSlideIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel onChange={updateSlide} selectedItem={slideIndex}>
        {routine.map(pose => {
          return <img key={pose.id} src={pose.image} />;
        })}
      </Carousel>
    </div>
  );
}
