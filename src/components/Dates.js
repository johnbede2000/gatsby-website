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
    link: 'www.google.com',
  },
  {
    id: 2,
    date: '26 Feb 2050',
    venue: 'Carnegie Hall',
    city: 'New York, USA',
    band: 'Trio',
    link: 'www.youtube.com',
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
`;

const Date = styled.span`
  font-weight: bold;
  display: inline-block;
`;

const Band = styled.span`
  display: inline-block;
`;

const Venue = styled.span`
  display: inline-block;
`;

const City = styled.span`
  display: inline-block;
`;

const Tickets = styled(Button)`
  width: auto;
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
