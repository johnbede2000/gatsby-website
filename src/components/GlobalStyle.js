import { createGlobalStyle } from 'styled-components';

export const theme = {
  spacing: {
    mobnavHeight: '5em',
    verticalGap: '2rem',
  },
  colors: {
    bgColor: '#121212',
    raiseOne: '#222222',
    raiseTwo: '#2e2e2e',
    textLight: 'rgba(255, 255, 255, 0.7)',
  },
};

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
  background-color: ${(props) => props.theme.colors.bgColor};
  height: 100%;
  width: 100%;
}

a {
  color: ${(props) => props.theme.colors.textLight};
  text-decoration: none;
}

a:hover {
  color: white;
}

/* blockquote tag created by contentful markdown used in Newsitem */
blockquote {
  background: ${(props) => props.theme.colors.raiseTwo};
  border-left: 10px solid #ccc;
  margin: 1em 0;
  padding: 0 10px;
}
`;
