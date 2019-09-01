import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    ListHeader,
} from '../components';

function Settings() {
    return (
        <Container>
            <Header />
            <Content>
                <List>
                    <ListHeader>User name</ListHeader>
                    <ListItem to="/settings/account">Account</ListItem>
                </List>
            </Content>
        </Container>
    );
}

export default Settings;
