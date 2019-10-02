import styled from '@emotion/styled';

const Container = styled.div`
    flex: 1 1 auto;
    height: 100%;
    background-color: ${props => props.theme.colors.darkGrey[100]};
    display: flex;
    flex-direction: column;
`;

export default Container;
