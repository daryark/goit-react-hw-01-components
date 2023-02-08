import React from 'react';
import PropTypes from 'prop-types';
import { TransactionItemStyle, TransactionRow } from './TransitionItem.styled';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <TransactionRow>
      <TransactionItemStyle>{type}</TransactionItemStyle>
      <TransactionItemStyle>{amount}</TransactionItemStyle>
      <TransactionItemStyle>{currency}</TransactionItemStyle>
    </TransactionRow>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
