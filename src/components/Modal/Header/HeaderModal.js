import React from 'react';

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default ModalHeader;
