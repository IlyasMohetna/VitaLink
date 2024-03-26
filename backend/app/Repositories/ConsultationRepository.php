<?php

namespace App\Repositories;
use App\Models\Consultation;
use App\Interfaces\ConsultationRepositoryInterface;

class ConsultationRepository implements ConsultationRepositoryInterface
{
    public function index(){
        return Consultation::all();
    }

    public function getById($id){
       return Consultation::findOrFail($id);
    }

    public function store(array $data){
       return Consultation::create($data);
    }

    public function update(array $data,$id){
       return Consultation::whereId($id)->update($data);
    }

    public function delete($id){
        Consultation::destroy($id);
    }
}