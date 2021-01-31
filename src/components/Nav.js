import React from 'react';
import { Link } from 'gatsby';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

// data
const urls = [
  { id: 1, text: 'Home', url: '/' },
  { id: 2, text: 'News', url: '/news/' },
  { id: 3, text: 'About', url: '/about/' },
  { id: 4, text: 'Videos', url: '/videos/' },
  { id: 5, text: 'Music', url: '/music/' },
  { id: 6, text: 'Live', url: '/live/' },
  { id: 7, text: 'Contact', url: '/contact/' },
];

// style

const Mynav = styled.nav`
  background-color: var(--raise-one);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 99;
`;

const Navul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const Navli = styled.li`
  display: block;
`;

const Hamburger = styled.li`
  display: block;
  font-size: 2rem;
  color: var(--text-light);
`;

const Navlink = styled(Link)`
  font-size: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  background-image: linear-gradient(white, white);
  background-size: 0 5px;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.2s ease-out;

  &:hover {
    background-size: 100% 5px;
  }
`;

const current = {
  color: 'white',
};

// markup
const Nav = () => {
  return (
    <Mynav>
      <Navul>
        {urls.map((page) => {
          return (
            <Navli key={page.id}>
              <Navlink activeStyle={current} to={page.url}>
                {/* <Link style={navlinks} activeStyle={current} to={page.url}> */}
                {page.text}
              </Navlink>
            </Navli>
          );
        })}
        <Hamburger>
          <AiOutlineMenu />
        </Hamburger>
      </Navul>
    </Mynav>
  );
};

export default Nav;
