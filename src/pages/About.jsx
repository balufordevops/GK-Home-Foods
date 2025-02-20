import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [hovered, setHovered] = useState(null); // State to track hovered card

  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero text-center py-5 d-flex align-items-center justify-content-center container-fluid"
        style={{
          backgroundImage: `url('./src/assets/about-bg.jpg')`, // Update with a relevant image for GK Home Foods
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          position: 'relative',
          color: 'white',
          borderRadius: '30px',
          overflow: 'hidden',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div
          className="content"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          <h1 className="display-4 fw-bold">About GK Home Foods</h1>
          <p className="lead">
            Bringing the finest homemade chocolates, pickles, laddus, and sweets directly to your home with love and care.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Journey</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-4" style={{fontSize: '1.2rem'}}>
              <p>
                GK Home Foods was founded with a passion for creating homemade, artisanal foods that bring families together. From delectable chocolates to tangy pickles, we focus on quality and tradition, preparing everything with care and attention to detail.
              </p>
              <p>
                Whether you’re enjoying a bite of our rich customized chocolates or savoring the zest of our homemade pickles, each product is made to offer you a taste of home and comfort.
              </p>
              <p>
                Our goal is to bring joy to your home, one sweet or savory treat at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="vision-mission-section py-5 px-2 bg-light rounded-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold">Our Vision</h3>
              <p>
                To be the go-to destination for homemade treats, offering a blend of traditional flavors and modern tastes for families everywhere.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">Our Mission</h3>
              <p>
                To provide high-quality, handmade products that satisfy the cravings for authentic, flavorful chocolates, pickles, laddus, and sweets—bringing a smile to every household.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section py-5 my-4 bg-secondary-subtle rounded-3">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Core Values</h2>
          <div className="row justify-content-center">
            {/* Dynamic Cards */}
            {[ 
              {
                title: 'Freshness',
                text: 'We prioritize fresh, homemade ingredients to ensure every bite is full of flavor and quality.',
              },
              {
                title: 'Customization',
                text: 'Our chocolates and sweets are customizable to suit your tastes, allowing you to enjoy them exactly the way you want.',
              },
              {
                title: 'Tradition',
                text: 'We blend traditional recipes with new ideas to create timeless, flavorful treats that everyone loves.',
              },
              {
                title: 'Customer Satisfaction',
                text: 'Our commitment is to deliver an experience that exceeds your expectations, from order to delivery.',
              },
              {
                title: 'Sustainability',
                text: 'We make efforts to use eco-friendly packaging and support sustainable farming practices for the ingredients we use.',
              },
            ].map((value, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="card shadow text-center"
                  style={{
                    borderRadius: '15px',
                    transform: hovered === index ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: hovered === index ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
                    height: '150px', // Set a fixed height for consistency
                    display: 'flex',
                    flexDirection: 'column', // Ensure card content grows vertically
                    justifyContent: 'space-between', // Space out the content
                  }}
                >
                  <div className="card-body" style={{ flex: 1 }}>
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Join the GK Home Foods Family</h3>
          <p className="lead mb-4">
            Indulge in the finest homemade treats—from chocolates to pickles, laddus, and more. Taste the love in every bite!
          </p>
          <NavLink to="/shop" className="btn btn-primary btn-lg">
            Order Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
