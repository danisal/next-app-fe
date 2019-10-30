import Link from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import ChevronRight from '../static/icons/chevron-right.svg';

const StyledListItem = styled.li`
    cursor: pointer;
    transition: ease 0.05s;

    :active,
    :hover {
        background-color: ${props => props.theme.colors.royalBlue[800]};

        a {
            color: ${props => props.theme.colors.royalBlue[100]};

            span {
                background-color: ${props =>
                    props.navigation
                        ? `inherit`
                        : props.theme.colors.royalBlue[100]};

                svg {
                    color: ${props =>
                        props.navigation
                            ? `inherit`
                            : props.theme.colors.royalBlue[800]};
                }
            }
        }
    }

    a {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: ${props => props.theme.colors.royalBlue[800]};

        span {
            background-color: ${props =>
                props.navigation
                    ? `inherit`
                    : props.theme.colors.royalBlue[800]};
            border-radius: 50%;
            min-height: 32px;
            min-width: 32px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: ${props =>
                    props.navigation
                        ? `inherit`
                        : props.theme.colors.royalBlue[100]};
                height: 16px;
            }
        }
    }
`;

function ListItem({ children, to, navigation }) {
    return (
        <StyledListItem navigation={navigation}>
            <Link href={to}>
                <a>
                    {children}
                    <span>
                        <ChevronRight />
                    </span>
                </a>
            </Link>
        </StyledListItem>
    );
}

ListItem.propTypes = {
    children: PropTypes.node,
    navigation: PropTypes.bool,
    to: PropTypes.string,
};

export default ListItem;
