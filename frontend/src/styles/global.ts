import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family: arial;
        background-color: white;
        min-width: 1000px;
    }

`

export default GlobalStyle;