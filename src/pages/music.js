import React from 'react';
import Layout from '../components/Layout';
// import Music from '../components/Music';
import MusicHolding from '../components/MusicHolding';

const music = () => {
  return (
    <Layout curr="music">
      <MusicHolding />
    </Layout>
  );
};

export default music;
