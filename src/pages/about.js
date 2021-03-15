import React from 'react';
import About from '../components/About';
import Layout from '../components/Layout';
import Quotes from '../components/Quotes';
import SEO from '../components/Seo';

const about = () => {
  return (
    <Layout curr="about">
      <SEO title="About" />
      <About />
      <Quotes />
    </Layout>
  );
};

export default about;
