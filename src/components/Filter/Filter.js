import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import data from '../../data/listings.json';

const Filter = ({ onFilterChange }) => {
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [parking, setParking] = useState('');
  const [priceRange, setPriceRange] = useState([1000000]);

  const handleBedroomsChange = (event) => {
    const value = event.target.value;
    setBedrooms(value >= 0 ? value : '');
  };

  const handleBathroomsChange = (event) => {
    const value = event.target.value;
    setBathrooms(value >= 0 ? value : '');
  };

  const handleParkingChange = (event) => {
    const value = event.target.value;
    setParking(value >= 0 ? value : '');
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const handleSearchClick = () => {
    const filters = {
      bedrooms: bedrooms !== '' ? parseInt(bedrooms, 10) : undefined,
      bathrooms: bathrooms !== '' ? parseInt(bathrooms, 10) : undefined,
      parking: parking !== '' ? parseInt(parking, 10) : undefined,
      priceRange: priceRange,
    };
    onFilterChange(filters);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-1">
          <label htmlFor="bedrooms">Bedrooms:</label>
        </div>
        <div className="col-md-1">
          <input
            type="number"
            className="form-control"
            id="bedrooms"
            value={bedrooms}
            onChange={handleBedroomsChange}
          />
        </div>
        <div className="col-md-1">
          <label htmlFor="bathrooms">Bathrooms:</label>
        </div>
        <div className="col-md-1">
          <input
            type="number"
            className="form-control"
            id="bathrooms"
            value={bathrooms}
            onChange={handleBathroomsChange}
          />
        </div>
        <div className="col-md-1">
          <label htmlFor="parking">Parking:</label>
        </div>
        <div className="col-md-1">
          <input
            type="number"
            className="form-control"
            id="parking"
            value={parking}
            onChange={handleParkingChange}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="priceRange">Price Range:</label>
          </div>
          <div className="col-md-2">
          <div className="mt-2">
            <Slider
              min={0}
              max={1000000}
              value={priceRange}
              onChange={handlePriceRangeChange}
              step={100}
            />
            <div className="d-flex justify-content-between">
              <span>{priceRange}</span>
            </div>
          </div>
        </div>
        <div className="col-md-1 d-flex align-items-center">
          <button className="btn btn-primary" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
