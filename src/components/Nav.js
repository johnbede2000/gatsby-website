import React from 'react';
import { Link } from 'gatsby';

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
const navlinks = {
  color: 'var(--text-light)',
  textDecoration: 'none',
};

const current = {
  color: 'white',
};

// markup
const Nav = () => {
  return (
    <ul>
      {urls.map((page) => {
        return (
          <li key={page.id}>
            <Link style={navlinks} activeStyle={current} to={page.url}>
              {page.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
