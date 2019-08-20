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

const StyledButton = styled.button`
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    min-height: 40px;
    min-width: 140px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 14px;

    margin-top: ${({ top }) => top && `1rem`};
    margin-right: ${({ right }) => right && `1rem`};
    margin-bottom: ${({ bottom }) => bottom && `1rem`};
    margin-left: ${({ left }) => left && `1rem`};

    :hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

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

function Button({ children, loading, margins, variant, ...rest }) {
    const props = {
        ...(margins.includes(`top`) && { top: true }),
        ...(margins.includes(`right`) && { right: true }),
        ...(margins.includes(`bottom`) && { bottom: true }),
        ...(margins.includes(`left`) && { left: true }),
        ...(variant && variant.link && { link: true }),
    };

    return (
        <StyledButton {...props} {...rest}>
            {loading && <span className="loading" />}
            {!loading && children}
        </StyledButton>
    );
}

Button.defaultProps = {
    loading: false,
    margins: [],
};

const margins = PropTypes.oneOf([`top`, `right`, `bottom`, `left`]);

Button.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
    margins: PropTypes.arrayOf(margins),
    variant: PropTypes.oneOf([`link`]),
};

export default Button;
