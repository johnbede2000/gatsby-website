import React from 'react';
import Layout from '../components/Layout';
import DatesMongo from '../components/DatesMongo';
import SEO from '../components/Seo';

const live = () => {
  return (
    <Layout curr="live">
      <SEO
        title="Live"
        description="Dates of live music events for London jazz pianist & composer John Cervantes. Find live jazz music listings here."
      />
      {/* add conditional - if no shows then display text */}
      <DatesMongo />
    </Layout>
  );
};

export default live;
