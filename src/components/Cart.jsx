// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${parseFloat(item.price).toFixed(2)}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-button"  style={{
      backgroundColor: '#337ab7', // Blue background
      color: '#fff',               // White text
      padding: '10px 20px',        // Padding inside the button
      border: 'none',              // No border
      borderRadius: '5px',         // Rounded corners
      cursor: 'pointer',           // Pointer cursor on hover
      width: '100%',               // Full width of the parent container
      textAlign: 'center',         // Center text alignment
      textDecoration: 'none',      // No underline on text
      transition: 'background-color 0.3s ease' // Smooth transition on hover
    }}>Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
