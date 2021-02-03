import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { WidthContainer } from '../css/globalstyles';
import {
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
    <NoGrow>
      <Headstrip>
        <WidthContainer>
          <Mobitems>
            <Currentpage className={isOpen ? 'open' : null}>{curr}</Currentpage>
            <ToggleButton onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </ToggleButton>
          </Mobitems>
        </WidthContainer>
      </Headstrip>
      <Mynav as="nav" role="navigation">
        <Ul className={isOpen ? 'open' : null}>
          {urls.map((page) => {
            return (
              <Li key={page.id}>
                <Navlink activeStyle={current} to={page.url}>
                  {page.text}
                </Navlink>
              </Li>
            );
          })}
        </Ul>
      </Mynav>
    </NoGrow>
  );
};

export default Nav;
