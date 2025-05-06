// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header"> 
     <div className="logo">DripSole</div>
     
      <nav className="nav explore">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Support</a>
      </nav>
     
      <div className="profile">
        <input type="text" placeholder="Search..." />
        <a href="#">Cart</a>
        <a href="#">Profile</a>
      </div>
    </header>
  );
};

export default Header;