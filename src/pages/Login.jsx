import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load users from API
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error loading users:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      // Redirect to dashboard or home
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">EV Charger</h2>
        <p>ชาร์จรถไฟฟ้า สะดวก รวดเร็วได้ทุกที่</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-buttons">
            <button type="submit" className="login-btn">Log in</button>
            <button type="button" className="signup-btn" onClick={() => navigate('/register')}>
              Sign up
            </button>
          </div>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#" onClick={() => navigate('/register')}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
