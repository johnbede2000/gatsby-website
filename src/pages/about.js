import React from 'react';
import About from '../components/About';
import Layout from '../components/Layout';
import Quotes from '../components/Quotes';

const about = () => {
  return (
    <Layout curr="about">
      <About />
      <Quotes />
    </Layout>
  );
};

export default about;
