import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-left">
        {/* Brand that links to home */}
        <Link to="/" className="brand">Rycher Funding</Link>
        {/* Hamburger / X toggle button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </button>
      </div>
      {/* Slide-in navigation menu overlay */}
      <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
        <li style={{ animationDelay: '0.1s' }}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li style={{ animationDelay: '0.1s' }}>
            <Link to="/theidea" onClick={toggleMenu}>The Idea</Link>
          </li>
          <li style={{ animationDelay: '0.2s' }}>
            <Link to="/thecreator" onClick={toggleMenu}>The Creator</Link>
          </li>
          <li style={{ animationDelay: '0.3s' }}>
            <Link to="/thewhy" onClick={toggleMenu}>The Why</Link>
          </li>
          <li style={{ animationDelay: '0.4s' }}>
            <Link to="/theapps" onClick={toggleMenu}>The Apps</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
