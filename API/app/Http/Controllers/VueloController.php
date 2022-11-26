<?php

namespace App\Http\Controllers;
use App\Models\Vuelo;
use Illuminate\Http\Request;

class VueloController extends Controller
{
    public function vuelosPorFecha(Request $req){
        try {
            $vuelo['ida'] = Vuelo::with('vueloConAsientos')
            ->where([
                ['aeropuertoOrigen',$req->origen],
                ['aeropuertoDestino',$req->destino]
            ])
            ->whereDate('fechaYHoraPartida',$req->fechaPartida)
            ->get();

            $vuelo['vuelta'] = Vuelo::with('vueloConAsientos')
            ->where([
                ['aeropuertoOrigen',$req->destino],
                ['aeropuertoDestino',$req->origen],
            ])
            ->whereDate('fechaYHoraPartida',$req->fechaVuelta)
            ->get();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar los vuelos por fecha",
                "error" => $th->getMessage()
            ],503);
        }

        return response()->json($vuelo);
    }

    public function create(Request $req){
        $vuelo = new Vuelo();

        $vuelo->aeropuertoDestino = $req->id_aeropuertoDestino;
        $vuelo->aeropuertoOrigen =$req->id_aeropuertoOrigen;
        $vuelo->fechaYHoraArribo = $req->fechaYHoraArribo;
        $vuelo->fechaYHoraPartida = $req->fechaYHoraPartida;
        $vuelo->precio = $req->precio;

        try {
            $vuelo->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al guardar el vuelo",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("Vuelo creado con exito");
    }

    public function update(Request $req){
        try {
            $vuelo = Vuelo::where('id_vuelo',$req->id_vuelo)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "vuelo seleccionado inexistente",
                "error" => $th->getMessage()
            ],406);
        }

        $vuelo->aeropuertoDestino = $req->id_aeropuertoDestino;
        $vuelo->aeropuertoOrigen =$req->id_aeropuertoOrigen;
        $vuelo->fechaYHoraArribo = $req->fechaYHoraArribo;
        $vuelo->fechaYHoraPartida = $req->fechaYHoraPartida;
        $vuelo->precio = $req->precio;

        try {
            $vuelo->save();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al actualizar el vuelo",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("vuelo actualizado con exito");
    }

    public function get($id_vuelo){
        try {
            $vuelo = Vuelo::with('vueloConAsientos')
            ->where('id_vuelo',$id_vuelo)
            ->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar el vuelo",
                "error" => $th->getMessage()
            ],406);
        }

        return response()->json($vuelo);
    }

    public function delete($id_vuelo){
        try {
            $vuelo = Vuelo::where('id_vuelo',$id_vuelo)->firstOrFail();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al querer eliminar el vuelo",
                "error" => $th->getMessage()
            ]);
        }

        try {
            $vuelo->delete();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al eliminar el vuelo",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json("vuelo eliminado");
    }

    public function getAll(){
        try {
            $vuelos = Vuelo::all();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar todos los vuelos disponibles",
                "error" => $th->getMessage()
            ]);
        }

        return response()->json($vuelos);
    }
}
