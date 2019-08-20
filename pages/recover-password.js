import { Button, TextField, Form } from '../styled-components';

function RecoverPassword() {
    const handleEmail = () => {
        console.log(`handle register`);
    };

    return (
        <Form title="Forgot Password?">
            <TextField required type="email" label="Registered email" />
            {/* // TODO: try to pass the margin as css, not style */}
            <Button style={{ marginTop: `3rem` }} type="submit" onClick={handleEmail}>
                Send recover link
            </Button>
            <Button margins={[`top`]} type="submit" variant="link">
                back
            </Button>
        </Form>
    );
}

export default RecoverPassword;
