import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { WidthContainer } from '../css/globalstyles';
import {
  Headstrip,
  Mobitems,
  Navul,
  Navli,
  Navlink,
  ToggleButton,
  Currentpage,
  current,
} from './Navstyle';

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

// markup

const Nav = ({ curr }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Headstrip>
        <WidthContainer>
          <Mobitems>
            <Currentpage className={isOpen ? 'open' : null}>{curr}</Currentpage>
            <ToggleButton onClick={toggleMenu}>
              <AiOutlineMenu />
            </ToggleButton>
          </Mobitems>
        </WidthContainer>
      </Headstrip>
      <nav role="navigation">
        <Navul className={isOpen ? 'open' : null}>
          {urls.map((page) => {
            return (
              <Navli key={page.id}>
                <Navlink
                  activeStyle={current}
                  to={page.url}
                  onClick={closeMenu}
                >
                  {page.text}
                </Navlink>
              </Navli>
            );
          })}
        </Navul>
      </nav>
    </>
  );
};

export default Nav;
