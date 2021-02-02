import styled from 'styled-components';
import { Link } from 'gatsby';

// styled components
// default is closed mobile, then open mobile, then media query desktop!

const Headstrip = styled.header`
  background-color: var(--raise-one);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--mobnav-height);
`;

const Currentpage = styled.p`
  font-size: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  color: white;

  &.open {
    color: var(--raise-one);
  }
`;

const ToggleButton = styled.button`
  display: block;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--text-light);
  display: flex;
  align-items: center;

  &:hover {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Mobitems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Navul = styled.ul`
  display: none;
  background-color: var(--raise-one);
  &.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: var(--mobnav-height);
    bottom: 0; // I don't need this. Just good padding on the bottom
    width: 100%;
    z-index: 99;
    justify-content: flex-start;
    align-items: center;

    & > * {
      margin-bottom: 0.75em;
    }
  }
`;

const Navli = styled.li`
  list-style: none;
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

//  JS objects
const current = {
  color: 'white',
  backgroundSize: '0 5px',
  display: 'block',
};

export {
  Headstrip,
  Mobitems,
  Navul,
  Navli,
  Navlink,
  ToggleButton,
  Currentpage,
  current,
};
