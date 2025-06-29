import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
            if(result.data === "success"){
        navigate('/')
            }
    })
        .catch(err=> console.log(err))
    alert(`Logging in with ${email}`);
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
      <h2 className="mb-4 text-center">Login</h2>
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;