import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        flex: 1;
    }

    html, body, #root {
      height: 100%;
      max-height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background-color: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

`