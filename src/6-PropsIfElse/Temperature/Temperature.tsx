import ListTemperature from "./ListTemperature";

import temperatureData from "../../data/temperature.json";
import { ITemperature } from "./model/ITemperature";

const Temperature = () => {
  const temperature: ITemperature[] = temperatureData;

  return (
    <div>
      <ListTemperature items={temperature} />
    </div>
  );
};

export default Temperature;
