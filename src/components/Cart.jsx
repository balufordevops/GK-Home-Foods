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
  const [selectedUPIApp, setSelectedUPIApp] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

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
  }

  function handlePaymentMethodChange(method) {
    setSelectedPaymentMethod(method);
    setShowQR(false);
  }

  function handleUPISelection(app) {
    setSelectedUPIApp(app);
  }

  function handlePaymentConfirmation() {
    if (!paymentCompleted) {
      toast.error("Payment not completed!");
      return;
    }
    const orderDetails = {
      orderId: `GK${Date.now()}`,
      placedOn: new Date().toLocaleString(),
      products: cart,
      totalItems: cart.length,
      subTotal: totalAmount,
      deliveryFee: 50,
      totalAmount: (parseFloat(totalAmount) + 50).toFixed(2),
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    toast.success("Payment Successful! Your order has been placed.");
    dispatch({ type: "CLEAR_CART" });
    setTimeout(() => {
      navigate("/order-confirmation");
    }, 3000);
  }

  function handleRazorpayPayment() {
    setIsProcessingPayment(true);
    const options = {
      key: "rzp_test_33H0WxHF8MUF98",
      amount: totalAmount * 100,
      currency: "INR",
      name: "GK Home Foods",
      description: "Order Payment",
      handler: function (response) {
        setPaymentCompleted(true);
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

  function handleUPIPayment() {
    if (!selectedUPIApp) {
      toast.error("Please select a UPI app");
      return;
    }
    setIsProcessingPayment(true);
    let upiAppURL = "";
    if (selectedUPIApp === "PhonePe") {
      upiAppURL = `phonepe://upi/pay?pa=${upiID}&pn=GK Home Foods&am=${totalAmount}&cu=INR`;
    } else if (selectedUPIApp === "Google Pay") {
      upiAppURL = `tez://upi/pay?pa=${upiID}&pn=GK Home Foods&am=${totalAmount}&cu=INR`;
    } else if (selectedUPIApp === "Paytm") {
      upiAppURL = `paytmmp://upi/pay?pa=${upiID}&pn=GK Home Foods&am=${totalAmount}&cu=INR`;
    }
    window.location.href = upiAppURL;
    setTimeout(() => {
      setPaymentCompleted(true);
      toast.info("Please confirm your payment before proceeding.");
    }, 5000);
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
            <button className="btn btn-primary mx-2" onClick={() => handlePaymentMethodChange("upi")}>UPI</button>
            <button className="btn btn-primary mx-2" onClick={handleRazorpayPayment}>Credit/Debit Card / Net Banking</button>
          </div>
          {selectedPaymentMethod === "upi" && (
            <div className="upi-app-selection text-center mt-3">
              <h5>Select UPI App</h5>
              <button className="btn btn-secondary mx-2" onClick={() => handleUPISelection("PhonePe")}>PhonePe</button>
              <button className="btn btn-secondary mx-2" onClick={() => handleUPISelection("Google Pay")}>Google Pay</button>
              <button className="btn btn-secondary mx-2" onClick={() => handleUPISelection("Paytm")}>Paytm</button>
              <button className="btn btn-success mt-3" onClick={handleUPIPayment}>Pay ₹{totalAmount}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
