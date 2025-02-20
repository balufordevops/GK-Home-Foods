import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      navigate("/"); // Redirect to home if no order details found
    }
  }, [navigate]);

  if (!orderDetails) {
    return <h2 className="text-center">Loading Order Details...</h2>;
  }

  return (
    <div className="container order-confirmation">
      <div className="success-message">
        <h2>Your order has been placed successfully!</h2>
      </div>
      <div className="order-details">
        <h4>Order ID: {orderDetails.orderId}</h4>
        <p>Placed on: {orderDetails.placedOn}</p>
        <h5>Order Summary</h5>
        <ul>
          {orderDetails.products.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ₹{item.basePrice} = ₹{item.basePrice * item.quantity}
            </li>
          ))}
        </ul>
        <p>Subtotal: ₹{orderDetails.subTotal}</p>
        <p>Delivery Fee: ₹{orderDetails.deliveryFee}</p>
        <h4>Total Amount: ₹{orderDetails.totalAmount}</h4>
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default OrderConfirmation;
