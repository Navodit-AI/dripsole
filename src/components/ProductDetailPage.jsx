import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Product not found or not passed correctly.</div>;
  }

  return (
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
  );
};

export default ProductDetailPage;
