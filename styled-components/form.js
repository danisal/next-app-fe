import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 320px;

    fieldset {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;

        > div {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 2rem;
        }
    }
`;

function Form({ children, title }) {
    return (
        <StyledForm action="login" method="post">
            <fieldset>
                <div>
                    <h1>{title}</h1>
                    {children}
                </div>
            </fieldset>
        </StyledForm>
    );
}

Form.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
};

export default Form;
