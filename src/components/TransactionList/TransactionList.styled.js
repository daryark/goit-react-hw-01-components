import styled from 'styled-components';
import { generateRandomColor } from 'utils/generateRandomColor';

export const TransactionTable = styled.table`
  width: 600px;
  background-color: #fff;
  border: 1px solid #dae1ef;
`;

export const TransactionHead = styled.tr`
  color: #ffffff;
  background-color: ${generateRandomColor};
`;
