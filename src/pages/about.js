import React from 'react';
import About from '../components/About';
import Layout from '../components/Layout';
import Quotes from '../components/Quotes';
import SEO from '../components/Seo';

const about = () => {
  return (
    <Layout curr="about">
      <SEO
        title="About"
        description="Biography of London jazz pianist & composer John Cervantes. With photo and press quotes."
      />
      <About />
      <Quotes />
    </Layout>
  );
};

export default about;
