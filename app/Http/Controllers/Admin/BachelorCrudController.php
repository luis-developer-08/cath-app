<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bachelor;
use Illuminate\Http\Request;

class BachelorCrudController extends Controller
{
    public function getAllBachelor()
    {
        $bachelors = Bachelor::all();

        return response()->json($bachelors);
    }
}
