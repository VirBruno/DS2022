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
        Schema::create('cliente', function (Blueprint $table) {
            $table->id('id_cliente');
            $table->integer('dni');
            $table->string('tipoDocumento');
            $table->integer('telefono');
           // $table->integer('id_direccion')->unsigned();
          //  $table->integer('id_usuario')->unsigned();
         //   $table->foreign('id_direccion')->references('id_direccion')->on('direccion')->onDelete('cascade');
       //     $table->foreign('id_usuario')->references('id_usuario')->on('usuario');
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
        Schema::dropIfExists('cliente');
    }
};
