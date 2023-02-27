<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Asiento;
use App\Models\Avion;
use App\Models\Aeropuerto;
class Vuelo extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_vuelo';
    protected $table = 'vuelo';

    public function vueloConAsientos(){
        return $this->hasManyThrough(
            Asiento::class,
            Avion::class,
            'id_avion',
            'id_avion',
            'id_vuelo',
            'id_avion'
        );
    }

    public function aeropuertoOrigen(){
        return $this->hasOne(
            Aeropuerto::class,
            'id_aeropuerto',
            'aeropuertoOrigen'
        );
    }

    public function aeropuertoDestino(){
        return $this->hasOne(
            Aeropuerto::class,
            'id_aeropuerto',
            'aeropuertoDestino'
        );
    }

    public function avion(){
        return $this->hasOne(
            Avion::class,
            'id_avion',
            'id_avion'
        );
    }
}
