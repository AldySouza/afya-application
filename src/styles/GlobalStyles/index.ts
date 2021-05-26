import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #D40054;
    --primary-dark: #730036;
    --secondary: #49789B;
    --secondary-dark: #0D2C43;
    --base-dark: #13132B;
  }
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    outline: none;
    text-decoration: none;
    border: none;
    list-style: none;
  }
  html{
    scroll-behavior: smooth;
  }
`