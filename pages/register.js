import { Button, TextField, Form } from '../styled-components';

function Register() {
    const handleRegister = () => {
        console.log(`handle register`);
    };

    return (
        <Form title="Register">
            <TextField required type="password" label="Password" />
            <TextField required type="password" label="Repeat password" />
            {/* // TODO: try to pass the margin as css, not style */}
            <Button
                style={{ marginTop: `3rem` }}
                type="submit"
                onClick={handleRegister}
            >
                Register
            </Button>
        </Form>
    );
}

export default Register;
