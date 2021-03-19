import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Flex,
  SmallerFlex,
  PlayButton,
  AlbumCover,
  AlbumText,
  Quote,
  Musicians,
  Credits,
  LinkIcons,
} from './MusicStyles';
import { Dialog } from '@material-ui/core';
import { FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';
import { ImSoundcloud } from 'react-icons/im';
import { SiDeezer } from 'react-icons/si';

const CrossingThe = () => {
  const [playIsOpen, SetPlayIsOpen] = React.useState(false);

  const handleClose = () => {
    SetPlayIsOpen(false);
  };

  // You should set loading to "eager" for above-the-fold images to ensure they start loading before React hydration
  return (
    <>
      <h1>Crossing The Threshold (2014)</h1>
      <h4 style={{ color: 'var(--text-light)' }}>
        An intoxicating mesh of hand claps, foot stamps, jazz harmony,
        improvisation, and dance
      </h4>
      <Flex>
        <AlbumCover>
          <StaticImage
            src="../images/releases/crossing.jpg"
            alt="Crossing The Threshold album cover"
            loading="eager"
          />
          <PlayButton onClick={() => SetPlayIsOpen(true)}>Play</PlayButton>
        </AlbumCover>
        <AlbumText>
          <p>
            Driven by an electrifying rhythm section of hand percussion, hand
            claps and flamenco dance, the band performs John's original jazz
            compositions fusing fiery flamenco grooves with adventurous
            improvisation from flute player Gareth Lockrane and others. The band
            has performed to sell-out audiences at the London Jazz Festival,
            Love Supreme Festival, and top jazz venues such as The Vortex and
            Pizza Express Jazz Club Soho.
          </p>
          <Quote>
            "Inspired by flamenco, especially my experiences of live
            performances, I was driven to find a way to incorporate some of
            those undefinable flashes of life, creation, emotion and passion
            into my own medium – instrumental jazz compositions. Seeming like a
            good cohesive theme to hold an album project together, I ventured
            forth on this musical adventure, crossing the threshold of releasing
            an album under my name. I chose various flamenco styles that
            particularly resonated with me, and used those as compositional
            starting points."
          </Quote>
          <SmallerFlex>
            <Musicians>
              <h4>Musicians</h4>
              <p>
                Gareth Lockrane - Flutes
                <br />
                John Cervantes - Piano, Rhodes
                <br />
                Sandy Suchodolski - Double Bass
                <br />
                Jon Desbruslais - Drum Kit
                <br />
                Malick Mbengue - Cajon, Congas, Clapping
                <br />
                Adrian Sola - Clapping
                <br />
                Jesus Olmedo - Footwork, Castanets, Clapping
                <br />
                Pablo Dominguez - Clapping
              </p>
            </Musicians>
            <Credits>
              <h4>Credits</h4>
              <p>
                All compositions by John Cervantes PRS / MCPS.
                <br />
                Recorded 3-4 July 2014 at Eastcote Studios by Philip Bagenal.
                <br />
                Mixed and mastered by Tyler McDiarmid.
                <br />
                Photograph by Mike Drummond.
                <br />
                With support from Arts Council England.
                <br />
                Produced by John Cervantes.
              </p>
            </Credits>
          </SmallerFlex>
        </AlbumText>
      </Flex>
      <Dialog open={playIsOpen} onClose={handleClose}>
        <LinkIcons>
          <FaSpotify />
          <FaApple />
          <FaAmazon />
          <ImSoundcloud />
          <SiDeezer />
        </LinkIcons>
      </Dialog>
    </>
  );
};

export default CrossingThe;
