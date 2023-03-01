import { Vuelo } from "./vuelo.interface";

export interface ShopCart {
    vuelo_ida: Vuelo | null,
    vuelo_vuelta?:Vuelo | null,
    precioTotal: number,
}