import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const { dispatch } = useCart();

  const query = searchParams.get('query') || '';

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     setProducts(response.data);
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [query, products]);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Added item to cart');
  };

  return (
    <div className="container">
      <h4>Search Results for "{query}"</h4>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const { id, image, title, price, description, rating } = product;
            return (
              <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={id}>
                <div className="card h-100 d-flex flex-column">
                  <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ height: '250px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="card-title"
                      style={{
                        minHeight: '3rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {title}
                    </h5>
                    <p className="card-text text-success fw-bold">${price}</p>
                    <p className="card-text text-muted small">
                      Rating: {rating.rate} ★ ({rating.count} reviews)
                    </p>
                    <button
                      className="btn btn-success mt-auto"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-12">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
