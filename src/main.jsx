import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './components/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* ✅ This must wrap everything */}
      <App />
    </CartProvider>
  </StrictMode>
);
