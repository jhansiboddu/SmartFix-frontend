import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuthPage.css';

function Register() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', role: 'user'
  });
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
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
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="technician">Technician</option>
      </select>
      <button onClick={handleRegister}>Register</button>
      {msg && <p className={isError ? 'error-msg' : 'success-msg'}>{msg}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
