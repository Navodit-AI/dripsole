import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header"> 
      <div className="logo">DripSole</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="#">Support</Link>
      </nav>

      <div className="profile">
        <input type="text" placeholder="Search kicks..." />
        <Link to="#">🛒</Link>
        <Link to="#">👤</Link>
      </div>
    </header>
  );
};

export default Header;