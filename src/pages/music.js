import React from 'react';
import Layout from '../components/Layout';
// import Music from '../components/Music';
import MusicHolding from '../components/MusicHolding';
import SEO from '../components/Seo';
import { Center } from '../css/globalstyles';

const music = () => {
  return (
    <Layout curr="music">
      <SEO title="Music" />
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <MusicHolding />
      </Center>
    </Layout>
  );
};

export default music;
