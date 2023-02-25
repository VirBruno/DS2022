
export type VueloType = {
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
}