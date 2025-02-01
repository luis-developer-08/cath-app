<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'student_number',
        'first_name',
        'middle_name',
        'last_name',
        'contact_number',
        'email',
        'year_id',
        'bachelor_id',
    ];

    public function bachelor()
    {
        return $this->belongsTo(Bachelor::class);
    }

    public function year()
    {
        return $this->belongsTo(Year::class);
    }
}
