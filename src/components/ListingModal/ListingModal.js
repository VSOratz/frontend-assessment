import React from 'react';

const ListingModal = ({ listing, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{listing.Title}</h2>
        {/* Renderizar os detalhes da listagem aqui */}
      </div>
    </div>
  );
};

export default ListingModal;