import React from 'react';
import './ExplorePage.css';

const ExplorePage = () => {
  const products = [
    {
            "id": 1,
            "name": "Nike Air Max 270",
            "brand": "Nike",
            "category": "Sneakers",
            "price": 150,
            "sizes": [7, 8, 9, 10, 11],
            "color": "Black/White",
            "inStock": true,
            "rating": 4.5,
            "image": "https://images-cdn.ubuy.co.in/66731a0e98912e2dd6688180-mens-nike-air-max-270-sunset-university.jpg"
          },
          {
            "id": 2,
            "name": "Adidas Ultraboost 22",
            "brand": "Adidas",
            "category": "Running Shoes",
            "price": 180,
            "sizes": [6, 7, 8, 9, 10, 11],
            "color": "Grey",
            "inStock": true,
            "rating": 4.7,
            "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0948dbdf1cca4253be50ae70001f5e50_9366/Ultraboost_22_x_Marimekko_Shoes_Red_GZ4794_01_standard.jpg"
          },
          {
            "id": 3,
            "name": "Puma RS-X",
            "brand": "Puma",
            "category": "Sneakers",
            "price": 120,
            "sizes": [6, 7, 8, 9, 10],
            "color": "Multicolor",
            "inStock": false,
            "rating": 4.2,
            "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/398210/06/sv01/fnd/IND/fmt/png/RS-X-Heritage-Sneakers"
          },
          {
            "id": 4,
            "name": "Reebok Nano X3",
            "brand": "Reebok",
            "category": "Training Shoes",
            "price": 140,
            "sizes": [7, 8, 9, 10],
            "color": "White/Blue",
            "inStock": true,
            "rating": 4.4,
            "image": "https://images-cdn.ubuy.com.sa/66bc760a0bac12384e67347e-reebok-nano-x3-training-shoes.jpg"
          },
          {
            "id": 5,
            "name": "Asics Gel-Kayano 29",
            "brand": "Asics",
            "category": "Running Shoes",
            "price": 160,
            "sizes": [6, 7, 8, 9, 10],
            "color": "Blue",
            "inStock": true,
            "rating": 4.8,
            "image": "https://m.media-amazon.com/images/I/61jtIcvo6yL.jpg"
          },
          {
            "id": 6,
            "name": "New Balance 574",
            "brand": "New Balance",
            "category": "Lifestyle Sneakers",
            "price": 90,
            "sizes": [6, 7, 8, 9, 10, 11],
            "color": "Navy",
            "inStock": false,
            "rating": 4.1,
            "image": "https://images.vegnonveg.com/resized/1400X1146/8928/574-burgundy-63e0d53901f9d.jpg?format=webp"
          },
          {
            "id": 7,
            "name": "Under Armour HOVR Phantom 3",
            "brand": "Under Armour",
            "category": "Running Shoes",
            "price": 130,
            "sizes": [7, 8, 9],
            "color": "Black",
            "inStock": true,
            "rating": 4.6,
            "image": "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/3/0/3026652-120231117185556674.jpg"
          },
          {
            "id": 8,
            "name": "Nike Air Jordan 1 Mid",
            "brand": "Nike",
            "category": "Basketball Shoes",
            "price": 125,
            "sizes": [8, 9, 10, 11],
            "color": "Red/Black",
            "inStock": true,
            "rating": 4.9,
            "image": "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_5e435151-2155-423f-9da8-05caa9a57e1d.png?v=1746278202&width=1000"
          },
          {
            "id": 9,
            "name": "Adidas Harden Vol. 6",
            "brand": "Adidas",
            "category": "Basketball Shoes",
            "price": 140,
            "sizes": [9, 10, 11],
            "color": "White/Gold",
            "inStock": true,
            "rating": 4.3,
            "image": "https://www.superkicks.in/cdn/shop/products/1-107_4c7b1f8b-a8c7-4f64-aba0-cfef09038b25.jpg?v=1675971729"
          },
          {
            "id": 10,
            "name": "Puma Deviate Nitro 2",
            "brand": "Puma",
            "category": "Running Shoes",
            "price": 160,
            "sizes": [7, 8, 9, 10],
            "color": "Orange",
            "inStock": true,
            "rating": 4.5,
            "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/376807/16/sv03/fnd/IND/fmt/png/Deviate-NITRO%E2%84%A2-2-Men's-Running-Shoes"
          },
          {
            "id": 11,
            "name": "Asics Metaspeed Sky+",
            "brand": "Asics",
            "category": "Racing Shoes",
            "price": 250,
            "sizes": [6, 7, 8, 9],
            "color": "Red",
            "inStock": false,
            "rating": 4.8,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/0/d/j/-original-imahfxtbsg9pbkgx.jpeg?q=90&crop=false"
          },
          {
            "id": 12,
            "name": "Nike Pegasus 40",
            "brand": "Nike",
            "category": "Running Shoes",
            "price": 130,
            "sizes": [7, 8, 9, 10, 11],
            "color": "White/Blue",
            "inStock": true,
            "rating": 4.6,
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1abaae51-d7c4-4ca6-8e2b-8133b90d168b/AIR+ZOOM+PEGASUS+40.png"
          },
          {
            "id": 13,
            "name": "New Balance Fresh Foam X 1080v12",
            "brand": "New Balance",
            "category": "Running Shoes",
            "price": 160,
            "sizes": [6, 7, 8, 9],
            "color": "Black/White",
            "inStock": true,
            "rating": 4.4,
            "image": "https://www.theathletesfoot.co.nz/media/catalog/product/cache/30b15c9880beb2a1230f6de71d9a1f9d/m/1/m1080b12_01.jpg"
          },
          {
            "id": 14,
            "name": "Reebok Floatride Energy 5",
            "brand": "Reebok",
            "category": "Running Shoes",
            "price": 110,
            "sizes": [8, 9, 10],
            "color": "Green",
            "inStock": true,
            "rating": 4.3,
            "image": "https://imagescdn.reebok.in/img/app/product/9/933233-13377552.jpg"
          },
          {
            "id": 15,
            "name": "Under Armour Charged Assert 9",
            "brand": "Under Armour",
            "category": "Training Shoes",
            "price": 75,
            "sizes": [6, 7, 8, 9],
            "color": "Grey",
            "inStock": false,
            "rating": 4.0,
            "image": "https://underarmour.scene7.com/is/image/Underarmour/3024590-001_DEFAULT?rp=standard-30pad|pdpZoomDesktop&scl=0.50&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=850,850"
          },
          {
            "id": 16,
            "name": "Nike LeBron Witness 7",
            "brand": "Nike",
            "category": "Basketball Shoes",
            "price": 110,
            "sizes": [9, 10, 11],
            "color": "Black/Gold",
            "inStock": true,
            "rating": 4.7,
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2141d26-3470-44e9-bbe2-7a0407991e64/LEBRON+WITNESS+VII+EP.png"
          },
          {
            "id": 17,
            "name": "Adidas Adizero Adios Pro 3",
            "brand": "Adidas",
            "category": "Racing Shoes",
            "price": 250,
            "sizes": [7, 8, 9],
            "color": "Orange/White",
            "inStock": false,
            "rating": 4.9,
            "image": "https://5.imimg.com/data5/ANDROID/Default/2024/7/435945148/TE/JP/SE/138071537/product-jpeg.jpg"
          },
          {
            "id": 18,
            "name": "Puma Clyde All-Pro",
            "brand": "Puma",
            "category": "Basketball Shoes",
            "price": 130,
            "sizes": [8, 9, 10],
            "color": "White/Blue",
            "inStock": true,
            "rating": 4.2,
            "image": "https://images-static.nykaa.com/media/catalog/product/5/6/56c2627M19550908_2.jpg?tr=w-500"
          }
        ]
      
  ;

  // Calculate stats for the header
  const totalProducts = products.length;
  const brands = [...new Set(products.map(product => product.brand))];
  const categories = [...new Set(products.map(product => product.category))];

  // Function to generate star rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i} className="star full">★</span>;
          } else if (i === fullStars && hasHalfStar) {
            return <span key={i} className="star half">★</span>;
          } else {
            return <span key={i} className="star empty">★</span>;
          }
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
            <div className="logo-icon">
              <span role="img" aria-label="Shoe">👟</span>
            </div>
            <div>
              <h1>Sneaker Explorer</h1>
              <div className="tagline">Discover your perfect pair</div>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">{totalProducts}</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{brands.length}</div>
              <div className="stat-label">Brands</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="page-title">
          <h2>Explore Collection</h2>
          <div className="divider"></div>
          <div className="product-count">{totalProducts} items</div>
        </div>

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
      </div>

      {/* Footer */}
      <footer>
        <p>© 2023 Sneaker Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExplorePage;