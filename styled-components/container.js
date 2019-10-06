import styled from '@emotion/styled';

const Container = styled.section`
    max-width: 600px;
    margin: 24px auto;
    width: 100%;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 1rem;
    }
`;

export default Container;
