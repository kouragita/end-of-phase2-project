// takes in the name of the product and its price... returms the sum of the cartlist
// also removes a product from cartlist
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  // Convert prices to numbers to ensure correct calculations
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
    </div>
  );
};

export default Cart;
