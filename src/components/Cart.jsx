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
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
