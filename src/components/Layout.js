import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { WidthContainer } from './utilities';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './GlobalStyle';

export const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled(WidthContainer)`
  flex-grow: 1;
  padding-top: ${(props) => props.theme.spacing.verticalGap};
  padding-bottom: ${(props) => props.theme.spacing.verticalGap};
  position: relative;
`;

const Layout = ({ children, curr }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MinHeight>
        <Nav curr={curr} />
        <Main as="main">{children}</Main>
        <Footer />
      </MinHeight>
    </ThemeProvider>
  );
};

export default Layout;
