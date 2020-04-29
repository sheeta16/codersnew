<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Options extends Model
{
    protected $table    = 'options';
    public $primaryKey  = 'id';
    public $timestamps  = true;
    protected $fillable = array('option','type','name','price','hours','weight','created_at','updated_at');
}
