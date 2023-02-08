import styled from 'styled-components';

export const FriendListItemSection = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  &::before {
    content: '';

    width: 10px;
    height: 10px;

    background-color: ${p => (p.isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }
`;
