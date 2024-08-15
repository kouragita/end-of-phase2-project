import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useOutletContext(); // Access cartItems from Outlet context
  const [paymentMethod, setPaymentMethod] = useState(''); // Track selected payment method
  const [phoneNumber, setPhoneNumber] = useState(''); // Track phone number for mobile payment
  const [showForm, setShowForm] = useState(false); // Track whether to show the payment method form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'card') {
      // Simulate card payment process
      alert('Payment successful with card! (This is a demo)');
    } else if (paymentMethod === 'mobile') {
      // Simulate mobile payment process
      if (phoneNumber) {
        alert(`A prompt has been sent to your phone number ${phoneNumber}. Please enter your PIN to complete the payment.`);
      } else {
        alert('Please enter a valid phone number.');
      }
    }
    // You can handle further payment processing here
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowForm(true);
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Payment Method</h3>
        <label htmlFor="paymentMethod">Choose a payment method:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          required
        >
          <option value="">Select a payment method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="mobile">Mobile Pay</option>
        </select>

        {showForm && (
          paymentMethod === 'card' ? (
            <>
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
            </>
          ) : (
            paymentMethod === 'mobile' && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </>
            )
          )
        )}

        {showForm && (
          <button type="submit">Pay Now</button>
        )}
      </form>
    </div>
  );
};

export default Checkout;