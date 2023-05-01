import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';
import { LiItem, UlList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <UlList className="friend-list">
            {friends.map(friend => (
                <LiItem key={friend.id} className="item">
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