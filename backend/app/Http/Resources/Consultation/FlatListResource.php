<?php

namespace App\Http\Resources\Consultation;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlatListResource extends JsonResource
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
            'categorie' =>$this->consul_id,
            'symptomes' =>$this->consul_id,
            'start' =>$this->consul_id,
            'end' =>$this->consul_id
        ];
    }
}
