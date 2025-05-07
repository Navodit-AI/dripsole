import React, { useState, useEffect } from 'react';
import './Explore.css';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="explore">
      <h1>Explore Collection</h1>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="card-header">
              <img src={product.image} alt={product.name} />
              <span className={`stock ${product.inStock ? 'in' : 'out'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <div className="card-body">
              <div className="brand">{product.brand}</div>
              <h3>{product.name}</h3>
              <div className="price">${product.price}</div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < product.rating ? 'filled' : ''}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;