<?php
use Illuminate\Http\Request;
use Illuminate\Http\Support\Facades\Route;
use Illuminate\app\Http\Controllers\RegisterController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[RegisterController::class,'register']);
