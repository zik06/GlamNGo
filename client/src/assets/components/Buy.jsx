import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buy.css'; // Optional: for styling
import { Link } from 'react-router-dom';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 


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
  const location = useLocation();
const { clearCart } = useContext(CartContext);
const cartItems = location.state?.cartItems || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId'); 
    const orderData = {
      userId: userId || null,  // optional userId
    shippingDetails: {
      fullName: formData.fullName,
      phone: formData.phone,
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      country: formData.country
    },
     items: cartItems.map(item => ({
      title: item.title,
      price: item.price,
      quantity: item.quantity || 1
    }))
    };

    try {
      const response = await axios.post("http://localhost:3001/buy", orderData);
      console.log("Order response:", response.data);

      alert("Order placed successfully!");
      clearCart();
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

