import { LoggedInContainer, List, ListItem, ListHeader } from '../components';

function Settings() {
    return (
        <LoggedInContainer>
            <List>
                <ListHeader>User name</ListHeader>
                <ListItem to="/settings/account">Account</ListItem>
            </List>
        </LoggedInContainer>
    );
}

export default Settings;
