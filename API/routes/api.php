<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\AeropuertoController;
use App\Http\Controllers\AvionController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[UserController::class, 'register']);
Route::post('login',[UserController::class, 'login']);

//Route::post('user',[UserController::class, 'getAuthenticatedUser']);

Route::controller(UserController::class)->group(function () {
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});


 //Reserva controller
 Route::post('reserva/updateEstado',[ReservaController::class,'modificarEstadoReserva']);
 Route::post('servicio/new',[ReservaController::class,'agregarServicio']);
 Route::post('reserva/new',[ReservaController::class,'nuevaReserva']);
 Route::post('reserva/update',[ReservaController::class,'modificarReserva']);
 Route::post('pago/new',[ReservaController::class,'nuevoPago']);
 Route::get('reserva/get/{id_usuario}',[ReservaController::class,'listarReservas']);
 Route::get('buscarServicio/{id_servicio}',[ReservaController::class,'buscarServicio']);

 //----------------------------------------------------------------------------------------------------

 //Servicio controller

 //CRUD OFERTA
 Route::post('oferta/new',[ServicioController::class,'createOferta']);
 Route::post('oferta/update',[ServicioController::class,'updateOferta']);
 Route::delete('oferta/delete/{id_oferta}',[ServicioController::class,'deleteOferta']);
 Route::get('oferta/getById/{id_oferta}',[ServicioController::class,'getOferta']);
 Route::get('oferta/getAll',[ServicioController::class,'getAllOfertas']);

 //CRUD VUELO
 Route::post('vuelo/new',[ServicioController::class,'createVuelo']);
 Route::post('vuelo/update',[ServicioController::class,'updateVuelo']);
 Route::delete('vuelo/delete/{id_vuelo}',[ServicioController::class,'deleteVuelo']);
 Route::post('vuelosPorFecha',[ServicioController::class,'vuelosPorFecha']);
 Route::get('vuelo/getAll',[ServicioController::class,'getAllVuelos']);

 //----------------------------------------------------------------------------------------------------
 //Aeropuerto Controller
 //CRUD AEROPUERTO
 Route::post('aeropuerto/new',[AeropuertoController::class,'create']);
 Route::post('aeropuerto/update',[AeropuertoController::class,'update']);
 Route::delete('aeropuerto/delete/{id_aeropuerto}',[AeropuertoController::class,'delete']);
 Route::get('aeropuerto/getById/{id_aeropuerto}',[AeropuertoController::class,'get']);
 Route::get('aeropuerto/getAll',[AeropuertoController::class,'getAll']);

 //----------------------------------------------------------------------------------------------------
 //Avion Controller
 //CRUD AVION Y ASIENTOS
 Route::post('avion/new',[AvionController::class,'create']);
 Route::post('avion/update',[AvionController::class,'update']);
 Route::delete('avion/delete/{id_avion}',[AvionController::class,'delete']);
 Route::get('avion/getById/{id_avion}',[AvionController::class,'get']);
 Route::get('avion/getAll',[AvionController::class,'getAll']);

 Route::post('asiento/new',[AvionController::class,'createAsientos']);
 Route::post('asiento/tomarAsiento',[AvionController::class,'tomarAsiento']);
 Route::post('asiento/update',[AvionController::class,'updateAsiento']);
 Route::delete('asiento/delete/{id_asiento}',[AvionController::class,'deleteAsiento']);
 Route::get('asiento/getById/{id_asiento}',[AvionController::class,'getAsiento']);
 Route::get('asiento/asientosLibres/{id_avion}',[AvionController::class,'asientosLibres']);
 Route::get('asiento/getAll',[AvionController::class,'getAllAsientos']);




 Route::post('logout', [UserController::class, 'logout']);


 Route::middleware(['jwt.verify'])->group(function () {

    Route::middleware(['rol.verify'])->group(function () {

    });

});
