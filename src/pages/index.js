import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/Seo';
import { GlobalStyle, theme } from '../components/GlobalStyle';
import { MinHeight } from '../components/Layout';

// N.B. not currently using Layout component used on every other page. So need theme & global style & anything else
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MinHeight>
        <SEO title="Home" />
        <Nav curr="Home" />
        <Hero />

        <Footer />
      </MinHeight>
    </ThemeProvider>
  );
};

export default IndexPage;
