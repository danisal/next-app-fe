import styled from '@emotion/styled';

const StyledCard = styled.article`
    flex: 1 1 auto;
    border-radius: 0.25rem;
    box-shadow: ${props => props.theme.shadows[2]};
    display: flex;
    flex-direction: column;
    margin: 16px 24px;
    background-color: ${props => props.theme.colors.white};

    /* large devices and up */
    @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
        max-width: 70%;
        margin: 16px auto;
    }
`;

function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}

export default Card;
