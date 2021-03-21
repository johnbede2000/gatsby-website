import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';
import SEO from '../components/Seo';
import { GlobalStyle } from '../components/GlobalStyle';

// styles

const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// data

// markup - N.B. not currently using Layout component used on every other page
const IndexPage = () => {
  return (
    <GlobalStyle>
      <MinHeight>
        <SEO title="Home" />
        <Nav curr="Home" />
        <Hero />

        <Footer />
      </MinHeight>
    </GlobalStyle>
  );
};

export default IndexPage;
