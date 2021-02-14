import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsitem from '../components/Newsitem';

const Infinite = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulNews(sort: { fields: date, order: DESC }) {
        nodes {
          id
          img {
            fluid {
              ...GatsbyContentfulFluid
            }
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
    <div style={{ maxWidth: '600px' }}>
      {news.map((item) => {
        return <Newsitem key={item.id} {...item}></Newsitem>;
      })}
    </div>
  );
};

export default Infinite;
