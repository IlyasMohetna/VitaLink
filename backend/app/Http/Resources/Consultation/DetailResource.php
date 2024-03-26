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
            'id' =>$this->consul_id,
            'speciality' =>$this->speciality->speciality_name,
            'symptoms' =>$this->consul_symptoms,
            'diagnosis' =>$this->consul_diagnosis,
            'start' =>$this->consul_start_time->format('d/m/Y H:i'),
            'end' =>$this->consul_end_time->format('d/m/Y H:i')
        ];
    }
}
