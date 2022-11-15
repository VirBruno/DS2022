<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('aeropuerto', function (Blueprint $table) {
            $table->id('id_aeropuerto')->unique();
            $table->integer('codigo');
            $table->double('latitud');
            $table->double('longitud');
            $table->string('nombre');
           // $table->integer('id_region')->unsigned();
         //   $table->foreign('id_region')->references('id_region')->on('region')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aeropuerto');
    }
};
