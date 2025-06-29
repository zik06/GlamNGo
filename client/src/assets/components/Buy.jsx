import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buy.css'; // Optional: for styling
import { Link } from 'react-router-dom';
import axios from "axios";

function Buy() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const navigate = useNavigate();

  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const orderData = {
      ...formData,
      userId: userId
    };

    try {
      const response = await axios.post("http://localhost:3001/buy", orderData);
      console.log("Order response:", response.data);

      alert("Order placed successfully! 🚚");
      navigate('/'); // Redirect to homepage or order confirmation
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Try again.");
    }
  };*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId'); // ✅ Optional
    const orderData = {
      ...formData,
      userId: userId || null  // ✅ Send null if guest user
    };

    try {
      const response = await axios.post("http://localhost:3001/buy", orderData);
      console.log("Order response:", response.data);

      alert("Order placed successfully! 🚚");
      navigate('/');
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div className="buy-wrapper">
      <h2>Shipping Address</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" name="fullName" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Address Line 1</label>
          <input type="text" name="addressLine1" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Address Line 2</label>
          <input type="text" name="addressLine2" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input type="text" name="city" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>State</label>
          <input type="text" name="state" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Zip Code</label>
          <input type="text" name="zip" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <input type="text" name="country" className="form-control" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Place Order</button>
      </form>
    </div>
  );
}

export default Buy;

