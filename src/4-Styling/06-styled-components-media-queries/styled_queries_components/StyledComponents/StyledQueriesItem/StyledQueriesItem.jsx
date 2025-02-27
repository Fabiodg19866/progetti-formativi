import React from 'react';

import './StyledQueriesItem.css';

const StyledQueriesItem = props => {
 
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StyledQueriesItem;
