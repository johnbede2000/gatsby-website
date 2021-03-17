import React from 'react';
import Layout from '../components/Layout';
// import Music from '../components/Music';
import MusicHolding from '../components/MusicHolding';
import SEO from '../components/Seo';
import { Center } from '../css/sharedStyledComps';

const music = () => {
  return (
    <Layout curr="music">
      <SEO
        title="Music"
        description="Listen to streaming music by London jazz pianist & composer John Cervantes. Also find links to other streaming services."
      />
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <MusicHolding />
      </Center>
    </Layout>
  );
};

export default music;
