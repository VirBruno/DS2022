<?php

namespace App\Http\Controllers;
use App\Models\Avion;
use App\Models\Asiento;
use DB;
use Illuminate\Http\Request;

class AvionController extends Controller
{
    public function create(Request $req){
        $avion = new Avion();

        $avion->aerolinea=$req->aerolinea;
        $avion->matricula=$req->matricula;

        try {
            $avion->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al guardar el avion",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Avion creada con exito");
    }

    public function update(Request $req){
        try {
            $avion = Avion::where('id_avion',$req->id_avion)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Avion seleccionado inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $avion->aerolinea=$req->aerolinea;
        $avion->matricula=$req->matricula;

        try {
            $avion->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al actualizar el avion",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Avion actualizado con exito");
    }

    public function get($id_avion){
        try {
            $avion = Avion::where('id_avion',$id_avion)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar el avion",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($avion);
    }

    public function delete($id_avion){
        try {
            $avion = Avion::where('id_avion',$id_avion)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al querer eliminar el avion",
                "error" => $th->getMessage()
            ]);
        }

        try {
            $avion->delete();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al eliminar el avion",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Avion eliminado");
    }

    public function getAll(){
        try {
            $aviones = Avion::all();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar todas los aviones disponibles",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json($aviones);
    }

    public function asientosLibres($id_avion){
        try {
            $asientos = Asiento::where([['id_avion',$id_avion],['estado','=','libre']])->get();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar los asientos disponibles",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($asientos);
    }

    public function tomarAsiento(Request $req){
        try {
            $asiento = Asiento::where('id_asiento',$req->id_asiento)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Asiento seleccionado inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $asiento->estado = "tomado";

        try {
            $asiento->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al tomar el asiento",
                "error" => $th->getMessage()
            ],500);
        }

        return response()->json("Asiento tomado");
    }

    public function createAsientos(Request $req){
        try {
            DB::beginTransaction();
            for ($i=0; $i < $req->cantAsientos ; $i++) { 
                $asiento = new Asiento();

                $asiento->clase= $req->clase;
                $asiento->estado=$req->estado;
                $asiento->numero=$req->numero + $i;
                $asiento->id_avion = $req->id_avion;
                $asiento->save();
            }   
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                "message" => "Error al guardar los asientos del avion",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Asientos creados con exito");
    }

    public function updateAsiento(Request $req){
        try {
            $asiento = Asiento::where('id_asiento',$req->id_asiento)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Asiento seleccionado inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $asiento->clase= $req->clase;
        $asiento->estado=$req->estado;
        $asiento->numero=$req->numero;
        $asiento->id_avion = $req->id_avion;

        try {
            $asiento->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al actualizar el asiento",
                "error" => $th->getMessage()
            ],500);
        }

        return response()->json("Asiento actualizado con exito");
    }

    public function getAsiento($id_asiento){
        try {
            $asiento = Asiento::where('id_asiento',$id_asiento)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar los asientos",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($asiento);
    }

    public function deleteAsiento($id_asiento){
        try {
            $asiento = Asiento::where('id_asiento',$id_asiento)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al querer eliminar el asiento",
                "error" => $th->getMessage()
            ],406);
        }

        try {
            $asiento->delete();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al eliminar el asiento",
                "error" => $th->getMessage()
            ],500);
        }

        return response()->json("Avion eliminado");
    }

    public function getAllAsientos(){
        try {
            $asientos = Asiento::all();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar todos los asientos disponibles",
                "error" => $th->getMessage()
            ],503);
        }

        return response()->json($asientos);
    }
}
