<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Patient;
use App\Models\Doctor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class LoginRegisterController extends Controller
{
     /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|string|email:rfc,dns|max:250|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'dob' => 'required|date|before:today',
            'phone_number' => 'required|string|max:12|unique:patient,phone_number',
            'gender' => 'nullable|string|max:10|in:male,female'
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'Validation Error!',
                'data' => $validate->errors(),
            ], 403);
        }

        $user = User::create([
            'email' => $request->email,
            'type' => "patient",
            'password' => Hash::make($request->password),
        ]);

        $identity = Patient::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'dob' => Carbon::parse($request->dob)->format('Y-m-d'),
            'phone_number' => $request->phone_number,
            'user_id' => $user->id,
        ]);

        $data['token'] = $user->createToken($request->email)->plainTextToken;
        $data['user'] = $user;
        $data['identity'] = $identity;
        
        $response = [
            'status' => 'success',
            'message' => 'User is logged in successfully.',
            'data' => $data,
        ];

        return response()->json($response, 201);
    }

    /**
     * Authenticate the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'Validation Error!',
                'data' => $validate->errors(),
            ], 403);  
        }

        // Check email exist
        $user = User::where('email', $request->email)->first();

        // Check password
        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Invalid credentials'
                ], 401);
        }

        if($user->type == 'patient'){
            $identity = Patient::where('user_id', $user->id)->first();
        }elseif($user->type == 'doctor'){
            $identity = Patient::where('user_id', $user->id)->first();
        }else{
            dd('stop');
        }


        $data['token'] = $user->createToken($request->email)->plainTextToken;
        $data['user'] = $user;
        $data['identity'] = $identity;
        
        $response = [
            'status' => 'success',
            'message' => 'User is logged in successfully.',
            'data' => $data,
        ];

        return response()->json($response, 200);
    } 

    /**
     * 
     */
    public function show(Request $request)
    {
        $user = $request->user();
        if($user->type == 'patient'){
            $identity = Patient::where('user_id', $user->id)->first();
        }elseif($user->type == 'doctor'){
            $identity = Patient::where('user_id', $user->id)->first();
        }else{
            dd('stop');
        }

        $data['user'] = $user;
        $data['identity'] = $identity;

        return response()->json($data, 200);
    }

    /**
     * Log out the user from application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'User is logged out successfully'
            ], 200);
    }    
}