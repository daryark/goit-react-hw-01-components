import PropTypes from 'prop-types';
import { Section } from 'utils/Section/Section.styled';
import { FriendListItemSection } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Section>
      <FriendListItemSection isOnline={isOnline}>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendListItemSection>
    </Section>
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
