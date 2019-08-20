import styled from '@emotion/styled';

import { Header } from '../components';

const Wrapper = styled.div`
    flex: 1 1 auto;
    height: 100%;
    background-color: ${props => props.theme.colors.ghostWhite};
`;

function MainPage() {
    return (
        <Wrapper>
            <Header />
            <p>main page</p>
        </Wrapper>
    );
}

export default MainPage;
