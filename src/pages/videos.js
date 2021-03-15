import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Videos from '../components/Videos';
import YTbutton from '../components/YTbutton';

const videos = () => {
  return (
    <Layout curr="videos">
      <SEO title="Videos" />
      <Videos />
      <YTbutton />
    </Layout>
  );
};

export default videos;
