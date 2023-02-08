import PropTypes from 'prop-types';
import { FriendListItemSection } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <FriendListItemSection isOnline={isOnline}>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListItemSection>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
