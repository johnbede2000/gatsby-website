import styled from 'styled-components';
import Img from 'gatsby-image';

const Section = styled.section`
  margin-top: var(--vertical-gap);
  width: 100%;
  text-align: center;
`;

const OneQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: var(--raise-one);
  border-radius: 10px;
  padding: 1em 1em 2.5em;
`;

const Image = styled(Img)`
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 1rem;
`;

const Source = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.25em;
`;

const Text = styled.p`
  margin-top: 1rem;
`;

/*
const Dots = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;

  & div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.25;
    cursor: pointer;
    margin: 0 1rem;
    &.active {
      opacity: 1;
    }
  }
`;
*/

export { Section, OneQuote, Text, Image, Source };
