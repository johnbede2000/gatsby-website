import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { WidthContainer } from '../css/globalstyles';
import styled from 'styled-components';

const FullHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled(WidthContainer)`
  flex-grow: 1;
`;

const Layout = ({ children, curr }) => {
  return (
    <FullHeight>
      <Nav curr={curr} />
      <WidthContainer as="main">{children}</WidthContainer>
      <Footer />
    </FullHeight>
  );
};

export default Layout;
