<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['jwt.verify'])->group(function () {
    Route::middleware(['rol.verify'])->group(function () {
        Route::post('reserva/updateEstado',[ServicioController::class,'modificarEstadoReserva']);
        Route::post('servicio/new',[ServicioController::class,'agregarServicio']);
        Route::post('reserva/new',[ServicioController::class,'nuevaReserva']);
        Route::post('reserva/update',[ServicioController::class,'modificarReserva']);
        Route::get('reserva/get/{id_usuario}',[ServicioController::class,'listarReservas']);
        Route::post('pago/new',[ServicioController::class,'nuevoPago']);
    });
    Route::post('user',[UserController::class, 'getAuthenticatedUser']);

    Route::post('logout', [UserController::class, 'logout']);
});

Route::post('register',[UserController::class, 'register']);
Route::post('login',[UserController::class, 'authenticate']);
