import styled from '@emotion/styled';

const StyledCard = styled.article`
    flex: 1 1 auto;
    border-radius: 4px;
    box-shadow: ${props => props.theme.shadows[2]};
    display: flex;
    flex-direction: column;
    margin: 16px auto;

    /* large devices and up */
    @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
        max-width: 70%;
    }
`;

function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}

export default Card;
