import React, { useState } from 'react';

import KeysStyleUI from '../UI/KeysStyleUI';
import KeysStyleExpensesFilter from './KeysStyleExpensesFilter';
import KeysStyleExpensesList from './KeysStyleExpensesList';
import KeysStyleExpensesChart from './KeysStyleExpensesChart';
import './KeysStyleExpenses.css';

const KeysStyleExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <KeysStyleUI className='expenses'>
        <KeysStyleExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <KeysStyleExpensesChart expenses={filteredExpenses} />
        <KeysStyleExpensesList items={filteredExpenses} />
      </KeysStyleUI>
    </div>
  );
};

export default KeysStyleExpenses;
