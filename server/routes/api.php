<?php


use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\AuthController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Product Routes

Route::get('products',[ProductController::class,'index']);
Route::get('products/{id}',[ProductController::class,'show']);
Route::post('products',[ProductController::class,'store']);
Route::put('products/{id}',[ProductController::class,'update']);
Route::delete('products/{id}',[ProductController::class,'destroy']);

Route::get('categories', [CategoryController::class, 'index']);

//Order Routes

Route::get('orders',[OrderController::class,'index']); //radi
Route::post('orders',[OrderController::class,'store']);

//OrderItems Routes

Route::post('orderItems',[OrderItemController::class,'store']);
Route::get('orderItems',[OrderItemController::class,'index']); //radi

//User 
//Mora da se popravi
Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {  
     


});