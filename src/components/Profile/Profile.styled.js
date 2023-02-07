import styled from 'styled-components';

export const Description = styled.div`
  padding: 20px 0;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  color: grey;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  text-align: center;

  font-size: 24px;
  font-weight: 700;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 150px;

  border-radius: 50%;
  border: 1px solid black;
`;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #dae1ef;
`;

export const StatsItem = styled.li`
  padding: 20px 10px;
  width: calc(100% / 3);

  background-color: #f3f6fe;
  border-left: 1px solid #dae1ef;

  &:last-of-type {
    border-right: none;
  }
`;

export const StatsTitle = styled(Text)`
  font-size: 11px;
`;

export const StatsNum = styled(Text)`
  color: black;
  margin-bottom: 0;
`;
