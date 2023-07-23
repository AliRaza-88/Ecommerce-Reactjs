import React, { useState } from 'react';
import caro1 from '../assets/caro1.webp';
import caro2 from '../assets/caro2.webp';
import caro3 from '../assets/caro3.webp';
import caro4 from '../assets/caro4.webp';
import caro5 from '../assets/caro5.webp';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [caro1, caro2, caro3, caro4, caro5];
  const numImages = images.length;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numImages);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
  };

  const isLastImage = activeIndex === numImages - 1;

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-inner p-4 w-100">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="row">
            <div className="col">
              <img src={images[(activeIndex - 1 + numImages) % numImages]} className="d-block w-100" alt="previous" />
            </div>
            <div className="col">
              <img src={images[activeIndex]} className="d-block w-100" alt="current" />
            </div>
            <div className="col">
              <img src={images[(activeIndex + 1) % numImages]} className="d-block w-100" alt="next" />
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev} disabled={activeIndex === 0}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext} disabled={isLastImage}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
