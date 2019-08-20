import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import normalize from '../config/normalize';

import Meta from './meta';

const theme = {
    colors: {
        primary: `#4169E1`,
        white: `#ffffff`,
        ghostWhite: `#F8F8FF`,
    },
    // [4, 8, 16, 24, 32];
    spacing: value => value * 8,
    zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    breakpoints: {
        xs: `0px`,
        sm: `600px`,
        md: `960px`,
        lg: `1280px`,
        xl: `1920px`,
    },
};

const Container = styled.div`
    width: 100%;
    max-width: ${theme.breakpoints.md};
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Layout({ children }) {
    return (
        <>
            <Meta />
            <ThemeProvider theme={theme}>
                <Global styles={normalize} />
                <Container>{children}</Container>
            </ThemeProvider>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
