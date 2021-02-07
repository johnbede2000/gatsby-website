import { musicData } from '../content/music';
import { WidthContainer, Button } from '../css/globalstyles';
import React from 'react';
import Amplitude from 'amplitudejs';

Amplitude.init({
  songs: [
    {
      name: "Can't Help Lovin",
      artist: 'Stella & The Old Fashioneds',
      album: 'Live Dec 2020',
      url: 'https://soundcloud.com/johncervantes/cant-help-lovin',
      cover_art_url: '/src/imgages/landscape-trio.jpg',
    },
  ],
});

// style

// markdown

const Music = () => {
  const [album, setAlbum] = React.useState(0);
  const { title, description, links } = musicData[album];
  // warning: not using links yet

  return (
    <WidthContainer>
      <div>
        {musicData.map((item, index) => {
          return (
            <button key={item.id} onClick={() => setAlbum(index)}>
              {item.title}
            </button>
          );
        })}
      </div>
      <div>
        <h1>{title}</h1>
        {description.map((para) => {
          return <p key={para.id}>{para.text}</p>;
        })}
      </div>
      <Button href="https://www.johnbe.de">Testing</Button>
    </WidthContainer>
  );
};

export default Music;
