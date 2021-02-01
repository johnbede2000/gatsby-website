import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

// styles

// markup
const NotFoundPage = () => {
  return (
    <>
      <Layout curr="">
        <div className="text section-gap">
          <h1>Page Not Found</h1>
          <Link to="/">Home</Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
