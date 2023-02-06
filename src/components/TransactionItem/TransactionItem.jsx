import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'voca';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td>{capitalize(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
