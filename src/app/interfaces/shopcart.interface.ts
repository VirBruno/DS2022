import { Vuelo } from "./vuelo.interface";

export interface ShopCart {
    vuelos: Vuelo[],
    precioTotal: number,
}