import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { Center } from '../css/globalstyles';
import SEO from '../components/Seo';

export default function Contact() {
  return (
    <Layout curr="Contact">
      <SEO title="Contact" />
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Form />
      </Center>
    </Layout>
  );
}
