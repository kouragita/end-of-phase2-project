import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Checkout from './components/Checkout'; // Import Checkout component
import './index.css';

const Root = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />}>
          <Route index element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} /> {/* Add Checkout route */}
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);