import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

// graphql

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "video-img" } }) {
      edges {
        node {
          base
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
    img: '',
  },
  {
    id: 2,
    title: 'Flamenco Band',
    src: 'https://www.youtube.com/embed/B0DkodC_PxM',
    img: '',
  },
  {
    id: 3,
    title: 'Katie Birtill',
    src: 'https://www.youtube.com/embed/Y_HrP5Zu25M',
    img: '',
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

// markdown

const Videos = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return <Grid>{/* clickable images here */}</Grid>;
};

export default Videos;
