import { LoggedInContainer } from '../../components';
import { Button, Container, TextField } from '../../styled-components';

function Password() {
    return (
        <LoggedInContainer>
            <Container>
                <TextField type="password" label="New password" />
                <TextField type="password" label="Confirm password" />
                <Button type="primary">Save</Button>
            </Container>
        </LoggedInContainer>
    );
}

export default Password;
