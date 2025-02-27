import HttpRequestCar from "./HttpRequestCar";
import classes from "./HttpRequestCarList.module.css";

const HttpRequestCarList = (props) => {
  return (
    <ul className={classes["car-list"]}>
      {props.cars.map((car) => (
        <HttpRequestCar
          key={car.id}
          brand={car.brand}
          model={car.model}
          birthModel={car.birthModel}
        />
      ))}
    </ul>
  );
};

export default HttpRequestCarList;
