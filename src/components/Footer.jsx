
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>DripSole</h2>
          <p>Step into your best self — one shoe at a time.</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Help</h3>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Shoe Guide</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DripSole. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
