import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import PaymentSimulation from './PaymentSimulation';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, cartItems, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = location.state?.product;
  const isInCart = cartItems.some(item => item.id === product?.id);

  const handleAddToCart = () => {
    addToCart(product);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const handleBuyNow = () => {
    clearCart(); // Clear existing cart items
    addToCart(product); // Add only this product
    setShowPayment(true); // Show payment immediately
  };

  const handlePaymentSuccess = () => {
    alert('Payment successful! Thank you for your purchase.');
    clearCart();
    navigate('/');
  };

  if (!product) {
    return (
      <div className="product-not-found">
        Product not found or not passed correctly.
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      {showPayment ? (
        <PaymentSimulation 
          totalAmount={product.price} 
          onSuccess={handlePaymentSuccess} 
        />
      ) : (
        <div className="product-detail">
          <div className="product-image-container">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
            />
          </div>
          
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-price">Price: ${product.price}</p>
            
            <div className="product-meta">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
            </div>
            
            <div className="product-actions">
              <button 
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`add-to-cart ${isInCart ? 'in-cart' : ''}`}
              >
                {isInCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              {showAddedMessage && (
                <div className="added-message">
                  Added to cart!
                </div>
              )}
              <button onClick={handleBuyNow} className="buy-now">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;