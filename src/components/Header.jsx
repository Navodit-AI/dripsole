// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header"> 
      <div className="logo">DripSole</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Support</a>
      </nav>

      <div className="profile">
        <input type="text" placeholder="Search kicks..." />
        <a href="#">🛒</a>
        <a href="#">👤</a>
      </div>
    </header>
  );
};

export default Header;
