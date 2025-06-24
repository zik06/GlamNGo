import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signed up with ${email}`);
  };

  return (
    <div
      className="container mt-5 p-4 rounded shadow "
      style={{
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderTop: '2px solid #007bff',
        background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
      }}
    >
      <h2 className="mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input 
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input 
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Confirm Password</label>
          <input 
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;