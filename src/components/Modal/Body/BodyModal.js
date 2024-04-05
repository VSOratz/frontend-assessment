import React from 'react';
import ContactAgent from '../../Contact/ContactAgent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const ModalBody = ({ listing, isSaved, saveButtonRef, handleSaveProperty }) => {
  return (
    <div className="modal-body">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div
              className="col-md-12"
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              <p>${listing['Sale Price']}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Location: {listing.Location}</p>
            </div>
            <div className="col-md-6" style={{ textAlign: 'right' }}>
              <p>
                Date Listed: {new Date(listing.DateListed).toLocaleDateString()}
              </p>
            </div>
          </div>
          <hr />
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={listing.PictureURL}
              alt={listing.Title}
              className="img-fluid mb-4"
              style={{ width: '100%' }}
            />
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
          <button
            ref={saveButtonRef}
            type="button"
            className="btn btn-outline-danger mb-3"
            onClick={handleSaveProperty}
          >
            <FontAwesomeIcon icon={isSaved ? faHeart : farHeart} />
            Save Property
          </button>
          <ContactAgent />
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
