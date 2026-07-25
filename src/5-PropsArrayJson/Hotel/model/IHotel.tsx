export interface IHotel {
  id?: number;
  nome: string;
  type: string; 
  room_type: string;
  room_available: number;
  price_room_day: number;
}