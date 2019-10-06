import { LoggedInContainer } from '../../components';
import { Button, Container, TextField } from '../../styled-components';

function Email() {
    return (
        <LoggedInContainer>
            <Container>
                <TextField
                    disabled
                    label="Current"
                    type="email"
                    value="email@domain.com"
                />
                <TextField label="New" type="email" />
                <Button type="primary">Save</Button>
            </Container>
        </LoggedInContainer>
    );
}

export default Email;
