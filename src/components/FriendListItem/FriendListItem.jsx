import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <FriendItem isOnline={isOnline} as={'li'}>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
