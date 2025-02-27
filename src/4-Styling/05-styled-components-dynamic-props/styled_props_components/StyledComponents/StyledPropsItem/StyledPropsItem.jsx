import React from 'react';

import './StyledPropsItem.css';

const StyledPropsItem = props => {
 
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StyledPropsItem;
