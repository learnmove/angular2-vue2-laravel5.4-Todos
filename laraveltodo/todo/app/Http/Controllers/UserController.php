<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
class UserController extends Controller
{
    //
    public function signup(Request $res){
    	$this->validate($res,[
    		'name'=>'required',
    		'email'=>'required|email|unique:users',
    		'password'=>'required',

    		]);
    	$user=new User([
    		'name'=>$res->input('name'),
    		'email'=>$res->input('email'),
    		'password'=>bcrypt($res->input('password'))
    		]);
    	$user->save();
    	return response()->json(['message'=>'successful create user'],201);
    }
    public function signin(Request $res){
    	$this->validate($res,[
    		'email'=>'required|email',
    		'password'=>'required'
    		]);
    	$credential=$res->only('email','password');
    	
    	try {
    		if (!$token=JWTAuth::attempt($credential)) {
    			return response()->json(['error'=>'Invalid Credential'],401);

    			# code...
    		}
    	} catch (JWTException $e) {
    		return response()->json(['error'=>'could not create token'],500);
    	}
    	return response()->json(['token'=>$token],200);
    	
    }
}
