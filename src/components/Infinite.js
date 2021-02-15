import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsitem from '../components/Newsitem';
import styled from 'styled-components';

const Infinite = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulNews(sort: { fields: date, order: DESC }) {
        nodes {
          id
          img {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
            title
          }
          date(formatString: "Do MMMM YYYY")
          location
          desc {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  const Stream = styled.div`
    max-width: 500px;
  `;

  const {
    allContentfulNews: { nodes: news },
  } = data;
  return (
    <Stream>
      {news.map((item) => {
        return <Newsitem key={item.id} {...item}></Newsitem>;
      })}
    </Stream>
  );
};

export default Infinite;
