import PropTypes from 'prop-types';
import { Section } from 'utils/Section/Section.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="item">
      <Section>
        <span className={isOnline ? 'online' : 'offline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Section>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    }).isRequired
  ),
};
