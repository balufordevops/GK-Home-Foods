import React, { useState } from "react";

const ContactUs = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Constructing the mailto link with form data
    const mailtoLink = `mailto:kumari.vadarevu2266@gmail.com?subject=Message from ${formData.name}&body=Email: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink; // This will open the user's email client
    setIsSubmitted(true); // Show confirmation message
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="contact-hero text-center py-5 d-flex align-items-center justify-content-center container-fluid"
        style={{
          backgroundImage: `url('./src/assets/contact-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
          color: "white",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          className="content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          <h1 className="display-4 fw-bold">Contact GK Home Foods</h1>
          <p className="lead">
            Have questions or feedback? Reach out to us and we’ll be happy to assist!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">We’d Love to Hear from You</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control rounded-pill px-3"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control rounded-pill px-3"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control rounded-3 px-3"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {isSubmitted && (
                <div className="alert alert-success mt-4" role="alert">
                  Thank you for reaching out! We’ll respond to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-5 bg-light rounded-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Contact Information</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 text-center">
              <h5>Email</h5>
              <p>kumari.vadarevu2266@gmail.com</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <h5>Phone</h5>
              <p>+91-852-285-6226</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <h5>Address</h5>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-3 my-4 bg-dark-subtle rounded-2">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Q: How can I order customized chocolates?</strong>
              <p>A: You can order customized chocolates directly from our website or contact us via email.</p>
            </li>
            <li className="list-group-item">
              <strong>Q: Do you offer international shipping?</strong>
              <p>A: No, we only deliver in Vijayawada</p>
            </li>
            <li className="list-group-item">
              <strong>Q: Are your products vegetarian?</strong>
              <p>A: Most of our products are vegetarian. Please check product details for specific dietary information.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Connect with Us</h3>
          <div className="d-flex justify-content-center">
            <a
              href="https://facebook.com/gkhomefoods"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://wa.me/8522856226"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://www.instagram.com/gk_chokies_and_pickles_26"
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
