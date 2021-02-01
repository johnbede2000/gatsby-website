import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { WidthContainer } from '../css/globalstyles';

const Layout = ({ children, curr }) => {
  return (
    <>
      <Nav curr={curr} />
      <WidthContainer>{children}</WidthContainer>
      <Footer />
    </>
  );
};

export default Layout;
