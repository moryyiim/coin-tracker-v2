import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Browser } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Browser>
    <App />
  </Browser>
);
