<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class RegisterController extends Controller
{
    function register(Request $req)
    {
        return $req->input();
    }
}
