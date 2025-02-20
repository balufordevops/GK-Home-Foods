import { useState } from "react";
import { useCart } from "../store/StoreContext"; 
import { toast } from "react-toastify";
import "./Shop.css";

// Import images
import DarkChocolate from "../assets/Dark_Chocolate.jpg";
import MilkChocolate from "../assets/Milk_Chocolate.jpg";
import ClassicPlaneChocolate from "../assets/ClassicplaneChocolate.jpg";
import DryFruitsChocolate from "../assets/Dry fruit.jpg";
import FlavouredChocolate from "../assets/flavoured chocolate.jpg";
import RoseGulakand from "../assets/rose gulakand.jpg";
import PanmasalaChocolate from "../assets/panmasala.jpg";
import mango from "../assets/mango.jpg";
import PineApple from "../assets/pineapple.jpg";
import BlueBerry from "../assets/blueberry.jpg";
import Strawberry from "../assets/strawberry.jpg";
import dryFruitsLaddu from "../assets/dry fruit laddu.jpg";
import khajuchikki from "../assets/khaju chikki.jpg";
import oreoChocolate from "../assets/oreo.jpg";
import cakePops from "../assets/cake pops.jpg";
import Caramel from "../assets/caramel.jpg";
import coconutBounty from "../assets/coconut bounty.jpg";
import datesDryFruits from "../assets/dates dry fruits.jpg";
import dubaiKunafa from "../assets/dubai kunafa.jpg";
import proteinBites from "../assets/protein bites.jpg";
import chickenPickle from "../assets/chicken pickle.jpg";
import prawnsPickle from "../assets/prawns pickle.jpg";

const categories = [
  {
    id: 1,
    title: "Chocolates",
    products: [
      { id: "c1", name: "Dark Chocolate", basePrice: 188, image: DarkChocolate },
      { id: "c2", name: "Milk Chocolate", basePrice: 200, image: MilkChocolate },
      { id: "c3", name: "Classic-Plane Chocolate", basePrice: 200, image: ClassicPlaneChocolate },
      { id: "c4", name: "Dry-Fruits Chocolate", basePrice: 250, image: DryFruitsChocolate },
      { id: "c5", name: "Flavoured Chocolate", basePrice: 263, image: FlavouredChocolate },
    ],
  },
  {
    id: 2,
    title: "Center Filled Chocolates",
    products: [
      { id: "cf1", name: "Rose Gulakand", basePrice: 300, image: RoseGulakand },
      { id: "cf2", name: "Pan-masala Chocolate", basePrice: 300, image: PanmasalaChocolate },
      { id: "cf3", name: "Mango Chocolate", basePrice: 300, image: mango },
      { id: "cf4", name: "Pine Apple Chocolate", basePrice: 300, image: PineApple },
      { id: "cf5", name: "Blue Berry Chocolate", basePrice: 350, image: BlueBerry },
      { id: "cf6", name: "Strawberry Chocolate", basePrice: 350, image: Strawberry },
    ],
  },
  {
    id: 3,
    title: "Sweets",
    products: [
      { id: "s1", name: "Dry-Fruits Laddu", basePrice: 350, image: dryFruitsLaddu },
      { id: "s2", name: "Khaju Chikki", basePrice: 400, image: khajuchikki },
    ],
  },
  {
    id: 4,
    title: "Best Sellers",
    products: [
      { id: "b1", name: "Oreo Chocolate", basePrice: 250, image: oreoChocolate },
      { id: "b2", name: "Cake Pops", basePrice: 300, image: cakePops },
      { id: "b3", name: "Caramel Chocolate", basePrice: 350, image: Caramel },
      { id: "b4", name: "Coconut Bounty", basePrice: 350, image: coconutBounty },
      { id: "b5", name: "Dates with Dry-Fruits", basePrice: 400, image: datesDryFruits },
      { id: "b6", name: "Dubai Kunafa", basePrice: 400, image: dubaiKunafa },
      { id: "b7", name: "Protein Bites", basePrice: 450, image: proteinBites },
    ],
  },
  {
    id: 5,
    title: "Spices",
    products: [
      { id: "sp1", name: "Chicken Pickle", basePrice: 300, image: chickenPickle },
      { id: "sp2", name: "Prawns Pickle", basePrice: 400, image: prawnsPickle },
    ],
  },
];

const weightMultipliers = {
  "250gm": 1,
  "500gm": 2,
  "1kg": 4,
};

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { dispatch } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState({});
  const [displayedPrices, setDisplayedPrices] = useState({});

  const handleQuantityChange = (productId, basePrice, selectedWeight) => {
    const multiplier = weightMultipliers[selectedWeight] || 1;
    const newPrice = basePrice * multiplier;

    setSelectedQuantity((prev) => ({
      ...prev,
      [productId]: selectedWeight,
    }));

    setDisplayedPrices((prev) => ({
      ...prev,
      [productId]: newPrice,
    }));
  };

  const addToCart = (product) => {
    const selectedWeight = selectedQuantity[product.id] || "250gm";
    const finalPrice = displayedPrices[product.id] || product.basePrice;

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: selectedWeight,basePrice: finalPrice },
    });

    toast.success(`${product.name} (${selectedWeight}) added to cart!`);
  };

  return (
    <div className="container shop">
      <h1 className="page-title text-center " style={{color:"indigo"}}>{categories[currentPage].title}</h1>
      <div className="row justify-content-center">
        {categories[currentPage].products.map((product) => {
          const selectedWeight = selectedQuantity[product.id] || "250gm";
          const priceToShow = displayedPrices[product.id] || product.basePrice;

          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={product.id}>
              <div className="card p-3" style={{ width: "22rem" }}>
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="text-center mt-2">
                  <h3>{product.name}</h3>
                  <p>Price: ₹{priceToShow}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <select
                      className="form-select"
                      style={{ width: "100px", marginRight: "10px" }}
                      value={selectedWeight}
                      onChange={(e) => handleQuantityChange(product.id, product.basePrice, e.target.value)}
                    >
                      <option value="250gm">250gm</option>
                      <option value="500gm">500gm</option>
                      <option value="1kg">1kg</option>
                    </select>
                    <button className="btn btn-danger" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
          Previous
        </button>
        <span> Page {currentPage + 1} of {categories.length} </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, categories.length - 1))} disabled={currentPage === categories.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
