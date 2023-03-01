<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vuelo;
use App\Models\User;
class Reserva extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_reserva';
    protected $table = 'reserva';

    public function vueloVuelta(){
        return $this->hasOne(
            Vuelo::class,
            
            'id_vuelo',
            'id_vuelo_vuelta'
        );
    }
    public function user(){
        return $this->hasOne(
            User::class,
            'id_usuario',
            'id_usuario'
        );
    }
    public function vueloIda(){
        return $this->hasOne(
            Vuelo::class,
           
            'id_vuelo',
            'id_vuelo_ida'
        );
    }
}
