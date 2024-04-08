import React, { useState } from 'react';
import { validateForm } from '../utils/zodiacUtils';

const Form = ({ formData, setFormData, formMessage, setFormMessage }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm(formData.name, formData.email, formData.message);
    if (isFormValid) {
      fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to submit form');
        }
      })
      .then(data => {
        setFormMessage('Form submitted successfully!');
        console.log('Form submitted successfully:', data);
      })
      .catch(error => {
        setFormMessage('Error submitting form: ' + error.message);
        console.error('Error submitting form:', error.message);
      });
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea id="message" name="message" rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>{formMessage}</p>
    </>
  );
};

export default Form;
