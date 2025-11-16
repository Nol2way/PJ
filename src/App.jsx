import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import FindChargers from './pages/FindChargers';
import StationDetails from './pages/StationDetails';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import HelpCenter from './pages/HelpCenter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage (keep for session persistence)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/find-chargers" element={<FindChargers />} />
          <Route path="/station/:id" element={<StationDetails />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
