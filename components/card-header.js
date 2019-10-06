import styled from '@emotion/styled';

const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    p {
        margin: 0;
    }
`;

function CardHeader(params) {
    return (
        <StyledCardHeader>
            <h5>Title</h5>
            <p>
                <time dateTime="12-08-2019"></time>
                12-08-2019
            </p>
        </StyledCardHeader>
    );
}

export default CardHeader;
