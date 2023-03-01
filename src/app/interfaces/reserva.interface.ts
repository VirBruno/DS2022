export interface Reserva {
    id_vuelo_ida: number,
    id_vuelo_vuelta: number,
    id_pago: number,
    precio: number,
    estado: EstadoReserva
}

export type EstadoReserva = 'CREADA' | 'PAGADA' | 'FINALIZADA'