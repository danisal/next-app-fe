import Router from 'next/router';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import styled from '@emotion/styled';

import BackArrow from '../static/icons/back-arrow.svg';

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
    background-color: ${props => props.theme.colors.royalBlue};
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

const BackButton = styled.button`
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.colors.darkSlateBlue};
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    min-height: 33px;
    min-width: 33px;
    padding: 0;
    text-decoration: none;

    :active,
    :hover {
        background-color: rgba(255, 255, 255, 0.15);
    }
`;

function Header() {
    const router = useRouter();

    console.log(router);
    const { pathname } = router;

    const showBackButton = (pathname.match(/\//g) || []).length >= 2;

    const handleBack = () => {
        router.back();
    };

    return (
        <StyledHeader>
            <AppButton>button</AppButton>
            {showBackButton && (
                <BackButton onClick={handleBack}>
                    <BackArrow width={16} />
                </BackButton>
            )}
            <h6>location</h6>
        </StyledHeader>
    );
}

export default Header;
