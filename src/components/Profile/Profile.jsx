import PropTypes from 'prop-types'
import { Contacts, DivDescription, DivProfile, Image, Li, Name, Span, UlStats } from './Profile.styled';

export const Profile = ({
    user: { username, tag, location, avatar, stats },
}) => {
    return (
        <DivProfile>
            <DivDescription>
                <Image
                    src={avatar}
                    alt={username}
                    width="90"
                />
                <Name>{username}</Name>
                <Contacts>@{tag}</Contacts>
                <Contacts>{location}</Contacts>
            </DivDescription>

            <UlStats>
                <Li>
                    <Span>Followers</Span>
                    <Span>{stats.followers}</Span>
                </Li>
                <Li>
                    <Span>Views</Span>
                    <Span>{stats.views.toLocaleString()}</Span>
                </Li>
                <Li>
                    <Span>Likes</Span>
                    <Span>{stats.likes}</Span>
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

