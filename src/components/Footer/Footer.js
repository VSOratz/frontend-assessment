import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <span className="text-muted">© 2024 My Assessment</span>
      </div>
    </footer>
  );
};

export default Footer;
