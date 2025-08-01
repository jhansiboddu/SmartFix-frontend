import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/upload"); // or "/userroutes/home" if that's the user home
  };

  const handleLogin = () => {
    navigate("/auth"); // Or "/register" if you prefer that first
  };

  return (
    <div className="welcome-container">
      {/* Top-right Login button */}
      <div className="top-right">
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>

      <h1 className="title">
        Welcome to <span className="highlight">Snap-Find-Fix</span>
      </h1>
      <p className="subtitle">Capture the issue. Find the problem. Fix it fast.</p>

      <button className="enter-button" onClick={handleEnter}>
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
