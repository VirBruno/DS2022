<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Servicio;
use App\Models\Oferta;
use App\Models\Pago;
use App\Models\Reserva;
use App\Models\Vuelo;
use DB;
class ReservaController extends Controller
{
    public function agregarServicio(Request $req){

       

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

    public function buscarServicio($id_servicio){
        try {
            $servicio = Servicio::with('vuelo','reserva')->where('id_servicio',$id_servicio)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "error al buscar el servicio",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($servicio);
    }

    public function listarReservas($id_usuario){

        $validator = Validator::make($req->all(), [
            'id_usuario' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

            try {
                $misReservas = User::with('misReservas')->where('id_usuario',$id_usuario)->first();
            } catch (\Throwable $th) {
                return response()->json([
                    "message" => "Error al consultar las reservas",
                    "error" => $th->getMessage()
                ],503);
            }

            return response()->json($misReservas);

    }

    public function modificarEstadoReserva(){
        $validator = Validator::make($req->all(), [
            'id_reserva' => 'required',
            'estado' => 'required',
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

        $reserva->estado = $req->estado;

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

        return response()->json("Estado actualizado");
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
            'id_vuelo' => 'required',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
        }

        try {
            $vuelo=Vuelo::where('id_vuelo',$req->id_vuelo)->first();
        } catch (\Throwable $th) {
            return response()->json([
                'message' => "Error al tomar el vuelo",
                'error' => $th->getMessage()
            ]);
        }

        $reserva = new Reserva();

        $reserva->id_pago = $req->id_pago;
        $reserva->estado = $req->estado;
        $reserva->id_usuario = $req->id_usuario;
        $reserva->id_vuelo = $req->id_vuelo;
        DB::beginTransaction();
        try {
            $reserva->save();
            DB::commit();
        
        } catch (\Throwable $th) {
            DB::rollBack();
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

    public function misReservas($id_usuario){
        try {
            $misReservas = User::with('misReservas')->where('id_usuario',$id_usuario)->first();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar las reservas",
                "error" => $th->getMessage()
            ],503);
        }

        return response()->json($misReservas);
    }
}
