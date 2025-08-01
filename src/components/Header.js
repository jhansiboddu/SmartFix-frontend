import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="nav-header">
      <h2 className="logo">🏗️ MaintAI</h2>
      <nav>
        <Link to="/">Classify</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
}

export default Header;
