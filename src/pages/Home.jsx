import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShippingFast, FaRegSmile, FaStar, FaLeaf } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardStyle = {
    height: '150px',
    objectFit: 'cover',
  };

  return (
    <>
      <section
        className="hero-section text-center py-5 d-flex align-items-center justify-content-center container-fluid"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/bg1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
          color: "white",
          width: "100%",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <div className="content" style={{ position: "relative", zIndex: 2, maxWidth: "700px", textAlign: "center" }} data-aos="fade-up">
          <h1 className="display-4 fw-bold">Welcome to GK Chokkies & Pickles</h1>
          <p className="lead">Discover the finest chokkies and pickles—authentic flavors, homemade goodness, and premium quality!</p>
          <NavLink to="/shop" className="btn btn-primary btn-lg mt-3">Explore Now</NavLink>
        </div>
      </section>

      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Featured Categories</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card shadow h-100 category-card" style={{ overflow: "hidden", borderRadius: "15px" }}>
                <img src="./assets/fas.jpg" className="card-img-top" alt="Sweets" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Sweets</h5>
                  <p className="card-text">Explore delicious sweets and traditional treats!</p>
                  <NavLink to="/shop" className="btn btn-outline-primary">Order Now</NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card shadow h-100 category-card" style={{ overflow: "hidden", borderRadius: "15px" }}>
                <img src="./assets/elec.jpg" className="card-img-top" alt="Chocolates" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Chocolates</h5>
                  <p className="card-text">Indulge in rich, decadent chocolates and sweet delights!</p>
                  <NavLink to="/shop" className="btn btn-outline-primary">Order Now</NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card shadow h-100 category-card" style={{ overflow: "hidden", borderRadius: "15px" }}>
                <img src="./assets/jew.jpg" className="card-img-top" alt="Pickles" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Pickles</h5>
                  <p className="card-text">Savor the tangy and spicy goodness of authentic pickles!</p>
                  <NavLink to="/shop" className="btn btn-outline-primary">Order Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Scrolling Cards Section */}
       <section className=" py-5 ">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Customize Your Chocolates with Photos: A Sweet & Personalized Delight! 🍫📷</h2>
          <div
            className="d-flex justify-content-center gap-4"
              data-aos="zoom-in"
              data-aos-delay="100"
          >
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                  height:'380px'
                }}>
                  <img 
                    src="./assets/3g.jpg" 
                    className="card-img-top" 
                    alt="3 Grams Chocolate" 
                    style={cardStyle}
                  />
                  <div className="card-body">
                    <h5 className="card-title">3 Grams Chocolate</h5>
                    <p className="card-text" style={{height:'100px'}}>
                      Add a sweet touch to any occasion with our 3-gram custom chocolates, personalized with your photos and messages.
                      A mini treat made with love and premium ingredients!
                    </p>
                    <a href="#" className="btn btn-outline-primary">More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
              <div className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                  height:'380px'
                }}>
                  <img 
                    src="./assets/10g.jpg" 
                    className="card-img-top" 
                    alt="10 Grams Chocolate" 
                    style={cardStyle}
                  />
                  <div className="card-body">
                    <h5 className="card-title">10 Grams Chocolate</h5>
                    <p className="card-text" style={{height:'100px'}}>
                      Sweeten any occasion with our 10-gram custom chocolates, personalized with your photos and messages.
                      Crafted with love and premium ingredients for a perfect, bite-sized treat!
                    </p>
                    <a href="#" className="btn btn-outline-primary">More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
              <div className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                  height:'380px'
                }}>
                  <img 
                    src="./assets/kit.jpg" 
                    className="card-img-top" 
                    alt="KitKat Chocolate" 
                    style={cardStyle}
                  />
                  <div className="card-body">
                    <h5 className="card-title">KitKat Chocolate</h5>
                    <p className="card-text" style={{height:'100px'}}>
                      Make every moment sweeter with our personalized KitKat chocolates, featuring your unique designs and messages.
                      Perfect for any celebration or treat!
                    </p>
                    <a href="#" className="btn btn-outline-primary">More</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>


      <section className="services-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3 my-2 text-center" data-aos="fade-up">
              <FaShippingFast size={50} className="mb-3 text-primary" />
              <h5>Fast Shipping</h5>
              <p>Get your orders delivered in record time.</p>
            </div>
            <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="200">
              <FaRegSmile size={50} className="mb-3 text-success" />
              <h5>Customer Satisfaction</h5>
              <p>We prioritize your happiness and satisfaction.</p>
            </div>
            <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="800">
              <FaStar size={50} className="mb-3 text-warning" />
              <h5>Quality Products</h5>
              <p>Only the best orders for our customers.</p>
            </div>
            <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="1200">
              <FaLeaf size={50} className="mb-3 text-success" />
              <h5>Eco-Friendly</h5>
              <p>Committed to sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
