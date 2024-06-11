import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem;

    @media screen and (min-width: 1160px) {
      width: 1160px;
    }
  }

  html {
    @media screen and (max-width: 1160px) {
    font-size: 87.5%;
    }

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }


`
