import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// graphql query images for video gallery

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "video-img" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

// data

const videoLinks = [
  {
    id: 1,
    title: 'Piano Trio',
    src: 'https://www.youtube.com/embed/3fO_xDVrHZ8',
  },
  {
    id: 2,
    title: 'Flamenco Band',
    src: 'https://www.youtube.com/embed/B0DkodC_PxM',
  },
  {
    id: 3,
    title: 'Katie Birtill',
    src: 'https://www.youtube.com/embed/Y_HrP5Zu25M',
  },
];

// component

const Youtube = ({ src, title }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={src}
      modestbranding="1"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title={title}
    ></iframe>
  );
};

// styling

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: var(--vertical-gap);
  justify-content: space-between;
`;

const VidImg = styled(Img)`
  &:hover {
    opacity: 0.4; // add hover: image moves or zooms within same frame size
  }
`;

// markdown

const Videos = () => {
  const data = useStaticQuery(query);
  const trioImg = data.allFile.edges[2]; // do separate queries because will it always return in the same order?
  const efgImg = data.allFile.edges[1];
  const birtImg = data.allFile.edges[0];
  return (
    <Grid>
      <VidImg fluid={trioImg.node.childImageSharp.fluid}></VidImg>
      <VidImg fluid={efgImg.node.childImageSharp.fluid}></VidImg>
      <VidImg fluid={birtImg.node.childImageSharp.fluid}></VidImg>
    </Grid>
  );
};

export default Videos;
