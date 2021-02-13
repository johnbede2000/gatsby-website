import React from 'react';
import Layout from '../components/Layout';
import Infinite from '../components/Infinite';

const news = () => {
  return (
    <Layout curr="news">
      <Infinite />
    </Layout>
  );
};

export default news;
