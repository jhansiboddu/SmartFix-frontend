import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ReportIssue from './pages/ReportIssue.js';
import Technician from './pages/Technician.js';
import Admin from './pages/Admin.js';
import UserHome from './pages/UserHome';
import TechnicianDirectory from './pages/TechnicianDirectory';
import Home from './pages/Welcome.js';
import AuthPage from './pages/AuthPage';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userroutes/home" element={<UserHome />} />
        <Route path="/userroutes/technicians" element={<TechnicianDirectory />} />
      </Routes>
    </Router>
  );
}

export default App;
