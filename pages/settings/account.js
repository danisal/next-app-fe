import {
    List,
    ListHeader,
    ListItem,
    LoggedInContainer,
} from '../../components';

function Account() {
    return (
        <LoggedInContainer>
            <List>
                <ListHeader>Login and security</ListHeader>
                <ListItem to="/settings/username">Username</ListItem>
                <ListItem to="/settings/email">Email</ListItem>
                <ListItem to="/settings/phone">Phone</ListItem>
                <ListItem to="/settings/password">Password</ListItem>
            </List>
        </LoggedInContainer>
    );
}

export default Account;
