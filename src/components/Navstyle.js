import styled from 'styled-components';
import { Link } from 'gatsby';

// styled components
// default is closed mobile, then open mobile, then media query desktop!

const Mynav = styled.nav`
  background-color: var(--raise-one);
  height: var(--mobnav-height);
  width: 100%;
  z-index: 98;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Navul = styled.ul`
  // add width-container class
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  overflow: hidden;
  @media screen and (min-width: 768px) {
  }
`;

const Navli = styled.li`
  display: none;
`;

const Hamburger = styled.li`
  display: block;
  font-size: 2rem;
  color: var(--text-light);
  display: flex;
  align-items: center;

  &:hover {
    color: white;
  }
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

const Currentpage = styled.li`
  /* text-transform: capitalize; */
  font-size: 2rem;
  font-family: 'Bebas Neue', sans-serif;
`;

//  JS objects
const current = {
  color: 'white',
  backgroundSize: '0 5px',
  display: 'block',
};

const testing = {
  // backgroundColor: 'green',
};

export {
  Mynav,
  Navul,
  Navli,
  Navlink,
  Hamburger,
  Currentpage,
  current,
  testing,
};
