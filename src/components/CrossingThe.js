import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Flex,
  SmallerFlex,
  ListenButton,
  AlbumCover,
  AlbumText,
  Quote,
  Musicians,
  Credits,
} from './musicStyles';
import {
  Dialog,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  DialogTitle,
} from '@material-ui/core';
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa';
// import { ImSoundcloud } from 'react-icons/im';
// import {SiPandora } from 'react-icons/si';
import { SiDeezer, SiTidal } from 'react-icons/si';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { theme } from './GlobalStyle';

const services = [
  {
    id: 1,
    text: 'Spotify',
    icon: <FaSpotify />,
    url: 'https://open.spotify.com/album/6Qmx8wB3lSR8pjqmEtaFr0',
  },
  {
    id: 2,
    text: 'Apple Music',
    icon: <FaApple />,
    url: 'https://music.apple.com/us/album/crossing-the-threshold/1184526967',
  },
  {
    id: 3,
    text: 'Amazon Music',
    icon: <FaAmazon />,
    url: 'https://music.amazon.co.uk/albums/B01N7GA20A',
  },
  /*{
    id: 4,
    text: 'SoundCloud',
    icon: <ImSoundcloud />,
    url: 'https://www.spotify.com',
  },*/
  {
    id: 5,
    text: 'Deezer',
    icon: <SiDeezer />,
    url: 'https://www.deezer.com/en/album/14797475',
  },
  {
    id: 6,
    text: 'Tidal',
    icon: <SiTidal />,
    url: 'https://listen.tidal.com/album/68034546',
  },
  {
    id: 7,
    text: 'YouTube Music',
    icon: <FaYoutube />,
    url:
      'https://music.youtube.com/playlist?list=OLAK5uy_lqtWStKmvv0hIufra5cUfuHsjjLFuC5HQ',
  },
  /*{ id: 8, text: 'Pandora', icon: <SiPandora />, url: '' },*/
];

const useStyles = makeStyles({
  icon: {
    backgroundColor: theme.colors.raiseOne,
    color: 'white',
  },
});

const Subtitle = styled.h4`
  color: ${(props) => props.theme.colors.textLight};
`;

const CrossingThe = ({ theme }) => {
  const [playIsOpen, SetPlayIsOpen] = React.useState(false);

  const handleClose = () => {
    SetPlayIsOpen(false);
  };

  const classes = useStyles();

  // You should set loading to "eager" for above-the-fold images to ensure they start loading before React hydration
  return (
    <>
      <h1>Crossing The Threshold (2014)</h1>
      <Subtitle>
        An intoxicating mesh of hand claps, foot stamps, jazz harmony,
        improvisation, and dance
      </Subtitle>
      <Flex>
        <AlbumCover>
          <StaticImage
            src="../images/releases/crossing.jpg"
            alt="Crossing The Threshold album cover"
            loading="eager"
          />
          <ListenButton onClick={() => SetPlayIsOpen(true)}>
            Listen
          </ListenButton>
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
            forth on this musical adventure. I chose various flamenco styles
            that particularly resonated with me, and used those as compositional
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

      <Dialog
        open={playIsOpen}
        onClose={handleClose}
        aria-labelledby="listen-crossing-album"
      >
        <DialogTitle id="listen-crossing-album">
          Choose your preferred music service
        </DialogTitle>
        <List>
          {services.map((service) => (
            <ListItem
              button
              onClick={() => {
                window.open(service.url, '_blank');
              }}
              key={service.id}
            >
              <ListItemAvatar>
                <Avatar className={classes.icon}>{service.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={service.text} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default CrossingThe;
