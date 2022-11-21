<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicio;
use App\Models\Pago;
use App\Models\Reserva;

class ServicioController extends Controller
{
    public function agregarServicio(Request $req){


        $validator = Validator::make($req->all(), [
            'id_reserva' => 'required|integer',
            'id_agencia' => 'required|integer',
            'id_vuelo' => 'required|integer',
            'precio' => 'required|integer',
            'fechaInicio' => 'required|date',
            'fechaFin' => 'required|date',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }


        $servicio = new Servicio();

        $servicio->id_reserva = $req->id_reserva;
        $servicio->id_agencia = $req->id_agencia;
        $servicio->id_vuelo = $req->id_vuelo;
        $servicio->precio = $req->precio;
        $servicio->fechaInicio = $req->fechaInicio;
        $servicio->fechaFin = $req->fechaFin;

        try {
            $servicio->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al agregar el servicio",
                "error" => $th->getMessage()
            ],503);
        }

        return response()->json("Servicio agregado con exito");
    }

    public function buscarServicio(){

    }

    public function listarReservas($id_usuario){

        $validator = Validator::make($req->all(), [
            'id_usuario' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

        try {
            $reservas = Reserva::where('id_usuario',$id_usuario)->get();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar las reservas del usuario seleccionado",
                "error" => $th->getMessage(),
            ]);
        }

        return response()->json($reservas);
    }

    public function modificarEstadoReserva(){

    }

    public function modificarReserva(Request $req){
        $validator = Validator::make($req->all(), [
            'id_reserva' => 'required',
            'id_pago' => 'required',
            'estado' => 'required',
            'id_usuario' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

        try {
            $reserva = Reserva::where('id_reserva',$req->id_reserva)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" =>"No existe la reserva",
                "error" => $th->getMessage()
            ],406);
        }

        $reserva->id_pago = $req->id_pago;
        $reserva->estado = $req->estado;
        $reserva->id_usuario = $req->id_usuario;

        try {
            $reserva->save();
        } catch (\Throwable $th) {
            return response()->json(
                [
                    "message" => "Error al crear la reserva",
                    "error" => $th->getMessage()
                ], 503
            );
        }

        return response()->json("Reserva modificada");
    }

    public function nuevaReserva(Request $req){

        $validator = Validator::make($req->all(), [
            'id_pago' => 'required',
            'estado' => 'required',
            'id_usuario' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

        $reserva = new Reserva();

        $reserva->id_pago = $req->id_pago;
        $reserva->estado = $req->estado;
        $reserva->id_usuario = $req->id_usuario;

        try {
            $reserva->save();
        } catch (\Throwable $th) {
            return response()->json(
                [
                    "message" => "Error al crear la reserva",
                    "error" => $th->getMessage()
                ], 503
            );
        }

        return response()->json("Reserva creada");
    }

    public function nuevoPago(Request $req){
        $validator = Validator::make($req->all(), [
            'monto' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

        $pago=new Pago();

        $pago->monto=$req->monto;

        try {
            $pago->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al efectuar el pago",
                "error" => $th->getMessage()
            ],503);
        }

        return response()->json("Pago efectuado con exito");
    }

}
