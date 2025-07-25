import React, { useState } from 'react';
import './PaymentSimulation.css';

const PaymentSimulation = ({ totalAmount, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    upi: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateUPI = (upi) => {
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    return upiRegex.test(upi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    const { name, email, phone, address1, address2, upi } = formData;

    // Simulate delay
    setTimeout(() => {
      if (!name || !email || !address1 || !address2 || !upi) {
        setError('⚠️ Please fill in all required fields.');
        setIsProcessing(false);
        return;
      }

      if (!validateUPI(upi)) {
        setError('⚠️ Invalid UPI ID format.');
        setIsProcessing(false);
        return;
      }

      setIsProcessing(false);
      onSuccess(); // Simulate payment success
    }, 1500);
  };

  return (
    <div className="payment-simulation">
      <h2>Payment & Delivery Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Navodit Sharma"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="navodit@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number (optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="address1"
            placeholder="C1-1204, Amrapali Golf Homes"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 2 (City, State, Pincode)</label>
          <input
            type="text"
            name="address2"
            placeholder="Greater Noida, UP, 201301"
            value={formData.address2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>UPI ID</label>
          <input
            type="text"
            name="upi"
            placeholder="navodit@upi"
            value={formData.upi}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={isProcessing} className="pay-button">
          {isProcessing ? 'Processing...' : `Pay ₹${totalAmount.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
};

export default PaymentSimulation;
 