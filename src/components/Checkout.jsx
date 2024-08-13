import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useOutletContext(); // Access cartItems from Outlet context

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment process
    alert('Payment successful! (This is a demo)');
    // You can handle further payment processing here
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <div className="cart-summary">
        <h3>Your Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h4>
          Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name on Card"
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
