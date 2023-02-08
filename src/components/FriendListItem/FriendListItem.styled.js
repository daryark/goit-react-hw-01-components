import styled from 'styled-components';

export const FriendListItemSection = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 250px;
  padding: 10px;
  margin: 20px auto;

  border: 1px solid #dfdfdf;
  font-weight: 600;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';

    width: 10px;
    height: 10px;

    background-color: ${p => (p.isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }
`;
