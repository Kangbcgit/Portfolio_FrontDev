import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    margin: 0;
    list-style: none;
  }
  :root {
    --main-bg: #1E1E1E;
    --tool_bar-bg: #3C3C3C;
    --side_bar-bg: #333333;
    --base_color: #c4c4c4;
  }
`;       

export default GlobalStyle