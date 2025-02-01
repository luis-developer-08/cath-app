<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'student_id',
        'loa_semester',
        'loa_year',
        're_semester',
        're_year',
        'reason'
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
