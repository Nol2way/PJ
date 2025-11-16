import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', marginTop: '50px', borderTop: '1px solid #dee2e6' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h3>⚡ EV Charger Finder</h3>
          <p>Find and book EV chargers easily.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link></li>
            <li><Link to="/find-chargers" style={{ textDecoration: 'none', color: '#007bff' }}>Find Chargers</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link></li>
            <li><Link to="/help" style={{ textDecoration: 'none', color: '#007bff' }}>Help</Link></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Facebook</a>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Twitter</a>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Instagram</a>
          </div>
        </div>
        <div>
          <h4>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Terms of Service</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #dee2e6', paddingTop: '10px' }}>
        <p>&copy; 2024 EV Charger Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
