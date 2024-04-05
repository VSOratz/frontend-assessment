import React, { useState } from 'react';
import ListingItem from '../Item/ListingItem';
import Filter from '../../components/Filter/Filter';
import listingsData from '../../data/listings.json';
import DetailModal from '../../components/Modal/Detail/DetailModal';
import { filterListings } from '../../Util/Util';

const ListingPage = () => {
  const [filteredListings, setFilteredListings] = useState(listingsData);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = (filters) => {
    const updatedListings = filterListings(filters, listingsData);
    setFilteredListings(updatedListings);
  };

  const handleViewDetails = (listing) => {
    setSelectedListing(listing);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-4">
          <Filter onFilterChange={handleFilterChange} />
        </div>

        <div className="row">
          {filteredListings.map((listing, index) => (
            <div key={index} className="col-md-3 mb-3">
              <ListingItem
                listing={listing}
                onViewDetails={() => handleViewDetails(listing)}
              />
            </div>
          ))}
        </div>
      </div>
      <DetailModal
        show={showModal}
        onClose={() => setShowModal(false)}
        listing={selectedListing}
      />
    </div>
  );
};

export default ListingPage;
