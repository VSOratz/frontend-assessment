import React from 'react';
import ListingPage from '../Listing/ListingPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{ marginBottom: '50px' }}>
        <ListingPage />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
