import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { WidthContainer } from '../css/globalstyles';
import {
  Mynav,
  Navul,
  Navli,
  Navlink,
  Hamburger,
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

  return (
    <Mynav isOpen={isOpen}>
      <WidthContainer>
        <Navul>
          <Currentpage>{curr}</Currentpage>
          {urls.map((page) => {
            return (
              <Navli key={page.id}>
                <Navlink
                  activeStyle={current}
                  to={page.url}
                  onClick={toggleMenu}
                >
                  {page.text}
                </Navlink>
              </Navli>
            );
          })}
          <Hamburger onClick={toggleMenu}>
            <AiOutlineMenu />
          </Hamburger>
        </Navul>
      </WidthContainer>
    </Mynav>
  );
};

export default Nav;
