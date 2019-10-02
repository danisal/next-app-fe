import Link from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Chevron from '../static/icons/chevron.svg';

const StyledListItem = styled.li`
    cursor: pointer;
    border-top: 1px solid ${props => props.theme.colors.darkGrey[600]};

    :active,
    :hover {
        background-color: ${props => props.theme.colors.darkGrey[200]};
    }

    a {
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
    }
`;

function ListItem({ children, to }) {
    return (
        <StyledListItem>
            <Link href={to}>
                <a>
                    {children}
                    <Chevron height={14} />
                </a>
            </Link>
        </StyledListItem>
    );
}

ListItem.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
};

export default ListItem;
