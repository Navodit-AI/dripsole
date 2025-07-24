import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Header.css";

const Header = () => {
  const { totalItems } = useCart();

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
        <Link to="/cart" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="#">👤</Link>
      </div>
    </header>
  );
};

export default Header;