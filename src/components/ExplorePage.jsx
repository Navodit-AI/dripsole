import React, { useEffect, useState } from 'react';
import './ExplorePage.css';

const ExplorePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://685e85517b57aebd2af9be39.mockapi.io/avi/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // Calculate stats
  const totalProducts = products.length;
  const brands = [...new Set(products.map((p) => p.brand))];
  const categories = [...new Set(products.map((p) => p.category))];

  // Rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) return <span key={i} className="star full">★</span>;
          if (i === fullStars && hasHalfStar) return <span key={i} className="star half">★</span>;
          return <span key={i} className="star empty">★</span>;
        })}
      </div>
    );
  };

  return (
    <div className="explore-page">
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon"><span role="img" aria-label="Shoe">👟</span></div>
            <div>
              <h1>Sneaker Explorer</h1>
              <div className="tagline">Discover your perfect pair</div>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item"><div className="stat-value">{totalProducts}</div><div className="stat-label">Products</div></div>
            <div className="stat-item"><div className="stat-value">{brands.length}</div><div className="stat-label">Brands</div></div>
            <div className="stat-item"><div className="stat-value">{categories.length}</div><div className="stat-label">Categories</div></div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="container">
        <div className="page-title">
          <h2>Explore Collection</h2>
          <div className="divider"></div>
          <div className="product-count">{totalProducts} items</div>
        </div>

        {loading ? (
          <div className="loading-message">Loading products...</div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div
                className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}
                key={product.id}
              >
                <div className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-brand">
                    <span className="brand-highlight">{product.brand}</span>
                  </div>
                  <div className="price-rating">
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">
                      <span className="rating-value">{product.rating}</span>
                      {renderRating(product.rating)}
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="detail-item">
                      <span className="detail-label">COLOR</span>
                      <span className="detail-value">{product.color}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">SIZES</span>
                      <div className="sizes">
                        {product.sizes.map(size => (
                          <span className="size-pill" key={size}>{size}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2023 Sneaker Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExplorePage;
