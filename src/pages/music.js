import React from 'react';
import Layout from '../components/Layout';
import Crossing from '../components/CrossingThe';
import SEO from '../components/Seo';

const music = () => {
  return (
    <Layout curr="music">
      <SEO
        title="Music"
        description="Listen to streaming music by London jazz pianist & composer John Cervantes. Also find links to other streaming services."
      />
      <Crossing />
    </Layout>
  );
};

export default music;
