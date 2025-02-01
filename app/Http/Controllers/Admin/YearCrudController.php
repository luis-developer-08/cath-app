<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Year;
use Illuminate\Http\Request;

class YearCrudController extends Controller
{
    public function getAllYears()
    {
        $years = Year::all();

        return response()->json($years);
    }
}
