import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function transformLabel(str) {
    return str.replace(/\s/g, `-`).toLowerCase();
}

const Container = styled.div`
    width: 100%;
    margin: 0.5rem 0;

    > span {
        font-size: 12px;
        margin: 0 1rem;
    }
`;

const StyledInput = styled.input`
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    width: 100%;
`;

const StyledLabel = styled.label`
    margin-left: 1rem;
    margin-bottom: 0.25rem;
    display: block;

    ${({ required }) => required && `:after { content: '*'; }`}
`;

function TextField({ label, required, helperText, ...rest }) {
    const transformedLabel = transformLabel(label);

    return (
        <Container>
            <StyledLabel htmlFor={transformedLabel} required={required}>
                {label}
            </StyledLabel>
            <StyledInput
                required={required}
                name={transformedLabel}
                id={transformedLabel}
                {...rest}
            />
            <span>{helperText}</span>
        </Container>
    );
}

TextField.defaultProps = {
    required: false,
    helperText: ``,
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    helperText: PropTypes.string,
};

export default TextField;
