<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Classes\ApiResponseClass;
use App\Http\Resources\Consultation\FlatListResource;
use App\Http\Resources\Consultation\DetailResource;
use App\Interfaces\ConsultationRepositoryInterface;

class ConsultationController extends Controller
{

    private ConsultationRepositoryInterface $consultationRepositoryInterface;

    public function __construct(ConsultationRepositoryInterface $consultationRepositoryInterface)
    {
        $this->consultationRepositoryInterface = $consultationRepositoryInterface;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = $this->consultationRepositoryInterface->index();

        $resource = FlatListResource::collection($data);

        return ApiResponseClass::sendResponse($resource,'',200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $consultation = $this->consultationRepositoryInterface->getById($id);

        return ApiResponseClass::sendResponse(new DetailResource($consultation),'',200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Product $product)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdateProductRequest $request, $id)
    // {
    //     $updateDetails =[
    //         'name' => $request->name,
    //         'details' => $request->details
    //     ];
    //     DB::beginTransaction();
    //     try{
    //          $product = $this->productRepositoryInterface->update($updateDetails,$id);

    //          DB::commit();
    //          return ResponseClass::sendResponse('Product Update Successful','',201);

    //     }catch(\Exception $ex){
    //         return ResponseClass::rollback($ex);
    //     }
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy($id)
    // {
    //      $this->productRepositoryInterface->delete($id);

    //     return ResponseClass::sendResponse('Product Delete Successful','',204);
    // }
}
