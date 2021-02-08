import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { AiOutlineClose } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import Img from 'gatsby-image';

// GRAPHQL

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

const Parent = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 15px var(--raise-one);
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px var(--raise-two);
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: var(--vertical-gap);
  justify-content: space-between;
`;

const VidContainer = styled.div`
  display: none;
  &.open {
    z-index: 98;
    background-color: var(--raise-one);
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    justify-content: flex-end;
    padding: var(--vertical-gap);
  }
`;

const Closebtn = styled.button`
  display: block;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  z-index: 99;

  &:hover {
    color: white;
    cursor: pointer;
    outline: none;
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
      }}
    >
      <FaYoutube style={{ zIndex: '1' }} />
    </div>
  );
};

// state

const Videos = () => {
  const data = useStaticQuery(query);
  const [isOpen, setIsOpen] = React.useState(false);
  const [currSrc, setCurrSrc] = React.useState('new source!');
  const [currTitle, setCurrTitle] = React.useState('new title!');

  const openPlayer = (newSrc, newTitle) => {
    setIsOpen(true);
    setCurrSrc(newSrc);
    setCurrTitle(newTitle);
  };

  const closePlayer = () => {
    setIsOpen(false);
  };

  const Video = ({ fluid, alt, onClick }) => {
    return (
      <Parent onClick={onClick}>
        <PlayBtn />
        <Img
          fluid={fluid}
          alt={alt}
          imgStyle={{ transition: 'transform .5s ease' }}
        />
      </Parent>
    );
  };

  const Iframe = (props) => {
    return (
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${props.src}`}
        modestbranding="1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title={props.title}
      />
    );
  };

  // markup

  return (
    <>
      <VidContainer className={isOpen ? 'open' : null}>
        <Closebtn onClick={closePlayer}>
          <AiOutlineClose />
        </Closebtn>{' '}
        <Iframe src={currSrc} title={currTitle} />
      </VidContainer>
      <Grid>
        <Video
          alt="John Cervantes jazz piano trio"
          fluid={data.trio.childImageSharp.fluid}
          onClick={() =>
            openPlayer('3fO_xDVrHZ8', 'John Cervantes jazz piano trio')
          }
        ></Video>
        <Video
          alt="Live at London Jazz Festival"
          fluid={data.flam.childImageSharp.fluid}
          onClick={() =>
            openPlayer('B0DkodC_PxM', 'Live at EFG London Jazz Festival')
          }
        ></Video>

        <Video
          alt="Accompanying a jazz singer"
          fluid={data.birt.childImageSharp.fluid}
          onClick={() =>
            openPlayer('Y_HrP5Zu25M', 'Accompanying Katie Birtill')
          }
        ></Video>
      </Grid>
    </>
  );
};

export default Videos;
