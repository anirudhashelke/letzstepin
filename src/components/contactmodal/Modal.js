import React, { useState } from 'react';

const Modal = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Send form data to email or handle it here (mock)
    console.log(formData);

    // Simulate sending the form and call the onSubmit callback
    onSubmit();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
