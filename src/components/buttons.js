import React from 'react';
import styled from 'styled-components';

export const Button = styled.a`
  background: none;
  color: white;
  border-radius: 2px;
  border: 1px solid white;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 10px;
  display: block;
  width: 100%;
  max-width: 220px;
  text-decoration: none;
  transition: 0.2s background-color ease-out;

  &:hover {
    color: #121212;
    background-color: white;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--vertical-gap);
`;

const H4 = styled.h4`
  padding-bottom: 0.5rem;
`;

export const YTbutton = () => {
  return (
    <Div>
      <H4>Watch more:</H4>
      <Button href="https://www.youtube.com/c/JohnCervantesProfile/videos">
        Youtube
      </Button>
    </Div>
  );
};
