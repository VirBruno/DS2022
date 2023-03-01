export interface Reserva {
    id_vuelo_ida: number,
    id_vuelo_vuelta: number,
    id_pago: number,
    precio: number,
    estado: EstadoReserva,
}

export interface reservaPayload {
    id_vuelo_ida?: number,
    id_vuelo_vuelta?: number,
    id_pago: number,
    precio: number,
    estado: EstadoReserva,
    id_usuario: number
}

export type EstadoReserva = 'CREADA' | 'PAGADA' | 'FINALIZADA'