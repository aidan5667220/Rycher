// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link reloadDocument to="/" className="header-link">
          <h1>Rycher Funding</h1>
        </Link>
      </div>
      <div className="header-dropdown">
        <Link to="/theidea" className="dropdown-item">The Idea</Link>
        <Link to="/thewhy" className="dropdown-item">The Why</Link>
        <Link to="/thecreator" className="dropdown-item">The Creator</Link>

      </div>
    </header>
  );
}

export default Header;


