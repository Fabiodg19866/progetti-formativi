import { IHotel } from "./model/IHotel";
const PropsHotel: React.FC<IHotel> = (props) => {
  return (
    <div>
      <div>

        <ul style={{ marginTop: "5%" }}>
          <li>{props.nome}</li>
          <li>{props.type}</li>
          <li> {props.room_type}</li>
          <li>Stanze disponibili :{props.room_available}</li>
          <li>{props.price_room_day},00 €</li>
        </ul>
      </div>
    </div>
  );
};

export default PropsHotel;
