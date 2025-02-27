import React, { useState } from 'react';

import InputsUI from '../UI/InputsUI';


const InputsExpenseItem = (props) => {
 
  const [title, setTitle] = useState(props.title);
  
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <InputsUI className='expense-item'>
      
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </InputsUI>
  );
}

export default InputsExpenseItem;
