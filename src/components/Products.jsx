import React from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const Products = () => {
  const { products, addToCart, selectedCategory } = useOutletContext();

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-actions">
              <Link to={`/products/${product.id}`} className="view-details-link">View Details</Link>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
