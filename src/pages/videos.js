import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Videos from '../components/Videos';
import { YTbutton } from '../components/buttons';

const videos = () => {
  return (
    <Layout curr="videos">
      <SEO
        title="Videos"
        description="Watch videos of London jazz pianist & composer John Cervantes. Also links to more videos on YouTube."
      />
      <Videos />
      <YTbutton />
    </Layout>
  );
};

export default videos;
