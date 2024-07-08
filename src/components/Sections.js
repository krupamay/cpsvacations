import React from 'react';
import './Sections.css';

const Sections = () => {
  return (
    <div>
      <section id="about" className="py-5 section section-dark">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum ipsum et,
            porta velit. Nam in augue ut lectus accumsan posuere sed sit amet lectus.
          </p>
        </div>
      </section>

      <section id="services" className="py-5 section section-bg">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum ipsum et,
            porta velit. Nam in augue ut lectus accumsan posuere sed sit amet lectus.
          </p>
        </div>
      </section>

      <section id="contact" className="py-5 section section-dark">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum ipsum et,
            porta velit. Nam in augue ut lectus accumsan posuere sed sit amet lectus.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
