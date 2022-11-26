<?php

namespace App\Http\Controllers;
use App\Models\Oferta;
use Illuminate\Http\Request;

class OfertaController extends Controller
{
    public function create(Request $req){
        $oferta = new Oferta();

        $oferta->fechaFin = $req->fechaFin;
        $oferta->fechaInicio = $req->fechaInicio;

        try {
            $oferta->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al guardar la oferta",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Oferta creada con exito");
    }

    public function update(Request $req){
        try {
            $oferta = Oferta::where('id_oferta',$req->id_oferta)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Oferta seleccionada inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $oferta->fechaFin = $req->fechaFin;
        $oferta->fechaInicio = $req->fechaInicio;

        try {
            $oferta->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al actualizar la oferta",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Oferta actualizada con exito");
    }

    public function get($id_oferta){
        try {
            $oferta = Oferta::where('id_oferta',$id_oferta)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar la oferta",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($oferta);
    }

    public function delete($id_oferta){
        try {
            $oferta = Oferta::where('id_oferta',$id_oferta)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al querer eliminar la oferta",
                "error" => $th->getMessage()
            ]);
        }

        try {
            $oferta->delete();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al eliminar la oferta",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Oferta eliminada");
    }

    public function getAll(){
        try {
            $ofertas = Oferta::all();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar todas las ofertas disponibles",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json($ofertas);
    }
}
