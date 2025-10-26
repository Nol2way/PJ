// Login.js
import React, { useState } from 'react';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">EV Charger</h2>
        <p>ชาร์จรถไฟฟ้า สะดวก รวดเร็วได้ทุกที่</p>
        <div className="login-buttons">
          <button type="submit" className="login-btn">Log in</button>
          <button type="button" className="signup-btn" onClick={() => window.location.href = '/signup'}>
            Sign up
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
