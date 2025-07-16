import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("No product ID found in URL");
      return;
    }
  
    fetch(`https://685e85517b57aebd2af9be39.mockapi.io/avi/v1/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched product:", data);
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setProduct(null); // Important to stop loading forever
      });
  }, [id]);
  

  if (product === null) return <div style={{ padding: "2rem", textAlign: "center" }}>Product not found or failed to load.</div>;


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
