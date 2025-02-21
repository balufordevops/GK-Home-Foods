import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../store/StoreContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useCart();
  const product = state.products.find((item) => item.id === id);

  if (!product) {
    return <h2 className="text-center">Product not found</h2>;
  }

  function handleAddToCart() {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  }

  return (
    <div className="container product-details">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image || "https://via.placeholder.com/300"} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.basePrice}</h4>
          <p>{product.description}</p>
          <button className="btn btn-primary me-2" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
