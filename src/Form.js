import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }

    try {const response = await axios.post('https://test.ezworks.ai/api', { email });
      if (response.status === 200) {
        setMessage('Form Submitted');
        setError('');
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError('Email ending with @ez.works is not allowed');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="form-section">
      <h3>Email Address</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Contact Me</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Form;