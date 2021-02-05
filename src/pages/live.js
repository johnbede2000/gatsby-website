import React from 'react';
import Layout from '../components/Layout';

const live = () => {
  return (
    <Layout curr="live">
      {/* add if no shows it displays the following text */}
      <p>There are currently no upcoming dates. Check back soon!</p>
    </Layout>
  );
};

export default live;
