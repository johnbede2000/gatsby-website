import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { Center } from '../css/sharedStyledComps';
import SEO from '../components/Seo';

export default function Contact() {
  return (
    <Layout curr="Contact">
      <SEO
        title="Contact"
        description="Send a message to London jazz pianist & composer John Cervantes. Get in touch and email."
      />
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Form />
      </Center>
    </Layout>
  );
}
