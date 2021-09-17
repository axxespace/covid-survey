import {createGlobalStyle} from "styled-components";

//this styled component contains our app's global styles.
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    html, body {
      overflow-x: hidden;
    }
  }
`;