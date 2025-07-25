# 👟 DripSole

Welcome to **DripSole** – a sleek, responsive online shoe store built using **React**, **Vite**, and modern frontend practices. This project showcases routing, authentication, cart functionality, search, and payment simulation — all in a fully functional frontend app.

---

## 🚀 Features

- 🏠 **Home Page** – Beautiful hero section, featured products, and search with suggestions.
- 🔍 **Explore Page** – Browse 18+ hardcoded products with filters and details.
- 🛒 **Cart System** – Add/remove products to cart with quantity and price updates.
- 👟 **Product Detail Page** – Rich individual product views with full metadata.
- 🔐 **Login Page** – Basic username/password login before accessing the store.
- 💸 **Payment Simulation** – Simulated checkout with UPI ID, address, and email input.
- 🔄 **Persistent UI** – Clean routing without page refresh using React Router.

---

## 📂 Project Structure

dripsole/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images and logos
│ ├── components/ # Reusable components like Header, Footer, Cart, etc.
│ ├── pages/ # ExplorePage, LoginPage, HomePage
│ ├── App.jsx # Main routing and layout
│ ├── main.jsx # React root render and context providers
│ └── index.css # Global styles
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

- Future Improvements


Connect to a real backend with user auth (e.g., Firebase or Node.js + MongoDB)

Store cart and user session in localStorage

Implement actual payment API

Add responsive animations or framer-motion

Product categories, filtering, and sorting
