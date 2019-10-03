import styled from '@emotion/styled';

const StyledCardActions = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: ${props => props.theme.colors.darkGrey[100]};
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
`;

const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Author = styled.div`
    text-align: right;
`;

function CardActions(params) {
    return (
        <StyledCardActions>
            <ActionsWrapper>buttons</ActionsWrapper>
            <Author>author</Author>
        </StyledCardActions>
    );
}

export default CardActions;
