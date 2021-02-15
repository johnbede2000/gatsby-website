import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'gatsby';

// data

const data = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    text: 'London, UK',
  },
  {
    id: 2,
    icon: <FaInfoCircle />,
    text: 'Jazz pianist, bandleader & composer',
  },
  {
    id: 3,
    icon: <FaInfoCircle />,
    text: 'Left social media January 2021',
  },
  {
    id: 4,
    icon: <AiFillMessage />,
    text: <Link to="/contact/">Send a message</Link>,
  },
];

// styling

const NewsCard = styled.div`
  background-color: var(--raise-two);
  border-radius: 10px;
  margin-bottom: var(--vertical-gap);
  flex-grow: 1;
  padding: 1rem;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    min-height: 30vh;
    margin-right: var(--vertical-gap);
    max-width: 1170px;
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
