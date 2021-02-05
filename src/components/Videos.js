import React from 'react';
import styled from 'styled-components';

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

const YoutubeIframe = ({ src, title }) => {
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
  return (
    <Grid>
      {videoLinks.map((video) => {
        return (
          <YoutubeIframe
            src={video.src}
            title={video.title}
            key={video.id}
          ></YoutubeIframe>
        );
      })}
    </Grid>
  );
};

export default Videos;
