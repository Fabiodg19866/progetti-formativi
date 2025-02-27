import React from 'react';

import './StylingItem.css';

const StylingItem = props => {


  const deleteHandler = () => {

    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StylingItem;
