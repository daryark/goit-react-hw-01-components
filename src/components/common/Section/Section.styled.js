import styled from 'styled-components';

export const Section = styled.div`
  width: 250px;
  margin-bottom: 20px;

  background-color: #fff;
  border: 1px solid #dae1ef;
  border-radius: 5px;

  overflow: hidden;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
