import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { LiItem, UlList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <UlList>
            {friends.map(friend => (
                <LiItem key={friend.id}>
                    <FriendListItem friend={friend} />
                </LiItem>
            ))}
        </UlList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired
};