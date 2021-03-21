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
  padding-top: ${(props) => props.theme.spacing.verticalGap};
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
  justify-content: flex-start;
  width: 100%;
  background-color: ${(props) => props.theme.colors.raiseOne};
  border-radius: 10px;
  padding: 1em;
  opacity: 0;

  &.current {
    opacity: 1;
    transform: translateX(0);
  }
  &.prev {
    transform: translateX(-100%);
  }
  &.next {
    transform: translateX(100%);
  }
`;

const FlexGrow = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// markup
const QuotesNoLib = () => {
  const data = useStaticQuery(query);

  const quotes = data.allQuotesJson.nodes;
  const [index, setIndex] = useState(0);
  let position = 'current';
  return (
    <Section>
      <OneQuote className={position}>
        <FlexGrow>
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
          <Text>{quotes[index].text}</Text>
          <Image fixed={quotes[index].img.childImageSharp.fixed} />
          <Source>— {quotes[index].source}</Source>
        </FlexGrow>
        <Dots>
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Dots>
      </OneQuote>
    </Section>
  );
};

export default QuotesNoLib;
