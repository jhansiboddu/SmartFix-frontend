import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReactDOM from 'react-dom/client'; // 👈 use 'client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

