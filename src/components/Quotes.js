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
            fixed(width: 80) {
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
  padding-top: var(--vertical-gap);
  position: relative;
  width: 100%;
  height: 500px;
  max-width: 300px;
  overflow: hidden;
  text-align: center;
  display: flex;
  margin: 0 auto;
`;

const OneQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--raise-one);
  border-radius: 10px;
  padding: 1em;
`;

const Image = styled(Img)`
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 1.5rem;
`;

const Source = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.25em;
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
        <svg
          stroke="currentColor"
          fill="currentColor"
          opacity="0.2"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
        </svg>
        <Text>{quotes[0].text}</Text>
        <Image fixed={quotes[0].img.childImageSharp.fixed} />
        <Source>— {quotes[0].source}</Source>
      </OneQuote>
    </Section>
  );
};

export default Quotes;
