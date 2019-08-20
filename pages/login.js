import Link from 'next/link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';

import { Button, TextField, Form } from '../styled-components';

function Index(props) {
    const handleForgotPassword = () => {
        console.log(`handle forget password`);
    };

    return (
        <>
            {/* <Query query={ALL_POSTS_QUERY}>
                {({ data, error, loading }) => {
                    console.log({ data, error, loading });
                    return null;
                }}
            </Query> */}
            <Form title="Login">
                <TextField required type="email" label="Email" />
                <TextField required type="password" label="Password" />
                <Button style={{ marginTop: `3rem` }} type="submit">
                    Login
                </Button>
                <Button margins={[`top`]} type="button" variant="link" onClick={handleForgotPassword}>
                    Forgot password?
                </Button>
            </Form>
        </>
    );
}

export default Index;

const ALL_POSTS_QUERY = gql`
    query ALL_POSTS_QUERY {
        posts {
            id
            title
            description
            image
            largeImage
        }
    }
`;
