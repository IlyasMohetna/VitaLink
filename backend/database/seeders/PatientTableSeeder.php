<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PatientTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('patient')->delete();
        
        \DB::table('patient')->insert(array (
            0 => 
            array (
                'patient_id' => 1,
                'first_name' => 'me',
                'last_name' => 'meme',
                'dob' => '2001-03-26',
                'phone_number' => '0763647384',
                'gender' => NULL,
                'weight' => NULL,
                'height' => NULL,
                'user_id' => 1,
                'created_at' => '2024-03-26 07:41:48',
                'updated_at' => '2024-03-26 07:41:48',
            ),
        ));
        
        
    }
}