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
    z-index: 99;
    background-color: var(--raise-one);
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;
    font-size: 2rem;
    padding: var(--vertical-gap);
  }
`;

const Iframe = (src, title) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${src}`}
      modestbranding="1"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title={title}
    />
  );
};

// markdown

const Videos = () => {
  const data = useStaticQuery(query);
  const [isOpen, setIsOpen] = React.useState(false);
  const [url, setURL] = React.useState('');
  const [title, setTitle] = React.useState('');

  const openPlayer = () => {
    setIsOpen(true);
    // setURL(e.target.url);
    // setTitle(title);
  };

  const closePlayer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Fullscreen className={isOpen ? 'open' : null}>
        <AiOutlineClose onClick={closePlayer} />
        {/* <Iframe /> */}
      </Fullscreen>
      <Grid>
        <Video
          fluid={data.trio.childImageSharp.fluid}
          url="www.google.com"
          title="testing"
          onClick={() => setIsOpen(true)}
        ></Video>
        <Video
          fluid={data.flam.childImageSharp.fluid}
          onClick={openPlayer}
          url="www.google.com"
          title="testing"
        ></Video>

        <Video
          fluid={data.birt.childImageSharp.fluid}
          onClick={openPlayer}
          url="www.google.com"
          title="testing"
        ></Video>
      </Grid>
    </>
  );
};

export default Videos;
