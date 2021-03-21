import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { blurb, bio } from '../content/blurb';

export const query = graphql`
  {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Aboutpara = styled.div`
  max-width: 680px; // update value
`;

const AboutImg = styled.div`
  float: none;
  width: 100%;
  padding-bottom: ${(props) => props.theme.spacing.verticalGap};

  @media screen and (min-width: 610px) {
    float: right;
    padding-bottom: 1rem;
    padding-left: 1rem;
    width: 40%;
  }

  @media screen and (min-width: 1023px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  display: none;

  @media screen and (min-width: 1023px) {
    display: block;
    flex-basis: 40%;
  }
`;

const Bio = styled(Aboutpara)`
  margin-top: ${(props) => props.theme.spacing.verticalGap};
`;

const About = () => {
  const data = useStaticQuery(query);
  return (
    <Flex>
      <div>
        <Aboutpara>
          <AboutImg>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Portrait photo of John Cervantes"
            />
          </AboutImg>
          <p>{blurb}</p>
        </Aboutpara>
        {bio.map((para) => {
          return <Bio key={para.id}>{para.para}</Bio>;
        })}
      </div>
      <Sidebar>
        <div style={{ paddingLeft: '1rem' }}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Portrait photo of John Cervantes"
          />
        </div>
      </Sidebar>
    </Flex>
  );
};

export default About;
