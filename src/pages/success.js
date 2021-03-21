import React from 'react';
import Layout from '../components/Layout';
import { Center } from '../components/utilities';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Htwo = styled.h2`
  text-align: center;
`;

const success = () => {
  return (
    <Layout curr="">
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Htwo>Thank you for your message! I'll get back to you asap.</Htwo>
      </Center>
    </Layout>
  );
};

export default success;
