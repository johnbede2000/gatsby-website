import React from 'react';
import Layout from '../components/Layout';
import Dates from '../components/Dates';
import SEO from '../components/Seo';

const live = () => {
  return (
    <Layout curr="live">
      <SEO title="Live" />
      {/* add conditional - if no shows then display text */}
      <Dates />
    </Layout>
  );
};

export default live;
