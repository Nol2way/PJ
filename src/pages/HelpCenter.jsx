import React, { useState } from 'react';

function HelpCenter() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I find a charging station near me?",
      answer: "Use our 'Find Chargers' page. You can search by location, use the interactive map, or enable GPS to find stations near your current position."
    },
    {
      question: "What are the different charger types?",
      answer: "Type2: Standard AC charger (up to 22kW). CCS2: Fast DC charger (up to 150kW), compatible with most modern EVs. CHAdeMO: Fast DC charger (up to 150kW), mainly for Nissan and Mitsubishi models."
    },
    {
      question: "How much does charging cost?",
      answer: "Prices vary by location and charger type, typically ranging from $4-12 per hour. Check individual station details for exact pricing."
    },
    {
      question: "How do I book a charging slot?",
      answer: "Visit the station details page and use the booking form to select your preferred date, time, and duration. You'll receive a confirmation email."
    },
    {
      question: "What should I do if a charger is not working?",
      answer: "Report the issue through the app or contact our 24/7 support hotline. We'll dispatch a technician and may offer alternative charging options."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify bookings up to 2 hours before the scheduled time through your dashboard. Cancellations within 2 hours may incur a fee."
    },
    {
      question: "Is parking included with charging?",
      answer: "Parking availability varies by station. Check the station details page for parking information. Some stations offer free parking during charging."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, PromptPay, and other local payment methods. You can manage your payment options in the dashboard."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Help Center & FAQ</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Getting Started</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>⚡ How to Charge Your EV</h3>
            <ol>
              <li>Find a compatible charging station using our app</li>
              <li>Book a slot if needed (recommended for busy times)</li>
              <li>Arrive at the station and plug in your vehicle</li>
              <li>Start charging via the station's interface or app</li>
              <li>Monitor progress and pay when complete</li>
            </ol>
          </div>

          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>🔌 Charger Types Explained</h3>
            <ul>
              <li><strong>Type 2:</strong> Home and public AC charging (slow to fast)</li>
              <li><strong>CCS2:</strong> European standard DC fast charging</li>
              <li><strong>CHAdeMO:</strong> Japanese standard DC fast charging</li>
              <li><strong>Tesla SC:</strong> Tesla's proprietary superchargers</li>
            </ul>
          </div>

          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>💰 Average Charging Costs</h3>
            <ul>
              <li>Home charging: $0.10-0.30/kWh</li>
              <li>Public AC: $0.20-0.50/kWh</li>
              <li>DC Fast Charging: $0.30-0.80/kWh</li>
              <li>Per-minute pricing: $0.05-0.15/min</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Booking Guide</h2>
        <div style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>📅 How Booking Works</h3>
          <p>Our booking system helps you reserve charging slots in advance, ensuring availability when you need it most.</p>
          <ol>
            <li>Select a station from the map or list</li>
            <li>Choose your charger type and check availability</li>
            <li>Pick your preferred date and time</li>
            <li>Select charging duration (30 min to 8 hours)</li>
            <li>Confirm booking and receive email notification</li>
            <li>Arrive 5-10 minutes before your slot</li>
          </ol>
          <p><strong>Pro tip:</strong> Book during off-peak hours for better availability and sometimes lower rates!</p>
        </div>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div style={{ marginTop: '20px' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              marginBottom: '10px',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                {faq.question}
              </button>
              {activeFAQ === index && (
                <div style={{ padding: '15px', backgroundColor: 'white' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Still Need Help?</h2>
        <p>Can't find what you're looking for? Our support team is here to help!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:support@evchargerfinder.com" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>Email Support</a>
          <a href="tel:+6621234567" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>Call Us</a>
          <a href="#" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#6f42c1',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>Live Chat</a>
        </div>
      </section>
    </div>
  );
}

export default HelpCenter;
