import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    file(relativePath: { eq: "landscape-trio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <div style={{ flexGrow: '1' }}>
      <Img
        fluid={fluid}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: '-1',
          opacity: '0.3',
        }}
        imgStyle={{ objectPosition: 'right 30%' }}
      />
    </div>
  );
};

export default Hero;
