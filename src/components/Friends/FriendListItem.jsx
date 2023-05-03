import { BsFillCircleFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { DivItem, ImgAvatar, PName, SpanStatus } from './FriendListItem.styled';

export const FriendListItem = ({
    friend: { avatar, name, isOnline }
}) => {
    return <DivItem>
        <SpanStatus isOnline={isOnline}><BsFillCircleFill /></SpanStatus>
        <ImgAvatar src={avatar} alt={name} width="48" />
        <PName>{name}</PName>
    </DivItem>;
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}
