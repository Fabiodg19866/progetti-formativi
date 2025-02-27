import React from 'react';

import './StylingClassesItem.css';

const StylingClassesItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StylingClassesItem;
