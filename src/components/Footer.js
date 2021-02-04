import React from 'react';
import { WidthContainer } from '../css/globalstyles';
import styled from 'styled-components';

const year = new Date().getFullYear();

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
        <p>
          Copyright &copy; {year} John Cervantes &middot; Designed and Developed
          by <a href="https://www.johnbe.de">John Bede</a> · All rights reserved
        </p>
      </WidthContainer>
    </StripofColor>
  );
};

export default Footer;
