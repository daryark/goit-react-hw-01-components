import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionList from 'components/TransactionList/TransactionList';
import GlobalStyles from 'utils/GlobalStyles';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Container } from '../utils/Container/Container.styled';

const { username, avatar, location, stats, tag } = user;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
      <GlobalStyles />
    </Container>
  );
};
