import React from 'react';

import './KeysStyleUI.css'

const KeysStyleUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default  KeysStyleUI;
