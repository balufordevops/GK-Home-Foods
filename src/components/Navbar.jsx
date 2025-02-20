import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../store/StoreContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { state } = useCart();
  const { cart } = state;
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to close navbar on small screens when a link is clicked
  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      document.getElementById("navbarNav").classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-3 sticky-top">
      <div className="container-fluid">
        {/* Left Side - Brand Name & Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="../../public/assets/logo1.jpg"
            alt="logo"
            className="rounded-circle me-2"
            style={{ width: "50px", height: "50px" }}
          />
          <strong style={{ fontFamily: "cursive", fontSize: "28px", color: "darkgreen" }}>
            GK Home Foods
          </strong>
        </NavLink>

        {/* Toggle Button (For Mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars size={25} className="text-dark" />
        </button>

        {/* Navbar Links (Centered in Small Screens) */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center" style={{ fontSize: "20px" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu" onClick={closeNavbar}>Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" onClick={closeNavbar}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side - Cart Icon */}
        <div className="d-flex align-items-center">
          <NavLink className="nav-link position-relative" to="/cart">
            <FaShoppingCart size={30} className="text-dark" />
            {cartItemCount > 0 && (
              <span
                className="badge bg-danger position-absolute"
                style={{ fontSize: "14px", top: "-5px", right: "-10px" }}
              >
                {cartItemCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
