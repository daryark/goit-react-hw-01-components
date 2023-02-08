import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'voca';
import { TransactionItemStyle, TransactionRow } from './TransitionItem.styled';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <TransactionRow>
      <TransactionItemStyle>{capitalize(type)}</TransactionItemStyle>
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
