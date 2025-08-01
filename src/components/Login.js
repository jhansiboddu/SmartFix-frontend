import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      setMsg(res.data.message);
      setIsError(false);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Login failed');
      setIsError(true);
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Welcome Back</h2>
      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {msg && (
        <p className={isError ? 'error-msg' : 'success-msg'}>{msg}</p>
      )}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
