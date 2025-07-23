import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Product not found or not passed correctly.</div>;
  }

  return (
    <>
      <button
  onClick={() => navigate('/explore')}
  style={{
    position: 'fixed',
    top: '120px',
    left: '120px',
    backgroundColor: '#001f3f',
    color: '#FFA500',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'background 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#FFA500';
    e.target.style.color = '#001f3f';
    e.target.style.border = '2px solid #001f3f';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#001f3f';
    e.target.style.color = '#FFA500';
    e.target.style.border = '2px solid #FFA500';
  }}
>
  ← Back
</button>


      <div className="product-detail">
        <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
        <h2>{product.name}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
        <button>Add to Cart</button>
        <button style={{ marginLeft: '1rem' }}>Buy Now</button>
      </div>
    </>
  );
};

export default ProductDetailPage;
