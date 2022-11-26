<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class ReservaController extends Controller
{
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
