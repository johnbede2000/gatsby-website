import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

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
    <>
      <MinHeight>
        <Nav curr="Home" />
        <Hero />

        <Footer />
      </MinHeight>
    </>
  );
};

export default IndexPage;
