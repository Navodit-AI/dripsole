// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store email to simulate "logged in"
    localStorage.setItem('userEmail', email);

    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
