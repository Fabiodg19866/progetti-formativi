import { IHotel } from "./model/IHotel";
import PropsHotel from "./PropsHotel";

type Items = IHotel[];

const ListHotel: React.FC<{ hotel: Items }> = (props) => {
  return (
    <div>
      {props.hotel.map((hotels) => (
        <PropsHotel
          key={hotels.id}
          nome={hotels.nome}
          type={hotels.type}
          room_type={hotels.room_type}
          room_available={hotels.room_available}
          price_room_day={hotels.price_room_day}
        />
      ))}
    </div>
  );
};

export default ListHotel;
