import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
        flex: 1;
    }

    html, body, #root {
        height: 100%;
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