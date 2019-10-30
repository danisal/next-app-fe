import { useContext } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import List from './list';
import ListItem from './list-item';
import SideNavContext from '../context/side-navigation-context';

const StyledSideNav = styled.nav`
    height: 100%;
    width: 0;
    background-color: ${props => props.theme.colors.darkGrey[200]};
    transition: width 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    padding-top: 64px;

    &.active {
        min-width: 250px;
    }
`;

function SideNav(props) {
    const { active } = useContext(SideNavContext);

    return (
        <StyledSideNav className={active && `active`}>
            <List>
                <ListItem navigation to="/">
                    Home
                </ListItem>
                <ListItem navigation to="/settings">
                    Settings
                </ListItem>
                <ListItem navigation to="about">
                    About
                </ListItem>
            </List>
        </StyledSideNav>
    );
}

export default SideNav;
