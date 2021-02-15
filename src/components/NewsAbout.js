import React from 'react';
import {
  FaMapMarkerAlt,
  FaInfoCircle,
  FaUser,
  FaThumbsUp,
} from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'gatsby';

// data

const data = [
  { id: 1, icon: <FaUser />, text: 'John Cervantes' },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    text: 'London, UK',
  },

  {
    id: 3,
    icon: <FaInfoCircle />,
    text: 'Jazz pianist, bandleader & composer',
  },
  {
    id: 4,
    icon: <FaThumbsUp />,
    text: 'Left social media January 2021',
  },
  {
    id: 5,
    icon: <AiFillMessage />,
    text: <Link to="/contact/">Send a message</Link>,
  },
];

// styling

const NewsCard = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: var(--raise-two);
    border-radius: 10px;
    flex-grow: 1;
    padding: 1rem;
    min-height: 30vh;
    margin-right: var(--vertical-gap);
  }
`;

const IconText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

// markup

const NewsAbout = () => {
  return (
    <NewsCard>
      <h2 style={{ fontFamily: 'Bebas Neue' }}>John's News Feed</h2>
      <div>
        {data.map((line) => {
          return (
            <IconText key={line.id}>
              <Icon>{line.icon}</Icon>
              <p>{line.text}</p>
            </IconText>
          );
        })}
      </div>
    </NewsCard>
  );
};

export default NewsAbout;
