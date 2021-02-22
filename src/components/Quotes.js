import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Quotes = () => {
  const data = useStaticQuery(graphql`
    {
      allQuotesJson {
        edges {
          node {
            id
            img {
              childImageSharp {
                fixed(width: 130) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            source
            text
          }
        }
      }
    }
  `);
  const quotes = data.allQuotesJson.edges;
};

export default Quotes;
