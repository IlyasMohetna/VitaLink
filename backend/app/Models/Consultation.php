<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    /**
     * Get the user associated with the Consultation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function speciality(): HasOne
    {
        return $this->hasOne(Speciality::class, 'speciality_id', 'consul_speciality_id');
    }
}
