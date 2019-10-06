import { LoggedInContainer } from '../../components';
import { Button, Container, TextField } from '../../styled-components';

function UserName() {
    return (
        <LoggedInContainer>
            <Container>
                <TextField
                    label="Current"
                    type="text"
                    value="my username"
                    disabled
                />
                <TextField label="New" type="text" />
                <Button type="primary">Save</Button>
            </Container>
        </LoggedInContainer>
    );
}

export default UserName;
