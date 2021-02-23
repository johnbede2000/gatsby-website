import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Quotes = () => {
  const data = useStaticQuery(graphql`
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
  `);
  const quotes = data.allQuotesJson.edges;
  return (
    <>
      <p>hello world</p>
    </>
  );
};

export default Quotes;
