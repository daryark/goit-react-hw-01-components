import PropTypes from 'prop-types';

import { generateRandomColor } from 'utils/RandomColor';
import { StatList, StatTitle, StatItem } from './Statistics.styled';
import { Section } from 'utils/Section/Section.styled';

export default function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <StatItem key={id} backgroundColor={generateRandomColor()}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
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
