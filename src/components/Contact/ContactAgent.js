import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import validator from 'validator';
import { validateForm } from '../../Util/Util';

const ContactAgent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="card p-4 bg-light">
      <h5 className="mb-3">Contact Agent</h5>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className="invalid-feedback">{errors.fullName}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <InputMask
              mask="+1 (999) 999-9999"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              inputRef={phoneInputRef}
            />{' '}
            {/* Use a ref diretamente no InputMask */}
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <textarea
              className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
              id="comments"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            {errors.comments && (
              <div className="invalid-feedback">{errors.comments}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Contact Now
          </button>
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
