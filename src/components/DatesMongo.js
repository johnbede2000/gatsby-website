import React from 'react';
import styled from 'styled-components';
import { flattenDiagnosticMessageText } from 'typescript';
import { Button } from './buttons';

const Row = styled.div`
  padding-bottom: 1em;
  border-bottom: solid 1px ${(props) => props.theme.colors.textLight};
  margin-top: 1em;
  &:last-of-type {
    border-bottom: none;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const Date = styled.span`
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
    width: 20%;
    padding-right: 1rem;
  }
  & a {
    text-decoration: underline;
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
    width: 25%;
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
  max-width: 1170px;
  @media screen and (min-width: 700px) {
    width: 20%;
  }
`;

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      fetchedData: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/mygigs-xtsjg/service/mygigs/incoming_webhook/api?secret=${process.env.MONGO_SECRET}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          loading: false,
          error: false,
          fetchedData: json,
        });
      });
  }

  render() {
    const allgigs = this.state.fetchedData;
    console.log(allgigs);
    return (
      <div>
        {allgigs.map((row) => {
          return (
            <Row key={row._id.$oid}>
              <Date>{row.date.$date.$numberLong}</Date>
              <Band>
                {row.bandnameLink ? (
                  <a href={row.bandnameLink}>{row.bandname}</a>
                ) : (
                  row.bandname
                )}
              </Band>
              <Venue>{row.venue}</Venue>
              <City>{row.city}</City>
              <Tickets href={row.link}>Tickets</Tickets>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default Dates;
