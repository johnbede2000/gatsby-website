import React from 'react';
import { WidthContainer } from '../css/globalstyles';
import styled from 'styled-components';

// style
const StripofColor = styled.div`
  background-color: var(--raise-one);
  padding-top: var(--vertical-gap);
  width: 100%;
  padding-bottom: var(--vertical-gap);
  flex-grow: 0;
  flex-shrink: 0;
`;

// markup

const Footer = () => {
  return (
    <StripofColor>
      <WidthContainer>
        <p>Hello world</p>
      </WidthContainer>
    </StripofColor>
  );
};

export default Footer;
