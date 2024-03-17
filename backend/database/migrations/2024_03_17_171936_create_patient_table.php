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
        Schema::create('patient', function (Blueprint $table) {
            $table->id('patient_id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->date('dob');
            $table->string('phone_number', 12);
            $table->string('gender', 10);
            $table->decimal('weight');
            $table->decimal('height');
            $table->foreignId('user_id')->foreign()->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient');
    }
};
