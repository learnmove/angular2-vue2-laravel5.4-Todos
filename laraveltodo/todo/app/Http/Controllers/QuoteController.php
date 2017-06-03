<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quote;
use JWTAuth;
class QuoteController extends Controller
{
    //
       public function getQuotes(){
		$quotes=Quote::all();
		$response=['quotes'=>$quotes];
return response()->json($response,200);
    }
   public function postQuote(Request $req){
   	$user=JWTAuth::parseToken()->toUser();
    	
   	$quote=new Quote();
   	$quote->content=$req->input('content');
   	$quote->save();
   	return response()->json(['quote'=>$quote,'user'=>$user],201);
    }
   public function putQuote(Request $req,$id){
    	$quote=Quote::find($id);
    	if(!$quote){
    		return response()->json(['message'=>'這個評論不存在'],404);
    	}
    	$quote->content=$req->input('content');
    	$quote->save();
    	return response()->json(['quote'=>$quote],200);
    }
   public function deleteQuote($id){
    	$quote=Quote::find($id);
    	$quote->delete();
    	return response()->json(['message'=>'成功刪除'],200);
    }
}
