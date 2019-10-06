import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Container from './container';
import Content from './content';
import Header from './header';
import SideNav from './side-navigation';

import { SideNavProvider } from '../context/side-navigation-context';

function LoggedInContainer({ children }) {
    const [active, setActive] = useState(false);

    const toggle = event => {
        event.preventDefault();

        setActive(s => !s);
    };

    return (
        <SideNavProvider value={{ active, toggle }}>
            <SideNav />
            <Container>
                <Header />
                <Content>{children}</Content>
            </Container>
        </SideNavProvider>
    );
}

LoggedInContainer.propTypes = {
    children: PropTypes.node,
};

export default LoggedInContainer;
