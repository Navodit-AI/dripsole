import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://685e85517b57aebd2af9be39.mockapi.io/avi/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Product not found:", err));
  }, [id]);

  if (!product) return <div>Loading product...</div>;

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
