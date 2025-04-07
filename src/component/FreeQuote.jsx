import React, { useState } from 'react';
import '../index.css';

const FreeQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.address.trim()) newErrors.address = true;
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Replace this with your actual backend service or email API
    try {
      await fetch('https://formspree.io/f/xovepvld', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          to: 'dfc@testforce.com'
        })
      });
      alert('Your message has been sent!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });
    } catch (error) {
      alert('There was an error sending your message.');
    }
  };

  return (
    <section
      className="free-quote-form-container"
      id="free-quote"
      style={{
        backgroundImage: "url('/declan-on-the-go.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        opacity: 0.8,
        zIndex: 1
      }}
    >
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      padding: '2rem',
      borderRadius: '12px',
      zIndex: 2
      }}>
      <h2 style={{ textAlign: 'center', color: '#004e7c', marginBottom: '1rem' }}>
          Get a FREE Quote for your next project!
      </h2>
    </div>
      <form onSubmit={handleSubmit}>
        <h4 style={{ textAlign: 'center', color: '#000000', marginBottom: '1rem' }}>Your Details</h4>
        <div className="form-grid">
          <input
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className={`full-width ${errors.firstName ? 'error' : ''}`}
          />
          <input
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className={`full-width ${errors.lastName ? 'error' : ''}`}
          />
          <input
            name="email"
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className={`full-width ${errors.email ? 'error' : ''}`}
          />
          <input
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            className={`full-width ${errors.phone ? 'error' : ''}`}
          />
        </div>
        <input
          name="address"
          placeholder="Address *"
          value={formData.business}
          onChange={handleChange}
          className={`full-width ${errors.phone ? 'error' : ''}`}
        />
        <div className="form-group">
          <h4 style={{ textAlign: 'center', color: '#000000', marginBottom: '1rem' }}>Tell us a little more about the work</h4>
          <textarea
            name="message"
            rows="4"
            className="full-width"
            placeholder="Give us a general idea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="primary">Submit</button>
        {isSubmitted && (
            <div className="success-message">Your inquiry has been send. We'll get back to you soon. Thank you!</div>
        )}
      </form>
    </section>
  );
};

export default FreeQuote;