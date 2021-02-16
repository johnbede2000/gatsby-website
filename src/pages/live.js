import React from 'react';
import Layout from '../components/Layout';
import Dates from '../components/Dates';

const live = () => {
  return (
    <Layout curr="live">
      {/* add conditional - if no shows then display text */}
      <Dates />
    </Layout>
  );
};

export default live;
