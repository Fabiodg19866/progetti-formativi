

import { IHotel } from "./model/IHotel";
import PropsHotel from "./PropsHotel";





type Hotel = IHotel[];
const ListHotel: React.FC<{array: Hotel}> = (props) => {
    return (
        <div>
        <PropsHotel
        picture = { props.array[0].picture}
        nome = {props.array[0].nome}
        type = { props.array[0].type}
        room_type = { props.array[0].room_type}
        room_available = { props.array[0].room_available}
        price_room_day = { props.array[0].price_room_day}
            />
  <PropsHotel
        picture = { props.array[1].picture}
        nome = {props.array[1].nome}
        type = { props.array[1].type}
        room_type = { props.array[1].room_type}
        room_available = { props.array[1].room_available}
        price_room_day = { props.array[1].price_room_day}
            />
  <PropsHotel
        picture = { props.array[2].picture}
        nome = {props.array[2].nome}
        type = { props.array[2].type}
        room_type = { props.array[2].room_type}
        room_available = { props.array[2].room_available}
        price_room_day = { props.array[2].price_room_day}
            />



        </div>
    
)
}

export default ListHotel;