<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vuelo;
use App\Models\Reserva;

class Servicio extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_servicio';
    protected $table = 'servicio';

    public function vuelo(){
        return $this->hasOne(
            Vuelo::class,
            'id_vuelo',
            'id_vuelo'
        );
    }

    public function reserva(){
        return $this->hasOne(
            Reserva::class,
            'id_reserva',
            'id_reserva'
        );
    }
}
