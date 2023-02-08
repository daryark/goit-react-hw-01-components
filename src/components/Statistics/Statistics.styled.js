import styled from 'styled-components';
import { Title } from 'components/Profile/Profile.styled';
import { generateRandomColor } from 'utils/generateRandomColor';

export const StatTitle = styled(Title)`
  text-transform: uppercase;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #dae1ef;
`;

export const StatItem = styled.li`
  padding: 10px 0;
  text-align: center;
  width: calc(100% / 5);
  background-color: ${generateRandomColor};
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #fff;
`;

export const Percent = styled(Label)`
  font-size: 16px;
`;
