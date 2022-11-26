<?php

namespace App\Http\Controllers;
use App\Models\Aeropuerto;
use Illuminate\Http\Request;

class AeropuertoController extends Controller
{
    public function create(Request $req){
        $aeropuerto = new Aeropuerto();

        $aeropuerto->id_region = $req->id_region;
        $aeropuerto->nombre = $req->nombre;
        $aeropuerto->latitud = $req->latitud;
        $aeropuerto->longitud = $req->longitud;
        $aeropuerto->codigo = $req->codigo;

        try {
            $aeropuerto->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al guardar el aeropuerto",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Aeropuerto creado con exito");
    }

    public function update(Request $req){
        try {
            $aeropuerto = Aeropuerto::where('id_aeropuerto',$req->id_aeropuerto)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "aeropuerto seleccionado inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $aeropuerto->id_region = $req->id_region;
        $aeropuerto->nombre = $req->nombre;
        $aeropuerto->latitud = $req->latitud;
        $aeropuerto->longitud = $req->longitud;
        $aeropuerto->codigo = $req->codigo;

        try {
            $aeropuerto->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al actualizar el aeropuerto",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("aeropuerto actualizado con exito");
    }

    public function get($id_aeropuerto){
        try {
            $aeropuerto = Aeropuerto::where('id_aeropuerto',$id_aeropuerto)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar el aeropuerto",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($aeropuerto);
    }

    public function delete($id_aeropuerto){
        try {
            $aeropuerto = Aeropuerto::where('id_aeropuerto',$id_aeropuerto)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al querer eliminar el aeropuerto",
                "error" => $th->getMessage()
            ]);
        }

        try {
            $aeropuerto->delete();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al eliminar el aeropuerto",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("aeropuerto eliminado");
    }

    public function getAll(){
        try {
            $aeropuertos = Aeropuerto::all();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar todos los aeropuertos disponibles",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json($aeropuertos);
    }
}
