import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        const productsData = response.data;
        setProducts(productsData);
        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <nav>
        <h1>My E-Commerce Store</h1>
        <ul>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add-product">Add Product</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="content">
          <CategoryFilter
            categories={categories}
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <Outlet
            context={{ products, addToCart, selectedCategory, cartItems }}
          />
        </div>
        <div className="sidebar">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </>
  );
};

export default App;