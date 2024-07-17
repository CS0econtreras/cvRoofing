import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or to get a quote.</p>
      <form className="info-input" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
