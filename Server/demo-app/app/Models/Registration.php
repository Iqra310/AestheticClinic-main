<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    // Specify table name if it's not following Laravel's naming convention
    protected $table = 'registration';

    // Specify fillable fields if you want to allow mass assignment
    protected $fillable = ['firstname', 'lastname', 'email', 'course', 'aboutus', 'message'];

    // If you don’t have timestamps in your table, set this to false
    public $timestamps = false;
}
