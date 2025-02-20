import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer bg-dark text-white py-5 mt-5"
      style={{
        width: "100%",
        margin: 0,
        padding: "3rem 0",
        fontSize: "0.9rem",
      }}
    >
      <div className="container-fluid px-5">
        <div className="row mx-0 justify-content-between">
          {/* Company Info */}
          <div className="col-md-3 mb-4 text-start">
            <h5>About GK Home Foods</h5>
            <p>
            GK Home Foods is your trusted source for the finest quality homemade chocolates and pickles. 
            We are dedicated to delivering delicious, authentic, and fresh flavors to your table. 
            Whether you're craving a sweet treat or a savory bite, our products are crafted with love and care to bring the best of both worlds to you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-light text-decoration-none">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-light text-decoration-none">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-light text-decoration-none">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="text-light text-decoration-none">
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:kumari.vadarevu2266@gmail.com" className="text-light">
                  Email: kumari.vadarevu2266@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918522856226" className="text-light">
                  Phone: +91 8522856226
                </a>
              </li>
              <li>
                <NavLink to="/support" className="text-light text-decoration-none">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink to="/returns" className="text-light text-decoration-none">
                  Returns & Refunds
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Follow Us</h5>
            <div className="d-flex align-items-center">
              <a href="https://facebook.com" className="text-light me-3">
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="https://www.instagram.com/gk_chokies_and_pickles_26" className="text-light me-3">
                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="https://wa.me/8522856226" className="text-light">
                <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
            <h5 className="mt-4">Newsletter Signup</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-light w-100"
                style={{ borderRadius: "20px" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} GK Home Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
