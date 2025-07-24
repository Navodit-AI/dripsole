import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import PaymentSimulation from "./PaymentSimulation";
import './CartPage.css';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  const [showPayment, setShowPayment] = useState(false);

  const handlePaymentSuccess = () => {
    alert('Payment successful! Thank you for your purchase.');
    clearCart();
    setShowPayment(false);
  };

  return (
    <div className="cart-page">
      {showPayment ? (
        <PaymentSimulation 
          totalAmount={totalPrice} 
          onSuccess={handlePaymentSuccess} 
        />
      ) : (
        <>
          <h1 className="cart-title">🛒 Your Cart ({totalItems})</h1>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-message">Your cart is empty.</p>
              <Link to="/explore" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="item-info">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <h2 className="item-name">{item.name}</h2>
                        <p className="item-price">${item.price}</p>
                      </div>
                    </div>
                    
                    <div className="item-controls">
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-button"
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-button"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-summary">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <p className="shipping-note">
                  Shipping and taxes calculated at checkout
                </p>
              </div>

              <div className="cart-actions">
                <button onClick={clearCart} className="clear-cart">
                  Clear Cart
                </button>
                <Link to="/explore" className="continue-shopping">
                  Continue Shopping
                </Link>
                <button 
                  onClick={() => setShowPayment(true)} 
                  className="checkout-button"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;