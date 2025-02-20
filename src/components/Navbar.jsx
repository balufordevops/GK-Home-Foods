import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../store/StoreContext"; // Import the cart context

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { state } = useCart();
  const { cart } = state;

  // Calculate the total count of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`);
  };

  return (
    <nav className="navbar shadow navbar-expand-lg p-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="./src/assets/logo1.jpg" alt="logo" className="rounded-pill" style={{ width: "60px", height: "60px", marginRight: "4px" }} />
          <strong style={{ fontFamily: "cursive", fontWeight: "bold", color: "light-green", fontSize: "32px" }}>
            GK Home Foods
          </strong>
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto" style={{ fontSize: "25px" }}>
            <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <NavLink className="nav-link position-relative" to="/cart">
            <i className="bi bi-cart-plus-fill" style={{ fontSize: "2.5rem" }}></i>
            {cartItemCount > 0 && (
              <span className="badge  text-dark rounded-circle position-absolute" style={{ fontSize: "1.2rem", top: "-13px", right: "2px"}}>
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
