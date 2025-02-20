import React, { useState } from "react";
import { useCart } from "../store/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  const navigate = useNavigate();

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const upiID = "8522856226-2@ybl";
  const totalAmount = cart.reduce((total, item) => total + item.basePrice * item.quantity, 0).toFixed(2);
  const upiLink = `upi://pay?pa=${upiID}&pn=GK Home Foods&am=${totalAmount}&cu=INR`;

  function handleProceedToCheckout() {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    setShowPaymentOptions(true);
    setShowQR(false);
    setPaymentConfirmed(false);
  }

  function handlePaymentMethodChange(method) {
    setSelectedPaymentMethod(method);
    setShowQR(false);
    if (method === "card" || method === "netbanking") {
      handleRazorpayPayment();
    }
  }

  function handleUPISelection() {
    setShowQR(true);
  }

  function handlePaymentConfirmation() {
    setPaymentConfirmed(true);
    toast.success("Payment Successful! Your order has been placed.");
    dispatch({ type: "CLEAR_CART" });
    setTimeout(() => {
      navigate("/order-confirmation");
    }, 3000);
  }

  function handleRazorpayPayment() {
    const options = {
      key: "rzp_test_your_key_here", // Replace with your Razorpay key
      amount: totalAmount * 100, // Convert to paise
      currency: "INR",
      name: "GK Home Foods",
      description: "Order Payment",
      handler: function (response) {
        toast.success("Payment Successful!");
        handlePaymentConfirmation();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }

  function copyUPI() {
    navigator.clipboard.writeText(upiID);
    toast.success("UPI ID copied to clipboard!");
  }

  return (
    <div className="container cart-container">
      <div className="row">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card shadow p-3 cart-card">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  className="card-img-top product-img"
                  alt={item.name}
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text price-text">Price: ₹{item.basePrice * item.quantity}</p>
                  <p className="card-text quantity-text">Quantity: {item.quantity}</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-success mx-1" onClick={() => dispatch({ type: "INCREMENT", payload: { id: item.id } })}>
                      +
                    </button>
                    <button className="btn btn-outline-warning mx-1" onClick={() => dispatch({ type: "DECREMENT", payload: { id: item.id } })}>
                      -
                    </button>
                    <button className="btn btn-outline-danger mx-1" onClick={() => dispatch({ type: "REMOVE_ITEM_IN_CART", payload: { id: item.id } })}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center">Cart Is Empty</h1>
        )}
      </div>

      {cart.length > 0 && (
        <div className="checkout-section text-center">
          <h3>Total: ₹{totalAmount}</h3>
          <button className="btn btn-success checkout-btn" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}

      {showPaymentOptions && (
        <div className="payment-section text-center">
          <h4>Select Payment Method</h4>
          <div className="payment-buttons">
            <button className={`btn ${selectedPaymentMethod === "upi" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handlePaymentMethodChange("upi")}>
              UPI
            </button>
            <button className={`btn ${selectedPaymentMethod === "card" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handlePaymentMethodChange("card")}>
              Credit/Debit Card
            </button>
            <button className={`btn ${selectedPaymentMethod === "netbanking" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handlePaymentMethodChange("netbanking")}>
              Net Banking
            </button>
          </div>

          {selectedPaymentMethod === "upi" && (
            <div className="upi-payment">
              <button className="btn btn-outline-primary my-2" onClick={handleUPISelection}>
                Generate QR Code
              </button>
              {showQR && (
                <>
                  <h5>Scan to Pay</h5>
                  <QRCodeCanvas value={upiLink} size={200} />
                  <p>UPI ID: <b>{upiID}</b> <button className="btn btn-secondary btn-sm" onClick={copyUPI}>Copy</button></p>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
