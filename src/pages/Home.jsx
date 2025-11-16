import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #007bff 0%, #00ff88 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Find EV Chargers Near You ⚡</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>ชาร์จรถไฟฟ้า สะดวก รวดเร็วได้ทุกที่</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/find-chargers" style={{
            backgroundColor: 'white',
            color: '#007bff',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>Find Chargers</Link>
          <Link to="/register" style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            border: '2px solid white',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>Sign Up</Link>
        </div>
      </section>

      {/* Service Highlights */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Us?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>⚡ Fast Charging</h3>
            <p>High-speed chargers up to 150kW for quick recharges.</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>📍 Wide Coverage</h3>
            <p>Thousands of charging stations across Thailand.</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>📅 Advance Booking</h3>
            <p>Reserve your charging slot in advance.</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>🛡️ Safe & Secure</h3>
            <p>Monitored stations with 24/7 support.</p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Our Network</h2>
        <div style={{
          height: '300px',
          backgroundColor: '#e9ecef',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px'
        }}>
          <p>Interactive Map Coming Soon - View all charging stations</p>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Partners</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '5px' }}>Partner 1</div>
          <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '5px' }}>Partner 2</div>
          <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '5px' }}>Partner 3</div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>What Our Users Say</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            flex: '1 1 300px'
          }}>
            <p>"Amazing service! Found a charger quickly and charged my car in no time."</p>
            <p><strong>- User A</strong></p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            flex: '1 1 300px'
          }}>
            <p>"The booking system is so convenient. No more waiting in line!"</p>
            <p><strong>- User B</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
