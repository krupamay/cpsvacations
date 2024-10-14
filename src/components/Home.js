import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaPlay, FaPause } from 'react-icons/fa';

const vacations = [
  {
    id: 1,
    name: 'Beach Paradise',
    image: 'https://via.placeholder.com/800x400',
    description: 'Relax on the sandy beaches and enjoy the sun.'
  },
  {
    id: 2,
    name: 'Mountain Retreat',
    image: 'https://via.placeholder.com/800x400',
    description: 'Escape to the serene mountains and breathe in the fresh air.'
  },
  {
    id: 3,
    name: 'City Adventure',
    image: 'https://via.placeholder.com/800x400',
    description: 'Explore the bustling streets and vibrant culture of the city.'
  }
];

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Welcome to CP's Vacations</h1>
      <p>Your ultimate travel partner</p>

      <Carousel pause={isPlaying ? null : 'hover'}>
        {vacations.map(vacation => (
          <Carousel.Item key={vacation.id}>
            <img
              className="d-block w-100"
              src={vacation.image}
              alt={vacation.name}
            />
            <Carousel.Caption>
              <h3>{vacation.name}</h3>
              <p>{vacation.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Button onClick={handlePlayPause} variant="primary">
        {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? 'Pause' : 'Play'}
      </Button>
    </div>
  );
};

export default Home;
