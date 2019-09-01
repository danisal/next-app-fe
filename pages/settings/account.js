import {
    Container,
    Header,
    Content,
    List,
    ListHeader,
    ListItem,
} from '../../components';

function Account() {
    return (
        <Container>
            <Header />
            <Content>
                <List>
                    <ListHeader>Login and security</ListHeader>
                    <ListItem to="/settings/username">Username</ListItem>
                    <ListItem to="/settings/email">Email</ListItem>
                    <ListItem to="/settings/phone">Phone</ListItem>
                    <ListItem to="/settings/password">Password</ListItem>
                </List>
            </Content>
        </Container>
    );
}

export default Account;
