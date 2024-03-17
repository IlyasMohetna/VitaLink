<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctor_specialities', function (Blueprint $table) {
            $table->id('doctor_speciality_link_id');
            $table->foreignId('doctor_id')->foreign()->references('doctor_id')->on('doctor');
            $table->foreignId('speciality_id')->foreign()->references('speciality_id')->on('speciality');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_specialities');
    }
};
