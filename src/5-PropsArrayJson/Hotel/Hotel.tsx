import ListHotel from "./ListHotel";
import { IHotel } from "./model/IHotel";

import hotelsData from "../../data/hotels.json"

const Hotel = () => {

  const hotels: IHotel[] = hotelsData;


  

  return (
    <div>
      <ListHotel hotel={hotels} />
    </div>
  );
};

export default Hotel;
