import React, { useState, useEffect,useRef,useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Import local images
import keralaTrip from './assets/images/Kerala_Collage_reduce2.png';
import arunachalTrip from './assets/images/Arunachal_Collage_reduce2.png';
import meghalayaTrip from './assets/images/Meghalaya_Collage_reduce2.png';
import logo from './assets/images/Logo_final_transparent.png';
import whatsappIcon from './assets/images/whatsapp-icon.png';
import instagramIcon from './assets/images/instagram-icon.png';

// Component for individual trip page
const TripPage = ({ trip }) => (
  <div className="container">
    <h2>{trip.tripName}</h2>
    <img src={trip.image} className="img-fluid mb-4" alt={trip.tripName} />
    <p><strong>Punchline:</strong> {trip.punchLine}</p>
    <p><strong>Description:</strong> {trip.description}</p>
    {/* Add more details and images for the trip */}
  </div>
);

const vacations = [
  {
    id: 1,
    tripName: 'Kerala Trip',
    image: keralaTrip
  },
  {
    id: 2,
    tripName: 'Arunachal Pradesh',
    image: arunachalTrip
    },
  {
    id: 3,
    tripName: 'Meghalaya Trip',
    image: meghalayaTrip
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalId = useRef(null);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % vacations.length;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? vacations.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalId.current = setInterval(() => {
        handleNext();
      }, 3000);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [handleNext, isPlaying]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    });
    e.target.reset();
  };

  return (
    <Router>
      <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="CP's Vacation" className="logo" />
      </Link>
      <div className="header-text text-white ms-3">
        <h1 className="display-6 mb-0">Welcome to CP's Vacations</h1>
        <p className="lead mb-0">Vacations Made Memorable</p>
      </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                  <div className="carousel-inner">
                    {vacations.map((trip, index) => (
                      <Link key={trip.id} to={`/trip/${trip.id}`} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={trip.image} className="d-block w-100 carousel-image" alt={trip.tripName} />
                        <div className="carousel-caption d-none d-md-block text-center text-dark">
                          <h5 className="trip-name">{trip.tripName}</h5>
                        </div>
                      </Link>
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
                  <button className="btn btn-link text-dark position-absolute play-pause-button" onClick={togglePlayPause}>
                    {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                  </button>
                </div>
              </div>
            }
          />

          {/* Route for individual trip pages */}
          {vacations.map((trip) => (
            <Route key={trip.id} path={`/trip/${trip.id}`} element={<TripPage trip={trip} />} />
          ))}
        </Routes>

        <section id="about" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">About Us</h2>
            <p>Welcome to CP's Vacations, where your dream vacation comes to life with the expertise of seasoned travellers. Founded by Mr. Chidananda Puri, an avid traveller who has explored almost the entire India and its neighbouring countries, our agency is built on the foundation of personal experience and passion for travel.</p>
            <p>At CP's Vacations, we pride ourselves on offering travel packages to destinations that we have personally explored. This unique approach ensures that at least one of our team members has firsthand knowledge of your chosen destination, providing you with insights and connections that only a true traveller can offer. Our direct and personal relationships with service providers eliminate the middleman, guaranteeing you an authentic and seamless travel experience.</p>
            <p>We stand apart from other travel agencies in India by refusing to deal with B2B travel packages. Unlike many others, we don't simply add a profit margin to pre-packaged deals. Instead, we curate each itinerary with care and precision, based on our own travel experiences and connections.
</p>
<p>Our founder is an MBA post-graduate from the prestigious Xavier Institute of Management, Bhubaneswar, and an engineer from one of oldest government engineering colleges of the country. With a decade of experience in customer-facing leadership roles across multiple reputed companies, Mr. Puri combines his professional expertise with his love & passion for travel to lead a team of dedicated travel enthusiasts.</p>
          </div>
        </section>

        <section id="services" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="bi bi-globe fa-3x mb-3"></i>
                    <h5 className="card-title">Customized Tour Packages</h5>
                    <p className="card-text">Tailor-made travel experiences to suit your preferences and budget.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="bi bi-building fa-3x mb-3"></i>
                    <h5 className="card-title">Hotel Reservations</h5>
                    <p className="card-text">Comfortable and affordable accommodations at your travel destination.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="bi bi-car-front fa-3x mb-3"></i>
                    <h5 className="card-title">Transport Services</h5>
                    <p className="card-text">Reliable and convenient transport options for a hassle-free journey.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body text-center">
                  <i className="bi bi-building fa-3x mb-3"></i>
                    <h5 className="card-title">24/7 Support</h5>
                    <p className="card-text">Assistance whenever you need it, from start to finish.</p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <h3>Custom Travel Packages</h3>
            <p>We offer bespoke travel packages to some of the most breathtaking destinations in India, including:</p>
            <ul>
              <li>
                <strong>Lakshadweep:</strong> Dive into the crystal-clear waters and explore the vibrant marine life of these stunning islands. It’s that place where you find “99% fun and 1% land”.
              </li>
              <li>
                <strong>Kerala:</strong> Experience the serene backwaters, lush greenery, and rich cultural heritage of “God's own country”.
              </li>
              <li>
                <strong>Arunachal Pradesh:</strong> Discover the unexplored beauty of India's northeastern frontier with its majestic landscapes and diverse cultures of this “Land of dawn-lit mountains”.
              </li>
              <li>
                <strong>Meghalaya:</strong> Wander through the living root bridges, picturesque waterfalls, and misty hills of this enchanting state, the “Halfway to heaven”.
              </li>
              <li>
                <strong>Odisha:</strong> Immerse yourself in the historical and cultural richness, from ancient temples to pristine beaches. It’s truly “India’s best kept secret”.
              </li>
              <li>
                <strong>Kashmir:</strong> Embrace the tranquillity of the Valley of Heaven with its snow-capped mountains, beautiful gardens, and houseboat stays. So, “Chalo Kashmir”.
              </li>
            </ul>

            <h3>Personalized Itineraries</h3>
            <p>Each travel package is meticulously planned by our team of passionate travel experts who have personally visited these destinations. This ensures that you receive accurate, firsthand information and recommendations tailored to your preferences.</p>

            <h3>Direct Connections</h3>
            <p>We pride ourselves on having direct and personal connections with local service providers. This means no middlemen and a more authentic travel experience for you. Our relationships with local hosts, guides, and vendors ensure you get the best services at the most competitive prices.</p>

            <h3>Hassle-Free Travel Planning</h3>
            <p>From accommodation and transportation to guided tours and unique local experiences, we take care of all the details. Our goal is to provide you with a hassle-free travel experience so you can focus on creating memories.</p>

            <h3>Expanding Horizons</h3>
            <p>While we currently offer travel packages to Lakshadweep, Kerala, Arunachal Pradesh, Meghalaya, Odisha, and Kashmir, we are continually exploring new destinations to add to our offerings. Stay tuned for more exciting locations soon!</p>

            <p>Choose CP's Vacations for your next vacation and experience the difference of traveling with true experts who share your passion for exploration.</p>
          </div>
        </section>

        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <h5>Contact Details:</h5>
                <p>Plot No. 62/2435, Rajarani Colony<br />Bhubaneswar, Odisha, India. PIN: 751014</p>
                <p>Email: <a href="mailto:cpsvacations.official@gmail.com">cpsvacations.official@gmail.com</a></p>
                <p>Call/WhatsApp: <a href="https://wa.me/919439442166" target="_blank" rel="noopener noreferrer"><img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', marginRight: '8px' }} />+91-9439442166</a></p>
                <p>Instagram: <a href="https://www.instagram.com/cps_vacations/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" style={{ width: '24px', marginRight: '8px' }} />https://www.instagram.com/cps_vacations/</a></p>
                <div style={{ marginTop: '20px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.027384759226!2d85.8415127!3d20.2724824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f3280e5d55%3A0x4050d8bb4aa25411!2sRajarani%20Colony%2C%20Bhubaneswar%2C%20Odisha%20751014!5e0!3m2!1sen!2sin!4v1688902416326!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <h4>Send us a message:</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-3 bg-dark text-white text-center">
          <div className="container">
            <p className="mb-0">© 2024 CP's Vacations. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
