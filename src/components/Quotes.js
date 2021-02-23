import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// data
const query = graphql`
  {
    allQuotesJson {
      nodes {
        id
        source
        text
        img {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

// styling
const Section = styled.section`
  padding-top: calc(var(--vertical-gap) * 2);
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 400px;
  overflow: hidden;
  text-align: center;
  display: flex;
  margin: 0 auto;
`;

const OneQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Image = styled(Img)`
  border-radius: 50%;
  margin-top: 1.5rem;
`;

const Svg = styled.svg`
  position: absolute;
  z-index: -1;
  opacity: 0.1;
`;

const Source = styled.p`
  font-style: italic;
  margin-top: 1rem;
`;

const Text = styled.p`
  margin-top: 1rem;
`;

// markup
const Quotes = () => {
  const data = useStaticQuery(query);

  const quotes = data.allQuotesJson.nodes;
  const [index, setIndex] = useState(0);
  let position = 'current';
  return (
    <Section>
      <OneQuote className={position}>
        <Svg width="40.83px" height="34.04px">
          <path
            d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
            fill="white"
          ></path>
        </Svg>
        <Text>{quotes[0].text}</Text>
        <Image fixed={quotes[0].img.childImageSharp.fixed} />
        <Source>— {quotes[0].source}</Source>
      </OneQuote>
    </Section>
  );
};

export default Quotes;
