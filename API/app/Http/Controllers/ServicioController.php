<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicio;
use App\Models\Oferta;
use App\Models\Pago;
use App\Models\Reserva;
use App\Models\Vuelo;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class ServicioController extends Controller
{

//A partir de acá Oferta

public function createOferta(Request $req){
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

public function updateOferta(Request $req){
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

public function getOferta($id_oferta){
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

public function deleteOferta($id_oferta){
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

public function getAllOfertas(){
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

//A partir de acá Vuelo
public function vuelosPorFecha(Request $req){
    if($req->fechaVuelta == null){
        try {
            $vuelo['ida'] = Vuelo::with('avion','aeropuertoOrigen','vueloConAsientos')
            ->where([
                ['aeropuertoOrigen',$req->origen],
                ['aeropuertoDestino',$req->destino],
                ['id_avion',$req->id_avion]
            ])
            ->whereDate('fechaYHoraPartida',$req->fechaPartida)
            ->get();
    
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar los vuelos por fecha",
                "error" => $th->getMessage()
            ],503);
        }
    } else {
        try {
            $vuelo['ida'] = Vuelo::with('avion','aeropuertoOrigen','vueloConAsientos')
            ->where([
                ['aeropuertoOrigen',$req->origen],
                ['aeropuertoDestino',$req->destino],
                ['id_avion',$req->id_avion]
            ])
            ->whereDate('fechaYHoraPartida',$req->fechaPartida)
            ->get();
    
            $vuelo['vuelta'] = Vuelo::with('avion','aeropuertoDestino','vueloConAsientos')
            ->where([
                ['aeropuertoOrigen',$req->destino],
                ['aeropuertoDestino',$req->origen],
                ['id_avion',$req->id_avion]
            ])
            ->whereDate('fechaYHoraPartida',$req->fechaVuelta)
            ->get();
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al consultar los vuelos por fecha",
                "error" => $th->getMessage()
            ],503);
        }
    }

    return response()->json($vuelo);
}

public function createVuelo(Request $req){
    $vuelo = new Vuelo();

    $vuelo->id_avion = $req->id_avion;
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

public function updateVuelo(Request $req){
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

public function getVuelo($id_vuelo){
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

public function deleteVuelo($id_vuelo){
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

public function getAllVuelos(){
    try {
        $vuelos = Vuelo::with('avion','aeropuertoOrigen','aeropuertoDestino','vueloConAsientos')->get();
    } catch (\Throwable $th) {
        return response()->json([
            "message" => "Error al consultar todos los vuelos disponibles",
            "error" => $th->getMessage()
        ]);
    }

    return response()->json($vuelos);
}

}
