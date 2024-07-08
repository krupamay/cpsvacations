import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ vacations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Slideshow logic here
  }, [activeIndex]);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % vacations.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? vacations.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner">
          {vacations.map((vacation, index) => (
            <div key={vacation.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={vacation.image} className="d-block w-100" alt={vacation.name} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{vacation.name}</h5>
                <p>{vacation.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <ol className="carousel-indicators">
          {vacations.map((_, index) => (
            <li
              key={index}
              onClick={() => handleDotClick(index)}
              className={index === activeIndex ? 'active' : ''}
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to={index}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Carousel;
