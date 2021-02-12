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
    background-color: black;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 5vw;
    justify-content: center;
    align-items: center;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  max-width: 560px;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

const Closebtn = styled.button`
  display: block;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--text-light);
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
  const [currSrc, setCurrSrc] = React.useState(null);
  const [currTitle, setCurrTitle] = React.useState(null);

  const openPlayer = (newSrc, newTitle) => {
    setIsOpen(true);
    setCurrSrc(newSrc);
    setCurrTitle(newTitle);
  };

  const closePlayer = () => {
    setIsOpen(false);
    setCurrSrc(null);
    setCurrTitle(null);
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
        height="315"
        src={`https://www.youtube.com/embed/${props.src}?autoplay=1`}
        modestbranding="1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={props.title}
        style={{ maxWidth: '560px', width: '100%' }}
      />
    );
  };

  // markup

  return (
    <>
      <VidContainer className={isOpen ? 'open' : null}>
        <BtnDiv>
          <Closebtn onClick={closePlayer}>
            <AiOutlineClose />
          </Closebtn>
        </BtnDiv>
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
