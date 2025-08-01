import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/register', {
        email,
        password,
        role,
      });
      setMsg(res.data.message);
      setIsError(false);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Registration failed');
      setIsError(true);
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Create Account</h2>

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

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="technician">Technician</option>
      </select>

      <button onClick={handleRegister}>Register</button>

      {msg && <p className={isError ? 'error-msg' : 'success-msg'}>{msg}</p>}

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;
