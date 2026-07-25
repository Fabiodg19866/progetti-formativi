import ListHotel from "./ListHotel";


    
const Hotel = () => {

        
    const hotel = [
        {
    picture: "/image1.jpeg",
    nome: "HotelPiscina",
    type: "cinque stelle",
    room_type:"Singola",
    room_available:3,
    price_room_day:35,
},
          {
    picture: "/image2.jpeg",
    nome: "Hotel di Napoli",
    type: " zero stelle", //2 -3 stelle
    room_type: "Presidenziale",
    room_available:5 ,
    price_room_day:125,
},
          {
    picture: "/image3.jpeg",
    nome: "Sutton Palace",
    type: "due stelle", //2 -3 stelle
    room_type: "Doppia",
    room_available:4,
    price_room_day:65,
},
      
    ];

    return (
        <div>
            <div>
                  
                <ListHotel array={hotel}/>
            </div>
        </div>
    )
}
export default Hotel