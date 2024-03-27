<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'email' => 'meme@meme.meme',
                'type' => 'patient',
                'email_verified_at' => NULL,
                'password' => '$2y$12$S5dubZzmtQsuf58RamHQC.yXnOagpP7EI3Jq6x0IukhkuLYYiWUw6',
                'remember_token' => NULL,
                'created_at' => '2024-03-26 07:41:48',
                'updated_at' => '2024-03-26 07:41:48',
            ),
        ));
        
        
    }
}