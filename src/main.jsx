import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // 👈 import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* 👈 Wrap your App here */}
      <App />
    </CartProvider>
  </StrictMode>
);
