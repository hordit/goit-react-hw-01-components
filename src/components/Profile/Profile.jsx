import PropTypes from 'prop-types'
import { Contacts, DivDescription, DivProfile, Image, Li, Name, Span, UlStats } from './Profile.styled';

export const Profile = ({
    user: { username, tag, location, avatar, stats },
}) => {
    return (
        <DivProfile className="profile">
            <DivDescription className="description">
                <Image
                    src={avatar}
                    alt={username}
                    className="avatar"
                    width="80"
                />
                <Name className="name">{username}</Name>
                <Contacts className="tag">@{tag}</Contacts>
                <Contacts className="location">{location}</Contacts>
            </DivDescription>

            <UlStats className="stats">
                <Li>
                    <Span className="label">Followers</Span>
                    <Span className="quantity">{stats.followers}</Span>
                </Li>
                <Li>
                    <Span className="label">Views</Span>
                    <Span className="quantity">{stats.views.toLocaleString()}</Span>
                </Li>
                <Li>
                    <Span className="label">Likes</Span>
                    <Span className="quantity">{stats.likes}</Span>
                </Li>
            </UlStats>
        </DivProfile>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,   
    }).isRequired, 
};

