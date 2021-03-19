import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: var(--vertical-gap);
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const SmallerFlex = styled.div`
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: var(--vertical-gap);
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const PlayButton = styled.div`
  margin-top: var(--vertical-gap);
  background: none;
  color: white;
  border-radius: 2px;
  border: 1px solid white;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 10px;
  display: block;
  width: 100%;
  max-width: 220px;
  text-decoration: none;
  transition: 0.2s background-color ease-out;

  &:hover {
    color: #121212;
    background-color: white;
    cursor: pointer;
  }
`;

const AlbumCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    width: 40%;
    padding-right: 1rem;
  }
`;

const AlbumText = styled.div`
  padding-top: var(--vertical-gap);
  @media screen and (min-width: 600px) {
    padding-left: 1rem;
    width: 60%;
    padding-top: 0;
  }
`;

const Quote = styled.p`
  font-style: italic;
  margin-top: var(--vertical-gap);
`;

const Musicians = styled.div`
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;

const Credits = styled.div`
  margin-top: 1rem;
  @media screen and (min-width: 900px) {
    margin-top: 0;
    padding-left: 2rem;
    width: 50%;
  }
`;

export {
  Flex,
  SmallerFlex,
  PlayButton,
  AlbumCover,
  AlbumText,
  Quote,
  Musicians,
  Credits,
};
