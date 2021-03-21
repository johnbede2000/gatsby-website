import styled from 'styled-components';
import { Link } from 'gatsby';
import { WidthContainer } from './utilities';

// styled components
// default is closed mobile, then open mobile, then media query desktop!

const NoGrow = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

const Headstrip = styled.header`
  background-color: ${(props) => props.theme.colors.raiseOne};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(props) => props.theme.spacing.mobnavHeight};
`;

const Currentpage = styled.p`
  font-size: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  color: white;

  &.open {
    color: ${(props) => props.theme.colors.raiseOne};
  }
`;

const ToggleButton = styled.button`
  display: block;
  border: none;
  background: none;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textLight};
  display: flex;
  align-items: center;
  z-index: 97;

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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Mynav = styled(WidthContainer)`
  @media screen and (min-width: 768px) {
    margin-top: -${(props) => props.theme.spacing.mobnavHeight};
  }
`;

const Ul = styled.ul`
  display: none;
  background-color: ${(props) => props.theme.colors.raiseOne};

  &.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 96;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: ${(props) => props.theme.spacing.mobnavHeight};
    width: 100%;
    z-index: 96;
    justify-content: space-between;
    align-items: center;
  }
`;

const Li = styled.li`
  list-style: none;
  padding: 0.25em 0;
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
  NoGrow,
  Headstrip,
  Mobitems,
  Mynav,
  Ul,
  Li,
  Navlink,
  ToggleButton,
  Currentpage,
  current,
};
