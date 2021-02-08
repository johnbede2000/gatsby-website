import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Video from './Video';
import { AiOutlineClose } from 'react-icons/ai';

// graphql query

const query = graphql`
  {
    flam: file(relativePath: { eq: "video-img/flamsq.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    birt: file(relativePath: { eq: "video-img/kBirtSQ.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trio: file(relativePath: { eq: "video-img/triosq.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

// styling

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: var(--vertical-gap);
  justify-content: space-between;
`;

const Fullscreen = styled.div`
  display: none;
  &.open {
    background-color: var(--raise-one);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const Vidplayer = ({ src, title }) => {
  return (
    <Fullscreen>
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
    </Fullscreen>
  );
};

// markdown

const Videos = () => {
  const data = useStaticQuery(query);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Vidplayer className={isOpen ? 'open' : null}></Vidplayer>
      <Grid>
        <Video
          fluid={data.trio.childImageSharp.fluid}
          url="https://www.youtube.com/embed/B0DkodC_PxM"
          alt="Jazz piano trio video"
          onClick={toggleMenu}
        ></Video>
        <Video
          fluid={data.flam.childImageSharp.fluid}
          url="https://www.youtube.com/embed/B0DkodC_PxM"
          alt="Live at London Jazz Festival video"
          onClick={toggleMenu}
        ></Video>

        <Video
          fluid={data.birt.childImageSharp.fluid}
          url="https://www.youtube.com/embed/B0DkodC_PxM"
          alt="Accompanying jazz singer video"
          onClick={toggleMenu}
        ></Video>
      </Grid>
    </>
  );
};

export default Videos;
