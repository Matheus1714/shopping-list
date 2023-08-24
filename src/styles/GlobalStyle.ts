import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${(props) => props.theme.colors.background};

    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.colors.gray100};
    font-weight: 700;
    font-size: 0.875rem;

    -webkit-font-smoothing: antialiased;
  }
  label{
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray200};
  }

`
