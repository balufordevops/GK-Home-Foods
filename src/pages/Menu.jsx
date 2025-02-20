import React from "react";

const Menu = () => {
  // Function to handle scrolling to a specific category
  const scrollToCategory = (categoryId) => {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <h1 className="fw-bold text-center mt-3" style={{ color: "black" }}>Menu</h1>

      {/* Navigation Bar for Categories */}
      <div className="container text-center mt-3">
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("chocolates")}>Chocolates</button>
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("center-filled")}>Center Filled Chocolates</button>
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("customized")}>Customized Chocolates</button>
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("best-sellers")}>Best Sellers</button>
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("sweets")}>Sweets</button>
        <button className="btn btn-primary m-2" onClick={() => scrollToCategory("spices")}>Spices</button>
      </div>

      <div className="container p-3">
        <img src="../src/assets/menu.jpg" alt="" className="img img-fluid rounded shadow" />
      </div>

      <div className="menu-container mt-4 shadow">
        <header className="menu-header">
          <img src="../src/assets/logo.png" alt="GK Chokkies & Pickles" className="logo" />
          <h1 className="menu-title">Menu</h1>
          <p className="contact-info">📞 8522856226</p>
        </header>

        {/* Category Sections with IDs */}
        <section className="category" id="chocolates">
          <h2 className="category-title">Chocolates</h2>
          <ul className="item-list">
            <li className="menu-item">Dark Chocolates - ₹750/Kg</li>
            <li className="menu-item">Milk Chocolates - ₹800/Kg</li>
            <li className="menu-item">Classic Plan Chocolates - ₹800/Kg</li>
            <li className="menu-item">Dry Fruits Chocolates - ₹1000/Kg</li>
            <li className="menu-item">Flavoured Chocolates - ₹1050/Kg</li>
          </ul>
        </section>

        <section className="category" id="center-filled">
          <h2 className="category-title">Center Filled Chocolates</h2>
          <ul className="item-list">
            <li className="menu-item">Rose Gulakand - ₹300/250g</li>
            <li className="menu-item">Pan Masala Chocolates - ₹300/250g</li>
            <li className="menu-item">Mango Chocolates - ₹300/250g</li>
            <li className="menu-item">Pineapple Chocolates - ₹300/250g</li>
            <li className="menu-item">Blueberry Chocolates - ₹350/250g</li>
            <li className="menu-item">Strawberry Chocolates - ₹350/250g</li>
          </ul>
        </section>

        <section className="category" id="customized">
          <h2 className="category-title">Customized Chocolates</h2>
          <ul className="item-list">
            <li className="menu-item">3 Grams Chocolate - ₹6 (Min: 100)</li>
            <li className="menu-item">10 Grams Chocolate - ₹15</li>
            <li className="menu-item">KitKat Chocolate - ₹20</li>
          </ul>
        </section>

        <section className="category" id="best-sellers">
          <h2 className="category-title">Best Sellers</h2>
          <ul className="item-list">
            <li className="menu-item">OREO Chocolates (Big Bar) - ₹250</li>
            <li className="menu-item">Cake POPS (10 Pieces) - ₹300</li>
            <li className="menu-item">Caramel Chocolates - ₹350/250g</li>
            <li className="menu-item">Coconut Bounty - ₹350/250g</li>
            <li className="menu-item">Dates With Dry Fruit - ₹400/250g</li>
            <li className="menu-item">DUBAI Kunafa - ₹400/250g</li>
            <li className="menu-item">Protein Bites - ₹450/250g</li>
          </ul>
        </section>

        <section className="category" id="sweets">
          <h2 className="category-title">Sweets</h2>
          <ul className="item-list">
            <li className="menu-item">Dry Fruits Laddu - ₹350/250g</li>
            <li className="menu-item">Khaju Chikki - ₹400/250g</li>
          </ul>
        </section>

        <section className="category" id="spices">
          <h2 className="category-title">Spices</h2>
          <ul className="item-list">
            <li className="menu-item">Chicken Pickle - ₹300/250g</li>
            <li className="menu-item">Prawns Pickle - ₹400/250g</li>
          </ul>
        </section>

        <footer className="menu-footer">
          <p>Follow us:
            <a href="https://www.instagram.com/gk_chokies_and_pickles_26" target="_blank" rel="noopener noreferrer">
              @gk_chokkies_and_pickles_26
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Menu;
