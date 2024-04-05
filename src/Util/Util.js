import validator from 'validator';

export const filterListings = (filters, listingsData) => {
  if (filters.isFavorite) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const listingsDataFavorites = favorites
      .map((id) => listingsData.find((listing) => listing.Id === id))
      .filter(Boolean);

    return listingsDataFavorites.filter((listing) => {
      return (
        (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
        (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
        (!filters.parking || listing.Parking === filters.parking) &&
        (!filters.priceRange || listing['Sale Price'] <= filters.priceRange)
      );
    });
  } else {
    return listingsData.filter((listing) => {
      return (
        (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
        (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
        (!filters.parking || listing.Parking === filters.parking) &&
        (!filters.priceRange || listing['Sale Price'] <= filters.priceRange)
      );
    });
  }
};

export const validateForm = (formData) => {
  const { fullName, email, phone, comments } = formData;
  const errors = {};

  if (!fullName || fullName.length < 3) {
    errors.fullName = 'Full name is required (minimum 3 characters)';
  }
  if (!validator.isEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!validator.isMobilePhone(phone, 'en-US')) {
    errors.phone = 'Please enter a valid US phone number';
  }
  if (!comments || comments.length < 3) {
    errors.comments = 'Comments are required (minimum 3 characters)';
  }

  return errors;
};

export const formatDate = (dateString) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};