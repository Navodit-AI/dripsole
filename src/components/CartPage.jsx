// src/pages/CartPage.jsx
import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
