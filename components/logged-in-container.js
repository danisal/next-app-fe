import PropTypes from 'prop-types';

import Container from './container';
import Content from './content';
import Header from './header';

function LoggedInContainer({ children }) {
    return (
        <Container>
            <Header />
            <Content>{children}</Content>
        </Container>
    );
}

LoggedInContainer.propTypes = {
    children: PropTypes.node,
};

export default LoggedInContainer;
