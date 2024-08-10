<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\RegisterController;
use App\Models\Registration;

Route::get('/registrations', function () {
    $registrations = Registration::all();
    Log::info('Hello');
    return response()->json($registrations);
});

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api'], function(){
    Route::post('/register', [RegisterController::class, 'register']);
});
