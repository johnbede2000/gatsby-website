import React from 'react';
import styled from 'styled-components';
import { Button } from '../css/globalstyles';

const dummydata = [
  {
    id: 1,
    date: '25 Feb 2050',
    venue: 'Royal Albert Hall',
    city: 'London, UK',
    band: 'Quintet',
    link: 'https://www.johncervantes.co.uk',
  },
  {
    id: 2,
    date: '26 Feb 2050',
    venue: 'Carnegie Hall',
    city: 'New York, USA',
    band: 'Trio',
    link: 'https://www.johncervantes.co.uk',
  },
];

const Table = styled.div``;

const Row = styled.div`
  padding-bottom: 1em;
  border-bottom: solid 1px var(--text-light);
  margin-top: 1em;
  &:last-of-type {
    border-bottom: none;
  }
  &:first-of-type {
    margin-top: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  font-weight: bold;
  display: inline-block;
  flex-basis: 15%;
  padding-right: 1rem;
`;

const Band = styled.span`
  display: none;
  flex-basis: 15%;
  padding-right: 1rem;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Venue = styled.span`
  display: inline-block;
  flex-basis: 25%;
  padding-right: 1rem;
`;

const City = styled.span`
  display: none;
  flex-basis: 20%;
  padding-right: 1rem;
  @media screen and (min-width: 400px) {
    display: inline-block;
  }
`;

const Tickets = styled(Button)`
  flex-basis: 15%;
  display: inline-block;
`;

const Dates = () => {
  return (
    <Table>
      {dummydata.map((row) => {
        return (
          <Row key={row.id}>
            <Date>{row.date}</Date>
            <Band>{row.band}</Band>
            <Venue>{row.venue}</Venue>
            <City>{row.city}</City>
            <Tickets href={row.link}>Tickets</Tickets>
          </Row>
        );
      })}
    </Table>
  );
};

export default Dates;
