import PropTypes from 'prop-types';
import {
  StatList,
  StatTitle,
  StatItem,
  Label,
  Percent,
} from './Statistics.styled';
import { Section } from 'components/common/Section/Section.styled';

export default function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatItem key={id}>
              <Label>{label} </Label>
              <Percent>{percentage}%</Percent>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
  title: PropTypes.string,
};
