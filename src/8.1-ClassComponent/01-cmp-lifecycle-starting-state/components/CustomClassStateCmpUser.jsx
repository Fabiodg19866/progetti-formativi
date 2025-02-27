import { Component } from 'react';

import classes from './CustomClassStateCmpUser.module.css';

class CustomClassStateCmpUser extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}


export default CustomClassStateCmpUser;
