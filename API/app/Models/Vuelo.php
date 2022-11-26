<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
