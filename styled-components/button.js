import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

const dualRing = keyframes(`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `);

const StyledButtonBase = styled.button`
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    min-height: 40px;
    min-width: 140px;
    padding: 0.5rem 1rem;
    transition: ease 0.2s;
    font-weight: 700;

    float: ${({ align }) => align};

    margin-top: ${({ top }) => top && `1rem`};
    margin-right: ${({ right }) => right && `1rem`};
    margin-bottom: ${({ bottom }) => bottom && `1rem`};
    margin-left: ${({ left }) => left && `1rem`};

    ${({ link }) =>
        link &&
        css`
            border: none;
            background-color: transparent;

            :hover {
                box-shadow: none;
            }
        `}

    .loading {
        content: ' ';
        display: block;
        width: 16px;
        height: 16px;
        margin: 1px;
        border-radius: 50%;
        border: 2px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${dualRing} 1.2s linear infinite;
    }
`;

const ButtonPrimary = styled(StyledButtonBase)`
    background-color: ${props => props.theme.colors.royalBlue[400]};
    box-shadow: 0 2px 8px ${props => props.theme.colors.royalBlue[300]};
    color: ${props => props.theme.colors.royalBlue[900]};

    :hover {
        box-shadow: 0 4px 8px ${props => props.theme.colors.royalBlue[300]};
    }
`;

const ButtonError = styled(StyledButtonBase)`
    background-color: ${props => props.theme.colors.orangeRed[400]};
    box-shadow: 0 2px 4px ${props => props.theme.colors.orangeRed[300]};
    color: ${props => props.theme.colors.orangeRed[900]};

    :hover {
        box-shadow: 0 4px 8px ${props => props.theme.colors.orangeRed[300]};
    }
`;

const ButtonSuccess = styled(StyledButtonBase)`
    background-color: ${props => props.theme.colors.limeGreen[400]};
    box-shadow: 0 2px 4px ${props => props.theme.colors.limeGreen[300]};
    color: ${props => props.theme.colors.limeGreen[900]};

    :hover {
        box-shadow: 0 4px 8px ${props => props.theme.colors.limeGreen[300]};
    }
`;

const ButtonWarning = styled(StyledButtonBase)`
    background-color: ${props => props.theme.colors.gold[400]};
    box-shadow: 0 2px 4px ${props => props.theme.colors.gold[300]};
    color: ${props => props.theme.colors.gold[900]};

    :hover {
        box-shadow: 0 4px 8px ${props => props.theme.colors.gold[300]};
    }
`;

function Button({ align, children, loading, margins, variant, type, ...rest }) {
    const props = {
        ...(margins.includes(`top`) && { top: true }),
        ...(margins.includes(`right`) && { right: true }),
        ...(margins.includes(`bottom`) && { bottom: true }),
        ...(margins.includes(`left`) && { left: true }),
        ...(variant && variant.link && { link: true }),
        align,
    };

    let Button;
    switch (type) {
        case `primary`:
            Button = ButtonPrimary;
            break;
        case `error`:
            Button = ButtonError;
            break;
        case `success`:
            Button = ButtonSuccess;
            break;
        case `warning`:
            Button = ButtonWarning;
            break;

        default:
            Button = ButtonPrimary;
            break;
    }

    return (
        <Button {...props} {...rest}>
            {loading && <span className="loading" />}
            {!loading && children}
        </Button>
    );
}

Button.defaultProps = {
    align: `right`,
    loading: false,
    margins: [],
    type: `primary`,
};

const margins = PropTypes.oneOf([`top`, `right`, `bottom`, `left`]);

Button.propTypes = {
    align: PropTypes.oneOf([`left`, `right`]),
    children: PropTypes.node,
    loading: PropTypes.bool,
    margins: PropTypes.arrayOf(margins),
    type: PropTypes.oneOf([`primary`, `warning`, `success`, `error`]),
    variant: PropTypes.oneOf([`link`]),
};

export default Button;
