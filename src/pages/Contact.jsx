import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          <div style={{ marginBottom: '20px' }}>
            <h3>📍 Office Address</h3>
            <p>123 EV Street<br />
            Bangkok, Thailand 10110</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>📞 Phone</h3>
            <p>+66 2 123 4567</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>💬 Line</h3>
            <p>@evchargerfinder</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>📧 Email</h3>
            <p>support@evchargerfinder.com</p>
          </div>
        </div>

        <div>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              />
            </div>

            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              />
            </div>

            <button type="submit" style={{
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>Send Message</button>
          </form>
        </div>
      </div>

      <section>
        <h2>Business Inquiries</h2>
        <p>For partnership opportunities, station installations, or bulk charging solutions, please contact our business development team at <a href="mailto:business@evchargerfinder.com">business@evchargerfinder.com</a></p>
      </section>
    </div>
  );
}

export default Contact;
