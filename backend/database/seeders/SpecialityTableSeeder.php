<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SpecialityTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('speciality')->delete();
        
        \DB::table('speciality')->insert(array (
            0 => 
            array (
                'speciality_id' => 1,
                'speciality_name' => 'Cardiologie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'speciality_id' => 2,
                'speciality_name' => 'Dermatologie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'speciality_id' => 3,
                'speciality_name' => 'Neurologie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'speciality_id' => 4,
                'speciality_name' => 'Pédiatrie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'speciality_id' => 5,
                'speciality_name' => 'Psychiatrie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'speciality_id' => 6,
                'speciality_name' => 'Pneumologie',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}