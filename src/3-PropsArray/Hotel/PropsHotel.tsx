import { IHotel } from "./model/IHotel";
const PropsHotel: React.FC<IHotel> = (props) => {
  return (
    <div>
      <div>
        <img src={props.picture} alt={props.nome} />

        <ul style={{ marginTop: "5%" }}>
          <li>{props.nome}</li>
          <li>{props.type}</li>
          <li> {props.room_type}</li>
          <li>{props.room_available}</li>
          <li>{props.price_room_day}</li>
        </ul>
      </div>
    </div>
  );
};

export default PropsHotel;
