import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { Center } from '../css/globalstyles';

export default function Contact() {
  return (
    <Layout curr="Contact">
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Form />
      </Center>
    </Layout>
  );
}
