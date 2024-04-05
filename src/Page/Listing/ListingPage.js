import React, { useState } from 'react';
import ListingItem from '../Item/ListingItem';
import Filter from '../../components/Filter/Filter';
import listingsData from '../../data/listings.json';
import ListingModal from '../../components/Modal/Detail/DetailModal';

const ListingPage = () => {
  const [filteredListings, setFilteredListings] = useState(listingsData);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = (filters) => {
    if (filters.isFavorite) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const listingsDataFavorites = favorites
        .map((id) => listingsData.find((listing) => listing.Id === id))
        .filter(Boolean);

      const updatedListings = listingsDataFavorites.filter((listing) => {
        return (
          (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
          (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
          (!filters.parking || listing.Parking === filters.parking) &&
          (!filters.priceRange || listing['Sale Price'] <= filters.priceRange)
        );
      });

      setFilteredListings(updatedListings);
    } else {
      const updatedListings = listingsData.filter((listing) => {
        return (
          (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
          (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
          (!filters.parking || listing.Parking === filters.parking) &&
          (!filters.priceRange || listing['Sale Price'] <= filters.priceRange)
        );
      });

      setFilteredListings(updatedListings);
    }
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
      <ListingModal
        show={showModal}
        onClose={() => setShowModal(false)}
        listing={selectedListing}
      />
    </div>
  );
};

export default ListingPage;
