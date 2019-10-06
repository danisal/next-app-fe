import { useContext } from 'react';
import styled from '@emotion/styled';

import SideNavContext from '../context/side-navigation-context';

const StyledSideNav = styled.nav`
    height: 100%;
    width: 0;
    background-color: ${props => props.theme.colors.darkGrey[900]};
    color: ${props => props.theme.colors.darkGrey[100]};
    transition: width 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;

    &.active {
        width: 250px;
    }
`;

function SideNav(props) {
    const { active } = useContext(SideNavContext);

    return (
        <StyledSideNav className={active && `active`}>side nav</StyledSideNav>
    );
}

export default SideNav;
