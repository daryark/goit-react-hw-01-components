import styled from 'styled-components';
import { Section } from 'components/common/Section/Section.styled';

export const FriendItem = styled(Section)`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 10px;
  font-weight: 600;

  &::before {
    content: '';

    width: 10px;
    height: 10px;

    background-color: ${p => (p.isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }
`;
