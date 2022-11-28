<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\OfertaController;
use App\Http\Controllers\VueloController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\AeropuertoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register',[UserController::class, 'register']);
Route::post('login',[UserController::class, 'authenticate']);

Route::middleware(['jwt.verify'])->group(function () {

    Route::middleware(['rol.verify'])->group(function () {
        Route::post('reserva/updateEstado',[ServicioController::class,'modificarEstadoReserva']);
        Route::post('servicio/new',[ServicioController::class,'agregarServicio']);
        Route::post('reserva/new',[ServicioController::class,'nuevaReserva']);
        Route::post('reserva/update',[ServicioController::class,'modificarReserva']);
      
        Route::post('pago/new',[ServicioController::class,'nuevoPago']);
    });

   
});



Route::get('reserva/get/{id_usuario}',[ServicioController::class,'listarReservas']);

//CRUD OFERTA

Route::post('oferta/new',[OfertaController::class,'create']);
Route::post('oferta/update',[OfertaController::class,'update']);
Route::delete('oferta/delete/{id_oferta}',[OfertaController::class,'delete']);
Route::get('oferta/getById/{id_oferta}',[OfertaController::class,'get']);
Route::get('oferta/getAll',[OfertaController::class,'getAll']);

//CRUD AEROPUERTO

Route::post('aeropuerto/new',[AeropuertoController::class,'create']);
Route::post('aeropuerto/update',[AeropuertoController::class,'update']);
Route::delete('aeropuerto/delete/{id_aeropuerto}',[AeropuertoController::class,'delete']);
Route::get('aeropuerto/getById/{id_aeropuerto}',[AeropuertoController::class,'get']);
Route::get('aeropuerto/getAll',[AeropuertoController::class,'getAll']);

 //CRUD VUELO

 Route::post('vuelo/new',[VueloController::class,'create']);
 Route::post('vuelo/update',[VueloController::class,'update']);
 Route::delete('vuelo/delete/{id_vuelo}',[VueloController::class,'delete']);
 Route::post('vuelosPorFecha',[VueloController::class,'vuelosPorFecha']);
 Route::get('vuelo/getAll',[VueloController::class,'getAll']);
 Route::get('vuelo/getById/{id_vuelo}',[VueloController::class,'get']);
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


Route::post('user',[UserController::class, 'getAuthenticatedUser']);

Route::post('logout', [UserController::class, 'logout']);
