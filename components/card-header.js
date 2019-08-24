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
                <time datetime="2019-08-12"></time>
                2019.08.12
            </p>
        </StyledCardHeader>
    );
}

export default CardHeader;
