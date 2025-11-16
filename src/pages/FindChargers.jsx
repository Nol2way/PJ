import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function FindChargers() {
  const [chargers, setChargers] = useState([]);
  const [filteredChargers, setFilteredChargers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    evType: '',
    chargerType: '',
    power: '',
    status: '',
    price: ''
  });

  useEffect(() => {
    fetch('http://localhost:3002/chargers')
      .then(response => response.json())
      .then(data => {
        setChargers(data);
        setFilteredChargers(data);
      })
      .catch(error => console.error('Error loading chargers:', error));
  }, []);

  useEffect(() => {
    let filtered = chargers.filter(charger =>
      charger.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      charger.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filters.chargerType) {
      filtered = filtered.filter(charger =>
        charger.chargers.some(c => c.type === filters.chargerType)
      );
    }

    if (filters.power) {
      filtered = filtered.filter(charger =>
        charger.chargers.some(c => c.power === filters.power)
      );
    }

    if (filters.status) {
      filtered = filtered.filter(charger =>
        charger.chargers.some(c => c.status === filters.status)
      );
    }

    setFilteredChargers(filtered);
  }, [searchTerm, filters, chargers]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Find EV Chargers</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by location or station name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <select name="chargerType" onChange={handleFilterChange} style={{ padding: '10px' }}>
          <option value="">All Charger Types</option>
          <option value="Type2">Type2</option>
          <option value="CCS2">CCS2</option>
          <option value="CHAdeMO">CHAdeMO</option>
        </select>
        <select name="power" onChange={handleFilterChange} style={{ padding: '10px' }}>
          <option value="">All Power Levels</option>
          <option value="7kW">7kW</option>
          <option value="22kW">22kW</option>
          <option value="50kW">50kW</option>
          <option value="150kW">150kW</option>
        </select>
        <select name="status" onChange={handleFilterChange} style={{ padding: '10px' }}>
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      {/* Map */}
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <MapContainer center={[13.7563, 100.5018]} zoom={6} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredChargers.map(charger => (
            <Marker key={charger.id} position={[charger.latitude, charger.longitude]}>
              <Popup>
                <div>
                  <h3>{charger.name}</h3>
                  <p>{charger.address}</p>
                  <Link to={`/station/${charger.id}`}>View Details</Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Charger List */}
      <div>
        <h2>Available Chargers ({filteredChargers.length})</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredChargers.map(charger => (
            <div key={charger.id} style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>{charger.name}</h3>
              <p>{charger.location}</p>
              <p>{charger.address}</p>
              <div>
                {charger.chargers.map((c, index) => (
                  <div key={index} style={{ marginBottom: '5px' }}>
                    {c.type} - {c.power} - {c.status} - ${c.price}/hour
                  </div>
                ))}
              </div>
              <Link to={`/station/${charger.id}`} style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindChargers;
