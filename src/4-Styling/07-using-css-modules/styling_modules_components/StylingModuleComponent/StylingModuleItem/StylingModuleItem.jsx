import React from 'react';

import './StylingModuleItem.css';

const StylingModuleItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StylingModuleItem;
