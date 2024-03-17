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
        Schema::create('consultation', function (Blueprint $table) {
            $table->id('consul_id');
            $table->dateTime('consul_start_time');
            $table->dateTime('consul_end_time');
            $table->longText('consul_symptoms');
            $table->longText('consul_diagnosis');
            $table->longText('consul_transcribe');
            $table->foreignId('consul_speciality_id')->foreign()->references('speciality_id')->on('speciality');
            $table->foreignId('consul_patient_id')->foreign()->references('patient_id')->on('patient');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultation');
    }
};
