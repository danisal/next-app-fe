import { css } from '@emotion/core';

const normalize = css`
    html {
        box-sizing: border-box;
        font-size: 16px;
        color: #333;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'PT Sans', sans-serif;
    }

    h1 {
        font-size: 2.2rem;
        margin: 0.5em 0;
    }

    h2 {
        font-size: 2rem;
        margin: 0.5em 0;
    }

    h3 {
        font-size: 1.8rem;
        margin: 0.5em 0;
    }

    h4 {
        font-size: 1.6rem;
        margin: 0.5em 0;
    }

    h5 {
        font-size: 1.4rem;
        margin: 0.5em 0;
    }

    h6 {
        font-size: 1.2rem;
        margin: 0.5em 0;
    }
`;

export default normalize;
