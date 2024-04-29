import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(to right, #87CEEB, #E1BEE7);
    font-family: Arial, sans-serif;
  }
`
