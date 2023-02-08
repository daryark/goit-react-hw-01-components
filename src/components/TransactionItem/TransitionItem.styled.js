import styled from 'styled-components';

export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: peachpuff;
  }
`;

export const TransactionItemStyle = styled.td`
  width: calc(100% / 3);
  text-align: center;
  text-transform: capitalize;
`;
