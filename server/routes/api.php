<?php


use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Product Routes

Route::post('products',[ProductController::class,'store']);
Route::put('products/{id}',[ProductController::class,'update']);
Route::delete('products/{id}',[ProductController::class,'destroy']);

//Order Routes

Route::get('orders',[OrderController::class,'index']); //radi
Route::post('orders',[OrderController::class,'store']);

//OrderItems Routes

Route::post('orderItems',[OrderItemController::class,'store']);
Route::get('orderItems',[OrderItemController::class,'index']); //radi

//User 
//Mora da se popravi
Route ::any('register','userController@register');
Route ::any('login','userController@login');