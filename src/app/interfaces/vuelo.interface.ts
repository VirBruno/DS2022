import { Aeropuerto } from "./aeropuerto.interface"
import { Avion } from "./avion.interface"

export interface VueloType {
    aeropuertoOrigen:string,
    aeropuestoDestino:string,
    cantidadAsientos:number,
    precioAsiento:number,
    fechaPartida:Date
}


export interface Vuelo {
    id_vuelo:number,
    id_avion:number,
    id_oferta:number | null,
    aeropuertoOrigen:number,
    aeropuertoDestino:number,
    fechaYHoraArribo: Date,
    fechaYHoraPartida: Date,
    precio: number,
    avion: Avion,
    aeropuerto_origen: Aeropuerto,
    aeropuerto_destino: Aeropuerto
}