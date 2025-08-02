import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Technician from './pages/Technician.js';
import UserHome from './pages/UserHome';
import TechnicianDirectory from './pages/TechnicianDirectory';
import Home from './pages/Welcome.js';
import AuthPage from './pages/AuthPage';
import TechnicianTickets from './pages/TechnicianTickets.js';




function App() {
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/userroutes/home" element={<UserHome />} />
        <Route path="/userroutes/technicians" element={<TechnicianDirectory />} />
        <Route path="/technician/tickets" element= {<TechnicianTickets technicianId={userId} /> }/>

      </Routes>
    </Router>
  );
}

export default App;
