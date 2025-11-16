import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com', carModel: 'Tesla Model 3', licensePlate: 'ABC-123' });
  const [chargingHistory, setChargingHistory] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    // Mock data - in real app, fetch from API based on logged-in user
    setChargingHistory([
      { id: 1, date: '2024-10-10', time: '14:00', duration: 60, station: 'Central Bangkok Station', price: 5 },
      { id: 2, date: '2024-10-08', time: '10:00', duration: 30, station: 'Chiang Mai Mall Station', price: 4 }
    ]);
    setUpcomingBookings([
      { id: 1, date: '2024-10-20', time: '15:00', station: 'Phuket Beach Station', chargerType: 'Type2' }
    ]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Dashboard</h1>

      {/* Profile */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Profile</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div>
            <p><strong>Car Model:</strong> {user.carModel}</p>
            <p><strong>License Plate:</strong> {user.licensePlate}</p>
          </div>
        </div>
        <button style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Edit Profile</button>
      </section>

      {/* Charging History */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Charging History</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Time</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Duration</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Station</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {chargingHistory.map(charge => (
              <tr key={charge.id}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{charge.date}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{charge.time}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{charge.duration} min</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{charge.station}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>${charge.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Upcoming Bookings */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Upcoming Bookings</h2>
        {upcomingBookings.length > 0 ? (
          <div>
            {upcomingBookings.map(booking => (
              <div key={booking.id} style={{
                border: '1px solid #ddd',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px'
              }}>
                <p><strong>Station:</strong> {booking.station}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Charger Type:</strong> {booking.chargerType}</p>
                <button style={{
                  marginRight: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}>Modify</button>
                <button style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}>Cancel</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No upcoming bookings.</p>
        )}
      </section>

      {/* Payment Options */}
      <section>
        <h2>Payment Methods</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>💳 Credit Card</h3>
            <p>Add your credit card for easy payments.</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Add Card</button>
          </div>
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            flex: '1 1 200px'
          }}>
            <h3>📱 PromptPay</h3>
            <p>Link your PromptPay for instant transfers.</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Link PromptPay</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
