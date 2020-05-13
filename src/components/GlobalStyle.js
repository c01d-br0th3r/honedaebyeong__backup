import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStlye = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        color: inherit;
    }
    body {
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
        color: #121212;
    }
    input:focus {
        outline: none;
    }
`;

export default GlobalStlye;
