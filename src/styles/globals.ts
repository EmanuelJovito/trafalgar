import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #E5E5E5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  p {
    font-weight: 300;
    color: rgba(125, 121, 135, 1);
  }

  button {
    cursor: pointer;
  }
`