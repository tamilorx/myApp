import React, { useState } from 'react';

const ContactForm = ({ formData, setFormData, formMessage, setFormMessage, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
      <br />
      <button type="submit" className="hello-kitty-button">
        Submit
      </button>
    </form>
  );
};

const ContactMessage = ({ message }) => {
  return <p id="form-message">{message}</p>;
};

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = ({ name, email, message }) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
      setFormMessage('Please enter your name.');
      return;
    }

    if (!emailPattern.test(email.trim())) {
      setFormMessage('Please enter a valid email address.');
      return;
    }

    if (message.trim() === '') {
      setFormMessage('Please enter your message.');
      return;
    }

    setFormMessage('Form submitted successfully!');
  };

  return (
    <div>
      <ContactForm 
        formData={formData} 
        setFormData={setFormData} 
        formMessage={formMessage} 
        setFormMessage={setFormMessage} 
        onSubmit={handleSubmit} 
      />
      <ContactMessage message={formMessage} />
    </div>
  );
};

export default Contact;
