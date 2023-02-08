import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionItem/TransactionItem';
import { TransactionTable, TransactionHead } from './TransactionList.styled';

export default function TransactionList({ transactions }) {
  return (
    <TransactionTable>
      <thead>
        <TransactionHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionHead>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
