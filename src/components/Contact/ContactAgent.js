import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import validator from 'validator';

const ContactAgent = () => {
  // Desestruturar props
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', comments: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { fullName, email, phone, comments } = formData;

  const validateForm = () => {
    const newErrors = {};

    if (!fullName || fullName.length < 3) {
      newErrors.fullName = 'Full name is required (minimum 3 characters)';
    }
    if (!validator.isEmail(email)) { // Usar a biblioteca validator.js para validar e-mail
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validator.isMobilePhone(phone, 'en-US')) { // Validar número de telefone com código de país dos EUA
      newErrors.phone = 'Please enter a valid US phone number';
    }
    if (!comments || comments.length < 3) {
      newErrors.comments = 'Comments are required (minimum 3 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Lógica para enviar o formulário
      setIsSubmitted(true);
    }
  };

  return (
    <div className="card p-4 bg-light">
      <h5 className="mb-3">Contact Agent</h5>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} id="fullName" value={fullName} onChange={handleChange} />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={email} onChange={handleChange} />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <InputMask mask="+1 (999) 999-9999" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="phone" value={phone} onChange={handleChange} />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea className={`form-control ${errors.comments ? 'is-invalid' : ''}`} id="comments" rows="3" value={comments} onChange={handleChange}></textarea>
            {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Contact Now</button>
        </form>
      ) : (
        <div className="alert alert-success mt-3" role="alert">
          Message sent successfully! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactAgent;
