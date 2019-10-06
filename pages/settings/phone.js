import { LoggedInContainer } from '../../components';
import { Button, Container, TextField } from '../../styled-components';

function Phone() {
    return (
        <LoggedInContainer>
            <Container>
                <TextField
                    disabled
                    label="Current"
                    type="tel"
                    value="961234567"
                />
                <TextField label="New" type="tel" />
                <Button type="primary">Save</Button>
            </Container>
        </LoggedInContainer>
    );
}

export default Phone;
