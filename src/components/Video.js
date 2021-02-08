import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import Img from 'gatsby-image';

// styling

const Parent = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--raise-one);
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px var(--raise-two);
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

// sub-component

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

// component

const Video = ({ url, fluid, alt, onClick }) => {
  return (
    <Parent url={url} onClick={onClick}>
      <PlayBtn />
      <Img
        fluid={fluid}
        alt={alt}
        imgStyle={{ transition: 'transform .5s ease' }}
      />
    </Parent>
  );
};

export default Video;
