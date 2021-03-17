import React from 'react';
import { Button } from '../css/sharedStyledComps';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--vertical-gap);
`;

const H4 = styled.h4`
  padding-bottom: 0.5rem;
`;

const YTbutton = () => {
  return (
    <Div>
      <H4>Watch more:</H4>
      <Button href="https://www.youtube.com/c/JohnCervantesProfile/videos">
        Youtube
      </Button>
    </Div>
  );
};

export default YTbutton;
