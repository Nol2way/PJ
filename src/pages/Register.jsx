import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Reuse the same CSS for consistency

function Register({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load users from API
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error loading users:', error));
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert('Username already exists');
      return;
    }
    const newUser = { username, password };
    // Post new user to API
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers([...users, data]);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        alert('Registration successful!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error registering user:', error);
        alert('Registration failed');
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Register</h2>
        <form onSubmit={handleRegister}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="login-buttons">
            <button type="submit" className="signup-btn">Register</button>
            <button type="button" className="login-btn" onClick={() => navigate('/')}>
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
