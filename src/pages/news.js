import React from 'react';
import Layout from '../components/Layout';
import Infinite from '../components/Infinite';
import styled from 'styled-components';
import NewsAbout from '../components/NewsAbout';

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const news = () => {
  return (
    <Layout curr="news">
      <TwoColumns>
        <NewsAbout />
        <Infinite />
      </TwoColumns>
    </Layout>
  );
};

export default news;
