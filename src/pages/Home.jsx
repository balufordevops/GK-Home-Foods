import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShippingFast, FaRegSmile, FaStar, FaLeaf } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
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
        <div className="content px-3" style={{ position: "relative", zIndex: 2, maxWidth: "700px" }} data-aos="fade-up">
          <h1 className="display-4 fw-bold">Welcome to GK Chokkies & Pickles</h1>
          <p className="lead">Discover the finest chokkies and pickles—authentic flavors, homemade goodness, and premium quality!</p>
          <NavLink to="/shop" className="btn btn-primary btn-lg mt-3">Explore Now</NavLink>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Featured Categories</h2>
          <div className="row g-4">
            {[
              { img: "./assets/fas.jpg", title: "Sweets", desc: "Explore delicious sweets and traditional treats!" },
              { img: "./assets/elec.jpg", title: "Chocolates", desc: "Indulge in rich, decadent chocolates and sweet delights!" },
              { img: "./assets/jew.jpg", title: "Pickles", desc: "Savor the tangy and spicy goodness of authentic pickles!" }
            ].map((category, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={index} data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                <div className="card shadow h-100" style={{ borderRadius: "15px" }}>
                  <img src={category.img} className="card-img-top" alt={category.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.desc}</p>
                    <NavLink to="/shop" className="btn btn-outline-primary">Order Now</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Chocolates Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Customize Your Chocolates with Photos! 🍫📷</h2>
          <div className="row g-4">
            {[
              { img: "./assets/3g.jpg", title: "3 Grams Chocolate", desc: "Mini treat made with love and premium ingredients!" },
              { img: "./assets/10g.jpg", title: "10 Grams Chocolate", desc: "Sweeten any occasion with our 10-gram custom chocolates." },
              { img: "./assets/kit.jpg", title: "KitKat Chocolate", desc: "Make every moment sweeter with personalized KitKat chocolates." }
            ].map((item, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={index} data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                <div className="card shadow h-100" style={{ borderRadius: "15px" }}>
                  <img src={item.img} className="card-img-top" alt={item.title} style={{ height: "150px", objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text" style={{ minHeight: "60px" }}>{item.desc}</p>
                    <a href="#" className="btn btn-outline-primary">More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row text-center g-4">
            {[
              { icon: <FaShippingFast size={50} className="text-primary" />, title: "Fast Shipping", desc: "Get your orders delivered in record time." },
              { icon: <FaRegSmile size={50} className="text-success" />, title: "Customer Satisfaction", desc: "We prioritize your happiness and satisfaction." },
              { icon: <FaStar size={50} className="text-warning" />, title: "Quality Products", desc: "Only the best orders for our customers." },
              { icon: <FaLeaf size={50} className="text-success" />, title: "Eco-Friendly", desc: "Committed to sustainable practices." }
            ].map((service, index) => (
              <div className="col-md-3 col-sm-6 col-12" key={index} data-aos="fade-up" data-aos-delay={200 * index}>
                {service.icon}
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
