import React from 'react';

import KeysStyleExpenseDate from './KeysStyleExpenseDate';
import KeysStyleUI from '../UI/KeysStyleUI';
import './KeysStyleExpenseItem.css';

const KeysStyleExpenseItem = (props) => {
  return (
    <li>
      <KeysStyleUI className='expense-item'>
        <KeysStyleExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </KeysStyleUI>
    </li>
  );
};

export default KeysStyleExpenseItem;
