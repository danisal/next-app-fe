import styled from '@emotion/styled';

import { LoggedInContainer } from '../../components';
import { Button, TextField } from '../../styled-components';

const Wrapper = styled.section`
    max-width: 600px;
    margin: 24px auto;
    width: 100%;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 1rem;
    }
`;

function Email() {
    return (
        <LoggedInContainer>
            <Wrapper>
                <TextField
                    label="Current"
                    type="email"
                    value="email@domain.com"
                    disabled
                />
                <TextField label="Email" type="email" />
                <Button type="primary">Save</Button>
            </Wrapper>
        </LoggedInContainer>
    );
}

export default Email;
