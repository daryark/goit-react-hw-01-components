import PropTypes from 'prop-types';
import { Section } from 'components/common/Section/Section.styled';
import {
  Description,
  Avatar,
  Title,
  Text,
  Stats,
  StatsItem,
  StatsTitle,
  StatsNum,
} from './Profile.styled';

export default function Profile({ username, location, tag, avatar, stats }) {
  return (
    <Section>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Title>{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsItem>
          <StatsTitle>Followers </StatsTitle>
          <StatsNum>{stats.followers}</StatsNum>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views </StatsTitle>
          <StatsNum>{stats.views}</StatsNum>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes </StatsTitle>
          <StatsNum>{stats.likes}</StatsNum>
        </StatsItem>
      </Stats>
    </Section>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
