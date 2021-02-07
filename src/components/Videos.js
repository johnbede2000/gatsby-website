import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaYoutube } from 'react-icons/fa';

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
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: var(--vertical-gap);
  justify-content: space-between;
`;

const Overlay = styled.div`
  position: absolute;
  top: 85%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 18, 18, 0.4);
  color: white;
  text-align: center;
`;

const Parent = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    /* background-color: rgba(18, 18, 18, 0.4); */
    /* seems to be behind image for some reason*/
    background: red;
  }
`;

const PlayBtn = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '75px',
        // zIndex: '1',
      }}
    >
      <FaYoutube style={{ zIndex: '1' }} />
    </div>
  );
};

// hover blur effect or darken or zoom or translate3d
// width: calc(100% + 50px);
// max-width: calc(100% + 50px);
// transition: opacity 0.35s, transform 0.35s;
// transform: translate3d(-40px, 0, 0);

// markdown

const Videos = () => {
  const data = useStaticQuery(query);
  const trioImg = data.allFile.edges[2]; // do separate queries because will it always return in the same order?
  const efgImg = data.allFile.edges[1];
  const birtImg = data.allFile.edges[0];
  return (
    <Grid>
      {/* Make Parent into a imported component that receives fluid and alt */}
      <Parent>
        <PlayBtn />
        <Img
          fluid={trioImg.node.childImageSharp.fluid}
          alt="Jazz piano trio video"
        />
        {/* <Overlay>Piano Trio</Overlay> */}
      </Parent>
      <Parent>
        <Img
          fluid={efgImg.node.childImageSharp.fluid}
          alt="Live at London Jazz Festival video"
        />
        {/* <Overlay>Flamenco Band</Overlay> */}
      </Parent>
      <Parent>
        <Img
          fluid={birtImg.node.childImageSharp.fluid}
          alt="Singer Katie Birtill video"
        />
        {/* <Overlay>Accompanist</Overlay> */}
      </Parent>
    </Grid>
  );
};

export default Videos;
