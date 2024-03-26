<?php

namespace App\Http\Resources\Consultation;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'consul_id' =>$this->consul_id,
            'consul_start_time' =>$this->consul_id,
            'consul_end_time' =>$this->consul_id,
            'consul_symptoms' =>$this->consul_id,
            'consul_diagnosis' =>$this->consul_id,
            'consul_transcribe' =>$this->consul_id,
            'consul_speciality' =>$this->consul_id
        ];
    }
}
