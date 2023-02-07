import { Title } from 'components/Profile/Profile.styled';
import styled from 'styled-components';

export const StatTitle = styled(Title)`
  text-transform: uppercase;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #dae1ef;
  padding-top: 10px;
`;

export const StatItem = styled.li`
  text-align: center;
  background-color: {({backgroundColor}) => backgroundColor};
`;
