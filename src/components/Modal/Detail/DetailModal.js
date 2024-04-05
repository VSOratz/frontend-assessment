import React, { useState, useEffect, useRef } from 'react';
import ModalHeader from '../Header/HeaderModal';
import ModalBody from '../Body/BodyModal';

const DetailModal = ({ listing, show, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);
  const saveButtonRef = useRef(null);

  const handleSaveProperty = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isCurrentlySaved = savedFavorites.includes(listing.Id);

    if (isCurrentlySaved) {
      const updatedFavorites = savedFavorites.filter(
        (itemId) => itemId !== listing.Id,
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...savedFavorites, listing.Id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setIsSaved(!isCurrentlySaved);
  };

  useEffect(() => {
    if (listing) {
      const savedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      setIsSaved(savedFavorites.includes(listing.Id));
    }
  }, [listing]);

  if (!show || !listing) {
    return null;
  }

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: '900px' }}
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">
          <ModalHeader title={listing.Title} onClose={onClose} />
          <ModalBody
            listing={listing}
            isSaved={isSaved}
            saveButtonRef={saveButtonRef}
            handleSaveProperty={handleSaveProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
