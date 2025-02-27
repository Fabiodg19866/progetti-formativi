

import classes from './HttpRequestCar.module.css';

const HttpRequestCar = (props) => {
  return (
    <li className={classes.car}>
      <h2>{props.brand}</h2>
      <h3>{props.model}</h3>
      <p>{props.birthModel}</p>
    </li>
  );
};

export default HttpRequestCar;
