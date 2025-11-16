import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About EV Charger Finder</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>Our Vision</h2>
        <p>To revolutionize electric vehicle charging by providing a seamless, accessible, and sustainable charging network across Thailand and beyond.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>What We Do</h2>
        <p>EV Charger Finder connects EV drivers with charging stations through our innovative platform. We offer real-time station availability, advance booking, and comprehensive station information to make charging as convenient as possible.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Our Partners</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>Tesla</h3>
            <p>Supercharger Network Partner</p>
          </div>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>PTT</h3>
            <p>Fuel Station Integration</p>
          </div>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>Central Group</h3>
            <p>Mall Charging Solutions</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>John Smith</h3>
            <p>CEO & Founder</p>
            <p>Former Tesla engineer with 10+ years in EV industry.</p>
          </div>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>Sarah Johnson</h3>
            <p>CTO</p>
            <p>Tech lead specializing in scalable web platforms.</p>
          </div>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>Mike Chen</h3>
            <p>Head of Operations</p>
            <p>Expert in EV infrastructure and partnerships.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Reliable Network:</strong> Partnerships with major EV brands and charging networks.</li>
          <li><strong>User-Friendly:</strong> Intuitive app and website for easy charging station discovery.</li>
          <li><strong>Innovative Technology:</strong> Real-time data, predictive analytics, and smart routing.</li>
          <li><strong>Sustainability Focus:</strong> Committed to reducing carbon emissions through EV adoption.</li>
          <li><strong>24/7 Support:</strong> Dedicated customer service for all your charging needs.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
