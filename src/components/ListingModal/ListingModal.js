import React, { useState } from 'react';
import ContactAgent from '../Contact/ContactAgent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const ListingModal = ({ listing, show, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
  };

  if (!show || !listing) {
    return null;
  }

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '900px' }}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{listing.Title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12" style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '24px'}}>
                    <p>${listing['Sale Price']}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>Location: {listing.Location}</p>
                  </div>
                  <div className="col-md-6" style={{ textAlign: 'right' }}>
                    <p>Date Listed: {new Date(listing.DateListed).toLocaleDateString()}</p>
                  </div>
                </div>
                <hr />
                <div className="col-md-6 d-flex justify-content-center">
                  <img src={listing.PictureURL} alt={listing.Title} className="img-fluid mb-4" style={{ width: '100%' }} />
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <p>BED: {listing.Bedrooms}</p>
                  </div>
                  <div className="col-md-2">
                    <p>BATH: {listing.Bathrooms}</p>
                  </div>
                  <div className="col-md-2">
                    <p>PARKING: {listing.Parking}</p>
                  </div>
                  <div className="col-md-2">
                    <p>SQFT: {listing.Sqft}</p>
                  </div>
                  <div className="col-md-2">
                    <p>Year Built: {listing.YearBuilt}</p>
                  </div>
                </div>
                <hr />
                <p>{listing.Description}</p>
              </div>
              <div className="col-md-4">
                <button type="button" className="btn btn-outline-danger mb-3" onClick={handleSaveProperty}>
                  <FontAwesomeIcon icon={isSaved ? faHeart : farHeart} />
                  Save Property
                </button>
                <ContactAgent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingModal;
