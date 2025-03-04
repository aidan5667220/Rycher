// src/pages/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-header">Sorry, this is still in development</h1>
        <div className="notfound-buttons">
          <button className="btn back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn home-btn" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
