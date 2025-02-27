import React from 'react';

import styles from './StylingModuleButton.module.css';

const StylingModuleButton = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StylingModuleButton;
