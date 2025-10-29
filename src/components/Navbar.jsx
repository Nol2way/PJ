import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <nav>
      <div className="navbar">
        <h1>EV Charger App</h1>
        {!isLoggedIn && (
          <Link to="/register">Register</Link>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
