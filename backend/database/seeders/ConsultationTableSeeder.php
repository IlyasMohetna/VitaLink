<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ConsultationTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('consultation')->delete();
        
        \DB::table('consultation')->insert(array (
            0 => 
            array (
                'consul_id' => 1,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 1',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 1,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'consul_id' => 2,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 2',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 2,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'consul_id' => 3,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 3',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 3,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'consul_id' => 4,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 4',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 3,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'consul_id' => 5,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 5',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 4,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'consul_id' => 6,
                'consul_start_time' => '2024-03-26 15:10:21',
                'consul_end_time' => '2024-03-26 15:10:21',
                'consul_symptoms' => 'SYMPTOMES 6',
                'consul_diagnosis' => 'DIAGNOSIS',
                'consul_transcribe' => 'TRANSCRIBE',
                'consul_speciality_id' => 5,
                'consul_patient_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}