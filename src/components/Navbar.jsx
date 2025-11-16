import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <nav style={{ backgroundColor: '#007bff', padding: '10px', color: 'white' }}>
      <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>⚡ EV Charger Finder</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/find-chargers" style={{ color: 'white', textDecoration: 'none' }}>Find Chargers</Link>
          {isLoggedIn && <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>}
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          <Link to="/help" style={{ color: 'white', textDecoration: 'none' }}>Help</Link>
          {!isLoggedIn && <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>}
          {isLoggedIn && <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
