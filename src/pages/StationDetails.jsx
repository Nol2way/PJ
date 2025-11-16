import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function StationDetails() {
  const { id } = useParams();
  const [station, setStation] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    chargerType: '',
    date: '',
    time: '',
    duration: 60
  });

  useEffect(() => {
    fetch(`http://localhost:3002/chargers/${id}`)
      .then(response => response.json())
      .then(data => setStation(data))
      .catch(error => console.error('Error loading station:', error));
  }, [id]);

  const handleBookingChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Mock booking submission
    alert('Booking submitted! (Mock implementation)');
    console.log('Booking:', bookingForm);
  };

  if (!station) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/find-chargers" style={{ textDecoration: 'none', color: '#007bff' }}>&larr; Back to Find Chargers</Link>
      <h1>{station.name}</h1>

      {/* Images */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {station.images.map((img, index) => (
          <img key={index} src={img} alt={`Station ${index + 1}`} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        ))}
      </div>

      {/* Details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div>
          <h3>Station Information</h3>
          <p><strong>Location:</strong> {station.location}</p>
          <p><strong>Address:</strong> {station.address}</p>
          <p><strong>Parking:</strong> {station.parking ? 'Available' : 'Not Available'}</p>
          <p><strong>Hours:</strong> {station.hours}</p>
        </div>
        <div>
          <h3>Available Chargers</h3>
          {station.chargers.map((charger, index) => (
            <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
              <p><strong>Type:</strong> {charger.type}</p>
              <p><strong>Power:</strong> {charger.power}</p>
              <p><strong>Status:</strong> <span style={{ color: charger.status === 'Available' ? 'green' : charger.status === 'Occupied' ? 'orange' : 'red' }}>{charger.status}</span></p>
              <p><strong>Price:</strong> ${charger.price}/hour</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Reviews</h3>
        {station.reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <p><strong>{review.user}:</strong> {review.comment}</p>
            <p>Rating: {'⭐'.repeat(review.rating)}</p>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        <h3>Book This Station</h3>
        <form onSubmit={handleBookingSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Charger Type:</label>
            <select name="chargerType" value={bookingForm.chargerType} onChange={handleBookingChange} required style={{ marginLeft: '10px', padding: '5px' }}>
              <option value="">Select Type</option>
              {station.chargers.map((charger, index) => (
                <option key={index} value={charger.type}>{charger.type} - {charger.power}</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Date:</label>
            <input type="date" name="date" value={bookingForm.date} onChange={handleBookingChange} required style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Time:</label>
            <input type="time" name="time" value={bookingForm.time} onChange={handleBookingChange} required style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Duration (minutes):</label>
            <input type="number" name="duration" value={bookingForm.duration} onChange={handleBookingChange} min="30" max="480" required style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default StationDetails;
