import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Poppins', sans-serif;
  color: white;
  background-color: var(--bg-color);
  height: 100%;
  width: 100%;
}

a {
  color: var(--text-light);
  text-decoration: none;
}

a:hover {
  color: white;
}

/* blockquote tag created by contentful markdown used in Newsitem */
blockquote {
  background: var(--raise-two);
  border-left: 10px solid #ccc;
  margin: 1em 0;
  padding: 0 10px;
}
`;
