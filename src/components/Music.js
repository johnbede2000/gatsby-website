import { musicData } from '../content/music';
import { WidthContainer } from '../css/globalstyles';
import React from 'react';

// style

// markdown

const Music = () => {
  const [album, setAlbum] = React.useState(0);
  const { title, description, links } = musicData[album];

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
    </WidthContainer>
  );
};

export default Music;
