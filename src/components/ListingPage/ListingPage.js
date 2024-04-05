import React, { useState } from 'react';
import ListingItem from '../ListingItem';
import Filter from '../Filter/Filter';
import listingsData from '../../data/listings.json';
import './ListingPage.css';

const ListingPage = () => {
  const [filteredListings, setFilteredListings] = useState(listingsData);

  const handleFilterChange = (filters) => {
    console.log('Filters:', filters);

    const updatedListings = listingsData.filter((listing) => {
      return (
        (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
        (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
        (!filters.parking || listing.Parking === filters.parking) &&
        (!filters.priceRange || listing['Sale Price'] <= filters.priceRange)
      );
    });

    setFilteredListings(updatedListings);
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
              <ListingItem listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
