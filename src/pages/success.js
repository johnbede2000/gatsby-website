import React from 'react';
import Layout from '../components/Layout';
import { Center } from '../css/sharedStyledComps';
import styled from 'styled-components';

const Htwo = styled.h2`
  text-align: center;
`;

const success = () => {
  return (
    <Layout curr="">
      <Center style={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Htwo>Thank you for your message! I'll get back to you asap.</Htwo>
      </Center>
    </Layout>
  );
};

export default success;
