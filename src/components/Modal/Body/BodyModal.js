import React from 'react';
import ContactAgent from '../../Contact/ContactAgent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { formatDate } from '../../../Util/Util';

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
              <p>
                {listing['Sale Price'].toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Location: {listing.Location}</p>
            </div>
            <div className="col-md-6" style={{ textAlign: 'right' }}>
              <p>Date Listed: {formatDate(listing.DateListed)}</p>
            </div>
          </div>
          <hr />
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={listing.PictureURL}
              alt={listing.Title}
              className="img-fluid mb-4"
              style={{ width: '100%' }}
            />
          </div>

          <hr />
          
          <div className="row">
            <div className="col-md-2 text-center">
              <p>{listing.Bedrooms}</p>
              <p>
                <strong>BED</strong>
              </p>
            </div>
            <div className="col-md-2 text-center">
              <p>{listing.Bathrooms}</p>
              <p>
                <strong>BATH</strong>
              </p>
            </div>
            <div className="col-md-2 text-center">
              <p>{listing.Parking}</p>
              <p>
                <strong>PARKING</strong>
              </p>
            </div>
            <div className="col-md-2 text-center">
              <p>{listing.Sqft}</p>
              <p>
                <strong>SQFT</strong>
              </p>
            </div>
            <div className="col-md-2 text-center">
              <p>{listing.YearBuilt}</p>
              <p>
                <strong>Year Built</strong>
              </p>
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
