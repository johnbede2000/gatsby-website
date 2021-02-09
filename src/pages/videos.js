import React from 'react';
import Layout from '../components/Layout';
import Videos from '../components/Videos';
import YTbutton from '../components/YTbutton';

const videos = () => {
  return (
    <Layout curr="videos">
      <Videos />
      <YTbutton />
    </Layout>
  );
};

export default videos;
