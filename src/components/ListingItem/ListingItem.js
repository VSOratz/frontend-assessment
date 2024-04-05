import React from 'react';

const ListingItem = ({ listing, onViewDetails }) => {
  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={listing.ThumbnailURL}
        className="card-img-top"
        alt={listing.Title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{listing.Title}</h5>
        <p className="card-text">{listing.Location}</p>
        <p className="card-text">
          {listing.Bedrooms} Beds | {listing.Bathrooms} Baths
        </p>
        <p className="card-text" style={{ fontWeight: 'bold' }}>
          Sale Price: ${listing['Sale Price']}
        </p>
        <div className="mt-auto">
          <button className="btn btn-primary mt-auto" onClick={onViewDetails}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
