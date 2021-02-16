import React from 'react';
import styled from 'styled-components';
import { Button } from '../css/globalstyles';

const dummydata = [
  {
    id: 1,
    date: '25 Feb 2050',
    venue: 'RoyalAlbert HallLong Title',
    city: 'Timbukata, UK',
    band: 'Jimmy Jazz Orchestra',
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
  vertical-align: middle;
  overflow-wrap: break-word;
  display: inline-block;
  width: 25%;
  padding-right: 1rem;
  @media screen and (min-width: 700px) {
    width: 15%;
  }
`;

const Band = styled.span`
  display: none;
  @media screen and (min-width: 1024px) {
    display: inline-block;
    vertical-align: middle;
    overflow-wrap: break-word;
    width: 22%;
    padding-right: 1rem;
  }
`;

const Venue = styled.span`
  display: inline-block;
  vertical-align: middle;
  overflow-wrap: break-word;
  width: 42%;
  padding-right: 1rem;
  @media screen and (min-width: 700px) {
    width: 35%;
  }
  @media screen and (min-width: 1024px) {
    width: 23%;
  }
`;

const City = styled.span`
  display: none;
  @media screen and (min-width: 700px) {
    display: inline-block;
    vertical-align: middle;
    overflow-wrap: break-word;
    width: 30%;
    padding-right: 1rem;
  }
  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;

const Tickets = styled(Button)`
  width: 33%;
  vertical-align: middle;
  overflow-wrap: break-word;
  display: inline-block;
  @media screen and (min-width: 700px) {
    width: 20%;
  }
`;

const Dates = () => {
  return (
    <div>
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
    </div>
  );
};

export default Dates;
