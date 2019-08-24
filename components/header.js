import Router from 'next/router';
import NProgress from 'nprogress';
import styled from '@emotion/styled';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 0 1.5rem;
    /* // TODO: probably it's not needed */
    height: 64px;
    z-index: ${props => props.theme.zIndex.appBar};
    box-shadow: ${props => props.theme.shadows[4]};
`;

const AppButton = styled.button`
    margin-right: 2rem;
`;

function Header() {
    return (
        <StyledHeader>
            <AppButton>button</AppButton>
            <h6>location</h6>
        </StyledHeader>
    );
}

export default Header;
