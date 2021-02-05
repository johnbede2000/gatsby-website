import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { Center } from '../css/globalstyles';

export default function Contact() {
  return (
    <Layout curr="Contact">
      <Center>
        <Form />
      </Center>
    </Layout>
  );
}
