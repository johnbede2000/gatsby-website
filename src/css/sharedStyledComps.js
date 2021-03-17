import styled from 'styled-components';

export const WidthContainer = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 0 auto;
`;

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

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
