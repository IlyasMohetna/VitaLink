<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    use HasFactory;
    protected $table = 'consultation';
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'consul_start_time' => 'datetime',
            'consul_end_time' => 'datetime',
        ];
    }
}
