
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/shows" className="nav-link">Shows</Link>
        <Link to="/games" className="nav-link">Games</Link>
      </nav>
    </header>
  );
};

export default Header;
