import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { WidthContainer } from './utilities';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled(WidthContainer)`
  flex-grow: 1;
  /* check syntax to change type of tag in this declaration rather than markup*/
  padding-top: var(--vertical-gap);
  padding-bottom: var(--vertical-gap);
  position: relative;
`;

const Layout = ({ children, curr }) => {
  return (
    <>
      <GlobalStyle />
      <MinHeight>
        <Nav curr={curr} />
        <Main as="main">{children}</Main>
        <Footer />
      </MinHeight>
    </>
  );
};

export default Layout;
