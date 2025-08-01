import React, { useState } from 'react';
import './AuthPage.css';
import axios from 'axios';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    const endpoint = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/register';
    try {
      const res = await axios.post(endpoint, { email, password, role });
      setMsg(res.data.message || 'Success');
      setIsError(false);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Request failed');
      setIsError(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="technician">Technician</option>
          </select>
        )}

        <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</button>

        {msg && <p className={isError ? 'error-msg' : 'success-msg'}>{msg}</p>}

        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="switch-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
