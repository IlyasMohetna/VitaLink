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
        Schema::create('appointment', function (Blueprint $table) {
            $table->id();
            $table->dateTime('appoint_start_time');
            $table->dateTime('appoint_end_time');
            $table->foreignId('appoint_doctor_id')->foreing()->references('doctor_id')->on('doctor');
            $table->foreignId('appoint_consul_id')->foreing()->references('consul_id')->on('consultation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment');
    }
};
