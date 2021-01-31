import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="width-container">
      <Nav />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
