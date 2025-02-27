import React from 'react';

import './StylingInlineItem.css';

const StylingInlineItem = props => {

  const deleteHandler = () => {

    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StylingInlineItem;
