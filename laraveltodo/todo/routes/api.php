<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/quotes',[
	'uses'=>'QuoteController@getQuotes'
	]);
Route::group(['middleware'=>'auth.jwt'],function(){

Route::post('/quote',[
	'uses'=>'QuoteController@postQuote'
	]);

Route::put('/quote/{id}',[
	'uses'=>'QuoteController@putQuote'
	]);
Route::delete('/quote/{id}',[
	'uses'=>'QuoteController@deleteQuote'
	]);
});
// user
Route::group(['prefix'=>'user'],function(){
	Route::post('/signup',[
	'uses'=>'UserController@signup'
	]);
Route::post('/signin',[
	'uses'=>'UserController@signin'
	]);

});
