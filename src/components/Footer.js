import React from 'react';
import { WidthContainer } from '../css/globalstyles';
import styled from 'styled-components';
import { FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';
import { ImSoundcloud } from 'react-icons/im';
import { SiDeezer } from 'react-icons/si';

const year = new Date().getFullYear();

const extLinks = [
  {
    id: 1,
    icon: <FaSpotify />,
    url:
      'https://open.spotify.com/artist/64v43yzaVfp7hrdFDFKloJ?si=Em-oNQ6oQ8qyCDUIYWHmdg',
  },
  {
    id: 2,
    icon: <SiDeezer />,
    url: 'https://www.deezer.com/en/artist/11527643',
  },
  {
    id: 3,
    icon: <ImSoundcloud />,
    url: 'https://soundcloud.com/johncervantes',
  },

  {
    id: 4,
    icon: <FaAmazon />,
    url: 'https://music.amazon.co.uk/artists/B01N7G6HFZ/john-cervantes',
  },

  {
    id: 6,
    icon: <FaApple />,
    url: 'https://music.apple.com/gb/artist/john-cervantes/1184527405',
  },
];

// style
const StripofColor = styled.div`
  background-color: var(--raise-one);
  padding-top: var(--vertical-gap);
  width: 100%;
  padding-bottom: var(--vertical-gap);
  flex-grow: 0;
  flex-shrink: 0;
  height: 8rem;
`;

const ExternalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Footerlink = styled.a`
  font-size: 1.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
`;

// markup

const Footer = () => {
  return (
    <StripofColor>
      <WidthContainer>
        <ExternalLinks>
          {extLinks.map((link) => {
            return (
              <Footerlink key={link.id} href={link.url}>
                {link.icon}
              </Footerlink>
            );
          })}
        </ExternalLinks>
        <Copyright>
          &copy; {year} John Cervantes &middot; All rights reserved
        </Copyright>
      </WidthContainer>
    </StripofColor>
  );
};

export default Footer;
