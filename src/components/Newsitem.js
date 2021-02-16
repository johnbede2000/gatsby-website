import React from 'react';
import Img from 'gatsby-image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Item = styled.div`
  background-color: var(--raise-two);
  border-radius: 10px;
`;

const DateLoc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Text = styled.div`
  padding: 1rem;
`;

const Date = styled.p`
  margin-right: 0.75rem;
`;

const Newsitem = (item) => {
  return (
    <Item>
      <DateLoc>
        <Date>{item.date}</Date>
        <p>
          <FaMapMarkerAlt /> {item.location}
        </p>
      </DateLoc>
      <Img fluid={item.img.fluid} alt={item.img.title} />
      <Text
        dangerouslySetInnerHTML={{ __html: item.desc.childMarkdownRemark.html }}
      />
    </Item>
  );
};

export default Newsitem;
