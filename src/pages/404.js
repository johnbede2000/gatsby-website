import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

// styles

// markup
const NotFoundPage = () => {
  return (
    <Layout curr="">
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />
      <div className="text">
        <h1>Page Not Found</h1>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
