import { useContext } from 'react';
import styled from '@emotion/styled';

import SideNavContext from '../context/side-navigation-context';

const Wrapper = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
`;

const Bread = styled.span`
    position: absolute;
    z-index: 3;
    top: 9px;
    left: 9px;
    width: 30px;
    height: 30px;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.top {
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transform: none;
        z-index: 4;
    }

    &.bottom {
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transform: none;
    }
`;

const BreadCrust = styled.span`
    display: block;
    width: 17px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 7px;
    z-index: 1;

    &.top {
        top: 14px;
        transform: translateY(-3px);
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
    }

    &.bottom {
        bottom: 14px;
        transform: translateY(3px);
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
    }
`;

const Label = styled.label`
    display: block;
    position: absolute;
    z-index: 3;
    top: 0;
    width: 48px;
    height: 48px;
    cursor: pointer;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-tap-highlight-color: transparent;

    :hover {
        opacity: 0.65;
    }

    &.active ${Bread}.top {
        transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
        transform: rotate(45deg);
    }

    &.active ${BreadCrust}.top {
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transform: none;
    }

    &.active ${Bread}.bottom {
        transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
        transform: rotate(-45deg);
    }

    &.active ${BreadCrust}.bottom {
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transform: none;
    }
`;

function HamburgerMenu(params) {
    const { active, toggle } = useContext(SideNavContext);

    return (
        <Wrapper>
            <Label className={active && `active`} onClick={toggle}>
                <Bread className="top">
                    <BreadCrust className="top" />
                </Bread>
                <Bread className="bottom">
                    <BreadCrust className="bottom" />
                </Bread>
            </Label>
        </Wrapper>
    );
}

export default HamburgerMenu;
