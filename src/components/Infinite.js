import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsitem from '../components/Newsitem';
import styled from 'styled-components';

const Stream = styled.div`
  max-width: 500px;

  & > *:not(:first-child) {
    margin-top: ${(props) => props.theme.spacing.verticalGap};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    flex-shrink: 0;
  }
`;

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
